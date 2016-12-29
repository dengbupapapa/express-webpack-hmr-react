const RoutequeueSlide3 = {
    path: 'queueSlide3',
    getComponent(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('sModule/page/queueSlide/queueSlide1').default)
        }, 'page/queueSlide/queueSlide3')
    }
}

export default RoutequeueSlide3;