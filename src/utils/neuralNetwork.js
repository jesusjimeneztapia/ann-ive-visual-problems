import * as tf from '@tensorflow/tfjs'

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

export { createModel }
