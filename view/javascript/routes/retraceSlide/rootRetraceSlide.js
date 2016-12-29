const indexType3 = {
    path: 'indexType3',
    indexRoute: {
        getComponent(nextState, callback) {
            require.ensure([], (require) => {
                callback(null, require('sModule/page/retraceSlide/retraceSlide1').default)
            }, 'page/indexType4')
        },
    },
    getComponent(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('sModule/page/retraceSlide/rootRetraceSlide').default)
        }, 'page/indexType3')
    },
    childRoutes: [
        require('./retraceSlide1').default,
        require('./retraceSlide2').default
    ]
}

export default indexType3;