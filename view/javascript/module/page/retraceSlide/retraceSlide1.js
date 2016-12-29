import {
    Link,
    IndexLink,
    setRouteLeaveHook
} from 'react-router';

import {
    Component
} from 'react';


export default class ComponentIndexType5 extends Component {

    componentDidMount() {

        this.props.router.setRouteLeaveHook(
            this.props.route,
            this.routerWillLeave.bind(this)
        );

    }

    routerWillLeave(nextLocation) {

        let title = nextLocation.query.title;

        if (title) {
            this.props.setRetraceSlideTitle(title);
        }

    }

    render() {
        return (
            <div className='fn-h-rate100 fn-w-rate100 fn-bgd-000 fn-font-s48'>老子是背景</div>
        );
    }

}