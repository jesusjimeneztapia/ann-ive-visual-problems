import * as tf from '@tensorflow/tfjs'

let model

const createModel = () => {
    /*
        <---- Space to create model and hidden layer ---->
    */

    // output layer
    const outputConfig = {
        units: 4,
        inputShape: [10],
        activation: 'sigmoid',
    }
    const outputLayer = tf.layers.dense(outputConfig)
    model.add(outputLayer)

    // compile
    const compileConfig = {
        optimizer: 'sgd',
        loss: 'meanSquaredError',
    }
    model.compile(compileConfig)
}

export { createModel }
