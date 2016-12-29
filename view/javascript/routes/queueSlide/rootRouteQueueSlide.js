const RoutequeueSlide1 = {
    // path: '/',
    getComponent(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('sModule/page/queueSlide/rootQueueSlide').default)
        }, 'page/queueSlide/rootQueueSlide')
    },
    childRoutes: [
        require('./RouteQueueSlide1').default,
        require('./RouteQueueSlide2').default,
        require('./RouteQueueSlide3').default,
    ]
}

export default RoutequeueSlide1;