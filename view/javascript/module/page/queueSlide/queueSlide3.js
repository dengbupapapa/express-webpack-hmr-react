import {
    Link,
    IndexLink,
    Lifecycle
} from 'react-router';

import {
    Component
} from 'react'

export default class queueSlide2 extends Component {

    render() {

        let {location:{pathname}}=this.props;

        return (
            <div>
                <Link to='/queueSlide1' className={pathname=='/queueSlide1'?'fn-font-s18':''}>queueSlide1</Link>
                {' '}
                <Link to='/queueSlide2' className={pathname=='/queueSlide2'?'fn-font-s18':''}>queueSlide2</Link>
                {' '}
                <Link to='/queueSlide3' className={pathname=='/queueSlide3'?'fn-font-s18':''}>queueSlide3</Link>
            </div>
        );
    }

}