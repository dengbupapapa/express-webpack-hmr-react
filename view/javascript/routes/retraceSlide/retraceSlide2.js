const indexType6 = {
    path: 'indexType6',
    getComponent(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('sModule/page/retraceSlide/retraceSlide1').default)
        }, 'page/indexType6')
    }
}

export default indexType6;