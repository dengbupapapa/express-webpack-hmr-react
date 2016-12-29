const app404 = {
    path: '404',
    // getChildRoutes(partialNextState, cb) {
    //   require.ensure([], (require) => {
    //     cb(null, [
    //       require('./routes/result'),
    //       require('./routes/frequency')
    //     ])
    //   })
    // },

    getComponent(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('sModule/public/common/app404').default)
        }, 'page/app404')
    }
}

export default app404;