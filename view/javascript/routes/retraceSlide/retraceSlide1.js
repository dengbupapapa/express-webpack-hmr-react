const indexType5 = {
    path: 'indexType5',
    getComponent(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('sModule/page/retraceSlide/retraceSlide1').default)
        }, 'page/indexType5')
    }
}

export default indexType5;