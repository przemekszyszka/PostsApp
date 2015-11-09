#React Native app

## Requirements

* OS X - This guide assumes OS X which is needed for iOS development.
* Homebrew is the recommended way to install Watchman and Flow.
* Install Node.js 4.0 or newer.
  Install nvm with its setup instructions here. Then run `nvm install node && nvm alias default node`, which installs the latest version of Node.js and sets up your terminal so you can run it by typing node. With nvm you can install multiple versions of Node.js and easily switch between them.
  New to npm?
* `brew install watchman`. We recommend installing watchman, otherwise you might hit a node file watching bug.
* `brew install flow`, if you want to use flow.

##How to start the app
* `$ cd PostsApp`
* Open `ios/PostsApp.xcodeproj` and hit run in Xcode.

You need also to start the server by running `react-native start` in the project directory


Please don't forget about starting [PostsAppBackend] (https://github.com/przemekszyszka/PostsAppBackend) app.
