import {
    Component
} from 'react';
import {
    Carousel,
    Slider
} from 'antd';
import {
    ArrImgs
} from 'sRequest/index';
import Box from 'sModule/public/common/marginBox';
import ComponentTextDes from 'sModule/public/common/textDes'
import indexType2 from 'cModule/page/indexType2';

class ComponentIndexType2 extends Component {
    componentWillMount() { //挂载前

        this.liGather = ArrImgs.map(function(item, i) {
            return <div data-index={i} key={i} style={{background:'url('+item.src+') center center /cover',height:'400px'}}></div>;
        }.bind(this));

    }
    render() {
        return (
            <div>
                <Box moreStyle='fn-pin-rae'>
                    <Carousel autoplay className={indexType2.bannerList}>
                        {this.liGather}
                    </Carousel>
                </Box>
                <Box moreStyle={indexType2['marginTop-300']}>
                    <ComponentTextDes ArrContent={ArrImgs} {...this.props}/>
                </Box>
            </div>
        );
    }
}


import {
    connect
} from 'react-redux'

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

const select = createStructuredSelector({
    bannerScroll: getBannerScroll
});

export default connect(select)(ComponentIndexType2);