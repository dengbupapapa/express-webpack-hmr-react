import {
    Component,
    cloneElement,
    createElement
} from 'react'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class routerTransition extends Component {

    constructor(props) {

        super(props);
        this.state = {
            nowPathname: this.props.location.pathname,
            prevPathname: '',
            renderComponent: true
        };

    }

    retraceSlideArr = [];

    componentDidMount() {

        if (this.state.renderComponent) this.setState({
            renderComponent: false
        })

    }

    componentWillReceiveProps(nextProps) {

        let {
            nowPathname: stateNowPathname,
            prevPathname: statePrevPathname
        } = this.state;
        let arrPathname = [stateNowPathname, statePrevPathname];
        let nowPathname = nextProps.location.pathname;
        let {
            location: {
                pathname: prevPathname
            },
            animateType
        } = this.props;

        this.setState({
            nowPathname: nowPathname,
            prevPathname: prevPathname,
        });

    }


    animateTypeFun({
        animateType,
        parentPath,
        sonPath,
        runpath,
        children,
        location: {
            pathname
        }
    }, {
        nowPathname,
        prevPathname
    }) {

        let classNameBool;
        let retraceSlideArr = this.retraceSlideArr;

        if (animateType == 'levelSlide') { //父子切换

            runpath = [parentPath, sonPath]
            classNameBool = pathname == parentPath;

        } else if (animateType == 'retraceSlide') { //记忆折返

            let retraceSlideIndex = retraceSlideArr.indexOf(nowPathname);
            let retraceSlideBool = retraceSlideArr.includes(nowPathname);

            if (retraceSlideBool) { //序列中存在该页地址

                retraceSlideArr = retraceSlideArr.slice(0, retraceSlideIndex + 1);

            } else {

                retraceSlideArr.push(nowPathname);

            }

            this.retraceSlideArr = retraceSlideArr;

            classNameBool = retraceSlideBool;

        } else if (animateType == 'queueSlide') { //滑动队列

            classNameBool = runpath.indexOf(pathname) < runpath.indexOf(prevPathname);

        }

        return {
            pathname,
            children,
            runpath: [...runpath, ''],
            prevPathname,
            className: classNameBool ? ('reverse-' + animateType) : animateType
        };

    }

    render() {

        const {
            children,
            pathname,
            runpath,
            prevPathname,
            className
        } = this.animateTypeFun(this.props, this.state);

        // const {
        //     transitionAppear,
        //     transitionEnterTimeout,
        //     transitionLeaveTimeout
        // } = this.props;

        let runTransitionBool = runpath && runpath.includes(pathname) && runpath.includes(prevPathname);
        // let ReactCSSTransitionGroupDom;

        // if (runpath && runpath.includes(pathname)) {

        //     ReactCSSTransitionGroupDom = createElement(ReactCSSTransitionGroup, {
        //             component: "div",
        //             className: 'transition-wrapper',
        //             transitionName: className,
        //             // transitionEnter: runpath && runpath.includes(pathname) && runpath.includes(prevPathname),
        //             // transitionLeave: runpath && runpath.includes(pathname) && runpath.includes(prevPathname),
        //             transitionEnterTimeout: 500,
        //             transitionLeaveTimeout: 500
        //         },
        //         cloneElement(children, {
        //             key: pathname
        //         })
        //     );

        // } else {

        //     ReactCSSTransitionGroupDom = createElement('div', null, children);

        // }

        // return (ReactCSSTransitionGroupDom);
        // console.log(123);
        // {runTransitionBool?cloneElement(children, {
        //             key: pathname
        //         }):children}
        // {runTransitionBool?createElement('div', {
        //             key: pathname,
        //             retraceSlideArr:this.retraceSlideArr
        //         },children):createElement('div', {
        //             retraceSlideArr:this.retraceSlideArr
        //         }),children}
        return (
            <ReactCSSTransitionGroup
                component = 'div'
                className = 'transition-wrapper'
                transitionName = {className}
                transitionAppear = {false}
                transitionEnter = {runTransitionBool}
                transitionLeave = {runTransitionBool}
                transitionEnterTimeout = {500}
                transitionLeaveTimeout = {500}
            >
                {runTransitionBool?cloneElement(children, {
                    key: pathname
                }):children}
            </ReactCSSTransitionGroup>
        )

    }
}