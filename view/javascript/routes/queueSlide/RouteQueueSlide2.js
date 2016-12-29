const RoutequeueSlide2 = {
    path: 'queueSlide2',
    getComponent(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('sModule/page/queueSlide/queueSlide1').default)
        }, 'page/queueSlide/queueSlide2')
    }
}

export default RoutequeueSlide2;