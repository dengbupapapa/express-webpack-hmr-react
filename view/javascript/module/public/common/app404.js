import {
    IndexLink
} from 'react-router';

import {
    Component,
    PropTypes,
    createClass
} from 'react';

class app404 extends Component {
    render() {
        return (
            <div>
                app404
                <br/>
                <IndexLink to="/">toRouterAppIndex</IndexLink>
            </div>
        )
    }
}

export default app404;