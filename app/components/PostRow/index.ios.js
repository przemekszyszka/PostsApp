'use strict';

const React = require('react-native');
const { Text, View, Component, TouchableHighlight, Image } = React;
const Post = require('./Post');
const styles = require('./style');

class PostRow extends Component {
  static get propTypes() {
    return {
      post: React.PropTypes.object.isRequired
    };
  }

  render() {
    return (
      <TouchableHighlight style={styles.highlight}
      onPress={() => this.rowPressed(this.props.post.id)}>
        <View style={styles.post}>
          <Image style={styles.thumb} source={{uri: this.props.post.image}} resizeMode='contain' />
          <View style={styles.textWrapper}>
            <Text style={styles.title}>{this.props.post.title}</Text>
            <Text style={styles.content}>{this.postContent()}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  postContent() {
    let content = this.props.post.content;
    return content.length > 20 ? `${content.substring(0, 17)}...` : content;
  }

  rowPressed(id) {
    let post = this.props.posts.filter(prop => prop.id === id)[0];

    this.props.navigator.push({
      post: post,
      component: Post,
      passProps: {post: post}
    });
  }
}

module.exports = PostRow;
