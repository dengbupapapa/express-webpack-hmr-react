import Box from 'sModule/public/common/marginBox';
import Plate1Style from 'cModule/layoutBox/plate1';
import deepCompare from 'sModule/public/lib/deepCompare';
import {
    Link
} from 'react-router';
import {
    Component
} from 'react';

class ComponentPlate1 extends Component {
    render() {
        return (
            <div className='fn-clear fn-h-100'>
                <div className={'fn-left fn-w-rate20 fn-h-rate100' + ' '+ Plate1Style.backLeft}></div>
                <div className={'fn-right fn-w-rate80 fn-h-rate100' + ' '+ Plate1Style.backRigth}></div>
            </div>
        )
    }
}

import Plate2Style from 'cModule/layoutBox/plate2';

class ComponentPlate2 extends Component {
    render() {
        return (
            <div className={Plate2Style.style}></div>
        )
    }
}

import BennerStyle from 'cModule/layoutBox/banner';
import {
    ArrImgs
} from 'sRequest/index';
import * as actiontor from 'sActions/page/indexType1';

class ComponentBanner extends Component {

    constructor(props) {

        super(props);
        this.state = {
            showImage: ArrImgs[this.props.bannerScroll].src,
            reverse: 0, //是否逆向播放
            showClassName: ''
        };

    }

    // componentWillMount() {
    //     setTimeout(() => {
    //         this.setState({
    //             next: 2
    //         });
    //     }, 1000)
    // }

    componentDidMount() { //挂载后

        this.props.browserPrefix.forEach(function(item) {

            this.refs.showImgRef.addEventListener(item + "TransitionEnd", function() {

                if (this.state.showClassName == BennerStyle['state-base-start']) {

                    this.setState({
                        showClassName: BennerStyle['state-base-end'],
                        showImage: this.customAttribute.showImage
                    });

                } else if (this.state.showClassName == BennerStyle['state-base-end']) {

                    this.setState({
                        showClassName: '',
                        showImage: this.customAttribute.showImage
                    });

                }

            }.bind(this));

        }, this);

        this.handleAutoPlay();

    }

    componentWillReceiveProps(nextProps) {

        let nextIndexBannerScroll = nextProps.bannerScroll;

        if (this.props.bannerScroll == nextIndexBannerScroll) {

            // return false;

        } else if (this.props.bannerScroll > nextIndexBannerScroll && nextIndexBannerScroll != 0) {

            this.setState({
                reverse: 1
            })

        } else if (this.props.bannerScroll < nextIndexBannerScroll && nextIndexBannerScroll != this.props.ArrImgs.length - 1) {

            this.setState({
                reverse: 0
            })

        }

        this.handleAnimate(nextIndexBannerScroll);

    }

    componentWillUnmount() {

        clearInterval(this.autoPlay);

    }

    shouldComponentUpdate(nextProps, nextState) {

        return deepCompare(this, nextProps, nextState);

    }

    handleAutoPlay() { //自动播放

        this.autoPlay = setInterval(function() {

            let nextIndex;
            let indexBannerScroll = this.props.bannerScroll;

            if (indexBannerScroll == this.props.ArrImgs.length - 1) {

                nextIndex = indexBannerScroll - 1;

            } else if (indexBannerScroll == 0) {

                nextIndex = indexBannerScroll + 1;

            } else if (this.state.reverse) {

                nextIndex = indexBannerScroll - 1;

            } else if (!this.state.reverse) {

                nextIndex = indexBannerScroll + 1;

            }

            this.props.setBannerActive(nextIndex);

        }.bind(this), this.props.speed);

    }

    handleAnimate(dataIndex) { //执行动画入口

        this.setState({
            showClassName: BennerStyle['state-base-start']
        });

        this.customAttribute = {
            showImage: this.props.ArrImgs[dataIndex].src
        }

    }

    handleOnMouseOver() {

        clearInterval(this.autoPlay);

    }

    handleOnMouseOut() {

        this.handleAutoPlay();

    }

    handleClick(event) { //点击选择图片

        let targetNode, targetNodeParent, dataIndex;

        targetNode = event.target;
        targetNodeParent = targetNode.parentNode;

        if (targetNode.tagName == 'SPAN') {

            //dots选中
            dataIndex = parseInt(targetNodeParent.getAttribute('data-index'));

            this.props.setBannerActive(dataIndex);

        }


    }

    render() {

        let liGather = this.props.ArrImgs.map(function(item, i) {
            return <li data-index={i} key={i} className={this.props.bannerScroll==i?BennerStyle.on:''} onMouseOut={this.handleOnMouseOut.bind(this)} onMouseOver={this.handleOnMouseOver.bind(this)}>
                        <span style={{background:'url('+item.src+') 0 0 /cover'}}></span>
                    </li>;
        }.bind(this));

        return (
            <div className={BennerStyle.banner}>
                <div className={BennerStyle.showImageBox}>
                    <ul className={BennerStyle.iconsBox} onClick={this.handleClick.bind(this)}>
                        {liGather}
                    </ul>
                    <div className={BennerStyle.showImage+(this.state.showClassName?'  '+this.state.showClassName:'')} style={{background:'url('+this.state.showImage+') 0 0 /cover',opacity:this.state.showOpacity}} ref="showImgRef"></div>
                </div>
            </div>
        )

    }
}

ComponentBanner.defaultProps = {
    browserPrefix: ['webkit', 'o', 'moz', 'ms']
};

//textDes
import ComponentTextDes from 'sModule/public/common/textDes';
// import routerTransition from 'sModule/public/lib/routerTransition';
import {
    Lifecycle
} from 'react-router'

class ComponentIndexType1 extends Component {

    render() {
        return (
            <div>
                <Box moreStyle='fn-pin-rae'>
                    <ComponentPlate2/>
                </Box>
                <Box moreStyle='fn-pin-rae'>
                    <ComponentPlate1/>
                </Box>
                <Box moreStyle='fn-pin-rae'>
                    <ComponentBanner ArrImgs={ArrImgs} speed={3000} {...this.props}/>
                </Box>
                <Box moreStyle='fn-pin-rae'>
                    <ComponentTextDes ArrContent={ArrImgs} {...this.props}/>
                </Box>
                {/*<div onClick={this.handleClick.bind(this)}>123</div>*/}
            </div>
        )
    }
}



import {
    connect
} from 'react-redux'
import {
    bindActionCreators
} from 'redux'
import {
    createSelector,
    createStructuredSelector
} from 'reselect'

const getBannerScroll = (state) => state.bannerScroll;

// const countGetBannerScroll = createSelector(
//     getBannerScroll,
//     (bannerScroll) => {
//         console.log(bannerScroll);
//     }
// );

const mapStateToProps = createStructuredSelector({
    bannerScroll: getBannerScroll
});
const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators(actiontor, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ComponentIndexType1);