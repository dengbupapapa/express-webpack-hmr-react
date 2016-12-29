import {
    Component
} from 'react';

export default class MarginBox extends Component {
    render() {
        return (
            <div className={'layoutBox' + (this.props.moreStyle?' '+this.props.moreStyle:'')}>
				{this.props.children}
			</div>
        );
    }
}