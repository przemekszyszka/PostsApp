'use strict';

const React = require('react-native');
const { View, Component, ActivityIndicatorIOS } = React;

class Spinner extends Component {
  static get propTypes() {
    return { visible: React.PropTypes.bool.isRequired };
  }

  render() {
    return this.props.visible ?
      (<ActivityIndicatorIOS
          hidden='true'
          size='large'/>) :
      (<View/>);
  }
}

module.exports = Spinner;
