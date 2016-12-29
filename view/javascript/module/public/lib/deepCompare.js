import Immutable from 'immutable';
export default (instance, nextProps, nextState) => !Immutable.is(instance.props, nextProps) || !Immutable.is(instance.state, nextState);