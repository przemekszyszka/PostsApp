'use strict';

import React from 'react-native';
const { Text, View, Image, ScrollView } = React;
const styles = require('./style');

class Post extends React.Component {
  static get propTypes() {
    return {
      post: React.PropTypes.object.isRequired
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView automaticallyAdjustContentInsets={true}>
          <Image source={{uri: this.props.post.image}} style={styles.image} resizeMode='contain' />
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{this.props.post.title}</Text>
            <Text style={styles.content}>{this.props.post.content}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

module.exports = Post;
