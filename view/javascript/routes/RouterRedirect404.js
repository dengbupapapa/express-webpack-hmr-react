const RouterRedirect404 = {
    path: '*',
    onEnter: (_, replaceState) => replaceState("/404")
}

export default RouterRedirect404;