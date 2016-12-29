const indexType2 = {
    path: 'indexType2',
    getComponent(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('sModule/page/indexType2').default)
        }, 'page/indexType2')
    }
}

export default indexType2;