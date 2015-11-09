'use strict';

import React from 'react-native';
import PostsList from './app/components/';
const { AppRegistry, StyleSheet, View, NavigatorIOS, Navigator } = React;

class PostsApp extends React.Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Posts App',
          component: PostsList,
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('PostsApp', () => PostsApp);
