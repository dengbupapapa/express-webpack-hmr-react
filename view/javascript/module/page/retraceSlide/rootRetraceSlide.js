import {
    Link,
    IndexLink
} from 'react-router';
import {
    Component,
    cloneElement
} from 'react'
import RouterTransition from 'sModule/public/lib/routerTransition'
import Box from 'sModule/public/common/marginBox';
import * as actiontor from 'sActions/page/retraceSlide/retraceSlide1';

class ComponentIndexType3 extends Component {

    componentDidMount() {
        this.props.setRetraceSlideTitle(this.props.location.query.title);
    }

    render() {

        let title = this.props.location.query.title;
        let retraceSlideTitleArr = this.props.retraceSlideTitle;
        let list = retraceSlideTitleArr.map((item, i) => {
            let listBool = i != retraceSlideTitleArr.length - 1;
            return <span className={'fn-mr10 '+(listBool ? '':'fn-font-s16')} key={i}>{item+(listBool?'->':'')}</span>;
        })

        return (
            <Box>
                <div>
                    <Link to='/indexType2'>indexType2</Link>
                    <div>{list}</div>
                </div>
                <div>
                    <Link to='/indexType3?title=indexType3'>indexType3</Link>
                    {' '}
                    <Link to='/indexType3/indexType5?title=indexType5'>indexType5</Link>
                    {' '}
                    <Link to='/indexType3/indexType6?title=indexType6'>indexType6</Link>
                </div>
                <RouterTransition {...this.props} animateType='retraceSlide' runpath={['/indexType3','/indexType3/indexType5','/indexType3/indexType6']}>
                    <div className='fn-bgd-fff'>
                        {cloneElement(this.props.children, {
                            setRetraceSlideTitle: this.props.setRetraceSlideTitle
                        })}
                    </div>
                </RouterTransition>
            </Box>
        );
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

const getRetraceSlideTitle = (state) => state.retraceSlideTitle;
const mapStateToProps = createStructuredSelector({
    retraceSlideTitle: getRetraceSlideTitle
});
const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators(actiontor, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ComponentIndexType3);