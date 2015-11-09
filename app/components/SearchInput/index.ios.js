'use strict';

import React from 'react-native';
const { Text, View, Component, TouchableHighlight, TextInput } = React;
const styles = require('./style');

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ''
    };
  }

  render() {
    return (
      <View style={styles.search}>
        <TextInput style={styles.input} placeholder='Find post'
          value={this.state.searchString}
          onChange={this.onSearchTextChanged.bind(this)} />
      </View>
    );
  }

  onSearchTextChanged(e) {
    this.setState({ searchString: e.nativeEvent.text });
    this.props.onSearch(this.state.searchString)
  }
}

module.exports = Search;
