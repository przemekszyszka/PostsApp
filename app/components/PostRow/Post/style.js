const React = require('react-native');
const { StyleSheet } = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 65
  },
  image: {
    height: 200
  },
  infoContainer: {
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    paddingBottom: 10,
    paddingTop: 10
  },
  content: {
    fontSize: 17,
    color: '#556655'
  }
});
