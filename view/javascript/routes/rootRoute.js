import {
    Router,
    browserHistory
} from 'react-router';

const routes = {
    path: '/',
    // onLeave(...a) {
    //     console.log(a);
    // },
    // onEnter(...a) {
    //     console.log(a);
    // },
    indexRoute: {
        getComponent(nextState, callback) {
            require.ensure([], (require) => {
                callback(null, require('sModule/page/indexType1').default)
            }, 'page/indexType1')
        },
    },
    getComponent(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('sModule/public/common/headFoot').default)
        }, 'common/headFoot')
    },
    childRoutes: [
        require('./RouteIndexType2').default,
        require('./retraceSlide/rootRetraceSlide').default,
        require('./queueSlide/rootRouteQueueSlide').default,
        require('./Router404').default,
        require('./RouterRedirect404').default
    ]
}


export default routes