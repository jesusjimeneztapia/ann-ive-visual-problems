import * as tf from '@tensorflow/tfjs'
import { getProblemArray } from '../constants/results'
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
        activation: 'softmax',
    }
    const outputLayer = tf.layers.dense(outputConfig)
    model.add(outputLayer)

    const learningRate = 0.1
    const optimizer = tf.train.adam(learningRate)
    const compileConfig = {
        optimizer: optimizer,
        loss: 'categoricalCrossentropy',
        metrics: ['accuracy'],
    }
    model.compile(compileConfig)
}

const train = async (ok) => {
    const trainConfig = {
        epochs: 64,
    }

    const inputTensor = tf.tensor2d(inputs)
    const outputTensor = tf.tensor2d(outputs)

    const h = await model.fit(inputTensor, outputTensor, trainConfig)
    ok(true)
    console.log(h.history.loss[h.history.loss.length - 1])
}

const predict = async ({
    age,
    blurredVisionAfar,
    blurredVisionCloseUp,
    headache,
    eyeStrain,
    mom,
    dad,
}) => {
    let data = []
    if (age < 13) {
        data = [1, 0]
    } else {
        data = [0, 1]
    }
    data = data.concat([blurredVisionAfar, blurredVisionCloseUp, headache, eyeStrain])
    data = data.concat(getProblemArray(mom, dad))

    const prediction = model.predict(tf.tensor2d([data]))
    data = await prediction.data()
    const max = Math.max(...data)
    const index = data.indexOf(max)

    return index
}

createModel()

export { train, predict }
