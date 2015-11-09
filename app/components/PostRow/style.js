const React = require('react-native');
const { StyleSheet } = React;

module.exports = StyleSheet.create({
  highlight: {
    flex: 1,
    overflow: 'hidden'
  },
  post: {
    flexDirection: 'row',
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 0,
    backgroundColor: '#ef553a',
    borderRadius: 10,
    flexWrap: 'wrap',
    marginBottom: 5
  },
  image: {
    marginTop: 0,
    paddingTop: 0,
    flex: 1,
    justifyContent: 'space-between',
    marginRight: 5,
    height: 80
  },
  textWrapper: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    left: 5,
    marginLeft: 5
  },
  title: {
    fontWeight: '500',
    fontSize: 20,
    paddingBottom: 5
  },
  thumb: {
    width: 64,
    height: 64
  }
});
