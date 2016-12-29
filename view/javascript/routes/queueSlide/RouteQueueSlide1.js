const RoutequeueSlide1 = {
    path: 'queueSlide1',
    getComponent(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('sModule/page/queueSlide/queueSlide1').default)
        }, 'page/queueSlide/queueSlide1')
    }
}

export default RoutequeueSlide1;