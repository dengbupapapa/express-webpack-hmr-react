import {
    Link,
    IndexLink,
    Lifecycle
} from 'react-router';

import {
    Component
} from 'react'

export default class queueSlide1 extends Component {

    render() {

        let {location:{pathname}}=this.props;

        return (
            <div className='fn-h-rate100 fn-w-rate100 fn-bgd-000 fn-font-s48'>我是背景</div>
        );
    }

}