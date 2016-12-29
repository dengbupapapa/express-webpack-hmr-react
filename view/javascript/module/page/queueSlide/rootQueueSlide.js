import {
    Link,
    IndexLink,
    Lifecycle
} from 'react-router';
import {
    Component
} from 'react'
import RouterTransition from 'sModule/public/lib/routerTransition';
import Box from 'sModule/public/common/marginBox';


export default class rootQueueSlide extends Component {

    render() {

        let {
            location: {
                pathname
            },
            children
        } = this.props;

        return (
            <Box moreStyle='fn-h-100'>
                <div>
                    <Link to='/queueSlide1' className={pathname=='/queueSlide1'?'fn-font-s18':''}>queueSlide1</Link>
                    {' '}
                    <Link to='/queueSlide2' className={pathname=='/queueSlide2'?'fn-font-s18':''}>queueSlide2</Link>
                    {' '}
                    <Link to='/queueSlide3' className={pathname=='/queueSlide3'?'fn-font-s18':''}>queueSlide3</Link>
                </div>
                <RouterTransition {...this.props} animateType='queueSlide' runpath={['/queueSlide1','/queueSlide2','/queueSlide3']}>
                    <div className='fn-bgd-fff'>
                        {children}
                    </div>
                </RouterTransition>
            </Box>
        );
    }

}