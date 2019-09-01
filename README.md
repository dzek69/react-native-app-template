# React Native app template repository

Empty app template for easier start.
Features:
- sane unit testing (as similar to web React as possible, uses `react-dom` just for testing) ready to go, uses Jest,
Enzyme and must.js
- eslint connected
- pure JS (no Flow)
- prepared for releasing into Play Store (manual to come)

## To start developing on Android with real device:

1. Run `yarn`
1. Run `yarn start` (keep it open)
1. Prepare your device [by forwarding development server port][1] - add your device id to `prepareDevice:*` commands
1. Run `yarn start:android`

## To rename application and change app id use

[react-native-app-rename][2]

## `yarn run` commands list:

- `start` - cleans cache and starts development packaging server (Metro) - **always run this after switching project
you work on**
- `start:android` - runs packaging server is not run and installs & starts the app in development mode on Android device
or emulator
- `start:ios` - same as above, but for iOS
- `build:docs` - builds documentation
- `build:release:android` - builds release version of app for Android
- `prepareDevice:[name_here]` - prepares real Android device for development by forwarding dev server port, you shoud
add your device here because you'll need to repeat that every time you reconnect your device
- `test` - runs unit tests 
- `lint` - checks for js code style 
- `lint:fix` - checks for js code style, fixing it automatically where possible 

## TODO

- fix tests crashing when tested file imports an es module (file with an `export` statement)

[1]: https://facebook.github.io/react-native/docs/running-on-device#connecting-to-the-development-server-1
[2]: https://www.npmjs.com/package/react-native-app-rename
