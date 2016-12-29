import {
    Component
} from 'react';
import TextDesStyle from 'cModule/layoutBox/textDes';

export default class ComponentTextDes extends Component {
    // componentWillUpdate() {
    //     console.log(this.props.ArrContent[this.props.indexBannerScroll])
    // }
    handleWheel(event) {

    }
    render() {

        let {
            ArrContent,
            bannerScroll
        } = this.props;
        let Content = ArrContent[bannerScroll];
        let contentsNew = Content.contents.map((item, index) => <li key={index} className={index==0?TextDesStyle.checked:''}>{item}</li>);

        return (
            <div className={TextDesStyle.TextDesBox} onWheel={this.handleWheel}>
                <ul>
                    <li className={TextDesStyle.title}>{Content.title}</li>
                    {contentsNew}
                </ul>
            </div>
        )
    }
}