import * as tf from '@tensorflow/tfjs'
import { inputs, outputs } from '../constants/trainingData'

let model

const createModel = () => {
    model = tf.sequential()

    const hiddenConfig = {
        units: 10,
        inputShape: [12],
        activation: 'sigmoid',
    }
    const hiddenLayer = tf.layers.dense(hiddenConfig)
    model.add(hiddenLayer)

    const outputConfig = {
        units: 4,
        inputShape: [10],
        activation: 'sigmoid',
    }
    const outputLayer = tf.layers.dense(outputConfig)
    model.add(outputLayer)

    const compileConfig = {
        optimizer: 'sgd',
        loss: 'meanSquaredError',
    }
    model.compile(compileConfig)
}

const train = async () => {
    const trainConfig = {
        epochs: 500,
    }

    const inputTensor = tf.tensor2d(inputs)
    const outputTensor = tf.tensor2d(outputs)

    const h = await model.fit(inputTensor, outputTensor, trainConfig)
    console.log(h.history.loss[h.history.loss.length - 1])
}

createModel()

export { train }
