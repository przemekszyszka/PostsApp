'use strict';

import React from 'react-native';
import PostRow from './PostRow';
import Spinner from './Spinner';
import SearchInput from './SearchInput';
import Post from './PostRow/Post';
const { Text, View, Component, ListView, TouchableHighlight, TextInput, ActivityIndicatorIOS, ScrollView, Image } = React;
const { TabBarIOS } = require('react-native-icons');
const styles = require('./style');
const REQUEST_URL = 'http://localhost:3000/posts.json';
const THUMB_URLS = ['https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851549_767334479959628_274486868_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851561_767334496626293_1958532586_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851579_767334503292959_179092627_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851589_767334513292958_1747022277_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851563_767334559959620_1193692107_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851593_767334566626286_1953955109_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851591_767334523292957_797560749_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851567_767334529959623_843148472_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851548_767334489959627_794462220_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851575_767334539959622_441598241_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851573_767334549959621_534583464_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851583_767334573292952_1519550680_n.png'];

class PostsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: null,
      posts: null,
      isLoading: false,
      selectedTab: 'list'
    };
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        let dataSource = new ListView.DataSource(
          {rowHasChanged: (r1, r2) => r1.guid !== r2.guid}
        );
        this.setState({
          posts: responseData,
          dataSource: dataSource.cloneWithRows(responseData)
        });
      })
      .done();
  }

  render() {
    return !this.state.dataSource? this.renderLoadingView() : this.renderPosts();
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading posts...
        </Text>
      </View>
    );
  }

  renderPosts() {
    return (
      <View style={styles.container}>
        <SearchInput onSearch={this.onSearch.bind(this)}></SearchInput>
        <Spinner visible={this.state.isLoading} />
        <TabBarIOS
          selectedTab={this.state.selectedTab}
          tintColor={'#000000'}
          barTintColor={'#FFFFFF'}
          styles={styles.tabBar}>
          <TabBarIOS.Item
            iconName={'fontawesome|list'}
            title={'List'}
            accessibilityLabel="Home Tab"
            selected={this.state.selectedTab === 'list'}
            onPress={() => this.changeTab('list')}>
            <ScrollView automaticallyAdjustContentInsets={false}>
              <ListView style={styles.list}
                dataSource={this.state.dataSource}
                automaticallyAdjustContentInsets={false}
                renderRow={this.renderRow.bind(this)}></ListView>
            </ScrollView>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            iconName={'fontawesome|th'}
            title={'Grid'}
            accessibilityLabel="Articles Tab"
            selected={this.state.selectedTab === 'grid'}
            onPress={() => this.changeTab('grid')}>
            <ListView contentContainerStyle={styles.gridList}
              dataSource={this.state.dataSource}
              renderRow={this._renderGridRow.bind(this)}
            />
          </TabBarIOS.Item>
        </TabBarIOS>
      </View>
    );
  }

  changeTab(tab) {
    this.setState({selectedTab: tab})
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <PostRow post={rowData} posts={this.state.posts} navigator={this.props.navigator} />
    );
  }

  _renderGridRow(rowData, sectionID, rowID) {
    return (
      <TouchableHighlight onPress={() => this._pressRow(rowData.id)} underlayColor='rgba(0,0,0,0)'>
        <View>
          <View style={styles.row}>
            <Image style={styles.thumb} source={{uri: rowData.image}} resizeMode='contain' />
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  _pressRow(id) {
    let post = this.props.posts.filter(prop => prop.id === id)[0];

    this.props.navigator.push({
      post: post,
      component: Post,
      passProps: {post: post}
    });
  }

  onSearch(text) {
    const posts = this.state.posts.filter(function(post) { return post.title.includes(text) })
    let dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1.guid !== r2.guid});
    this.state.dataSource = dataSource.cloneWithRows(posts)
    this.setState({ isLoading: false });
  }
}

module.exports = PostsList;
