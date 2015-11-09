const React = require('react-native');
const { StyleSheet } = React;

module.exports = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
  },
  image: {
    alignSelf: 'center'
  },
  flowRight: {
    flexDirection: 'row',
  },
  list: {
    marginTop: 0,
    paddingVertical: 0
  },
  tabBar: {
    backgroundColor: '#dfdfdf',
    flex: 1,
    color: '#ff0000',
    tintColor: '#877324'
  },
  secondTab: {
    marginLeft: 10
  },
  gridList: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  row: {
    justifyContent: 'center',
    padding: 5,
    margin: 10,
    width: 100,
    height: 100,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC'
  },
  thumb: {
    width: 64,
    height: 64
  }
});
