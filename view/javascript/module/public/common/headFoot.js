import {
    Component,
    PropTypes,
    createClass
} from 'react';
import {
    Link,
    IndexLink
} from 'react-router';
import {
    Icon
} from 'antd';
import Box from 'sModule/public/common/marginBox';
import styleBtn from 'cModule/button';
import styleIpt from 'cModule/input';


class HeadContent extends Component {
    constructor(props) {

        let dataTime = new Date();

        super(props);
        this.state = {
            dayTime: dataTime.getFullYear() + '-' + (dataTime.getMonth() + 1) + '-' + dataTime.getDate() + ' ' + dataTime.getHours() + ':' + dataTime.getMinutes() + ':' + dataTime.getSeconds()
        };

    }

    componentWillMount() {

        this.autoPlay = setInterval(function() {

            let dataTime = new Date();

            this.setState({
                dayTime: dataTime.getFullYear() + '-' + (dataTime.getMonth() + 1) + '-' + dataTime.getDate() + ' ' + dataTime.getHours() + ':' + dataTime.getMinutes() + ':' + dataTime.getSeconds()
            })

        }.bind(this), 1000);

    }
    componentWillUnmount() {

        clearInterval(this.autoPlay);

    }
    render() {
        return (
            <div className='head fn-clear'>
                <div className='fn-left fn-clr-fff'>
                    <IndexLink to='/' className='fn-clr-fff'><h2>一个单纯的LOGO</h2></IndexLink>
                    <Link to='/queueSlide1' className='fn-clr-fff'><h4 className='fn-ocy-9'>我是你的小呀小LOGO</h4></Link>
                    <Link to='/indexType3?title=indexType3' className='fn-clr-fff'><h6 className='fn-ocy-7'>{this.state.dayTime}</h6></Link>
                </div>
                <div className={'fn-right fn-pin-rae fn-mt20'}>
                    <input className={styleIpt['head-seek-ipt']} type="text"/>
                    <div className={styleBtn['head-seek-btn']}>
                        <Icon type="search" />
                    </div>
                </div>
            </div>
        );
    }
}


class FootContent extends Component {

    render() {

        return (
            <div className='foot'>
                <div className='icon'>
                    {
                        this.props.pathname=='/'
                        ?
                        <Link to='/indexType2'>
                            <Icon type="appstore" />
                        </Link>
                        :
                        <IndexLink to='/'>
                            <Icon type="appstore" />
                        </IndexLink>
                    }
                </div>
            </div>
        );
    }
}

import RouterTransition from '../lib/routerTransition'
// animateType='queueSlide' runpath={['/','/indexType2','/indexType3']} animateType='levelSlide' parentPath='/' sonPath='/indexType2'
export default class headFoot extends Component {
    render() {
        return (
            <RouterTransition {...this.props} animateType='levelSlide' parentPath='/' sonPath='/indexType2'>
                <div className='fn-bgd-fff fn-h-rate100'>
                    <Box moreStyle='fn-bgd-000'>
                        <HeadContent/>
                    </Box>
                    {this.props.children}
                    <Box moreStyle='fn-pin-rae'>
                        <FootContent pathname={this.props.location.pathname}/>
                    </Box>
                </div>
            </RouterTransition>

        )
    }
}