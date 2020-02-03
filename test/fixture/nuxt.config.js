const { resolve } = require('path')

module.exports = {
    rootDir: resolve(__dirname, '../..'),
    buildDir: resolve(__dirname, '.nuxt'),
    srcDir: __dirname,
    render: {
        resourceHints: false
    },
    modules: [
        resolve(__dirname, '..', '..', 'lib', 'module.js')
    ],
    serverMiddleware: [
    ],
    build: {
        terser: false
    }
}
