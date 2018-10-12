# React Native app template repository

Empty app template for easier start.
Features:
- sane unit testing (as similar to web React as possible, uses `react-dom` just for testing) ready to go, uses Jest,
Enzyme and must.js
- eslint connected
- pure JS (no Flow)

## To start developing on Android with real device:

1. Run `npm install`
1. Run `npm run start` (keep it open)
1. Prepare your device [by forwarding development server port][1] - add your device id to `prepareDevice:*` commands
1. Run `npm run start:android`

## `npm run` commands list:

- `start` - cleans cache and starts development packaging server (Metro) - **always run this after switching project
you work on**
- `start:android` - runs packaging server is not run and installs & starts the app in development mode on Android device
or emulator
- `start:ios` - same as above, but for iOS
- `build:release:android` - builds release version of app for Android
- `prepareDevice:[name_here]` - prepares real Android device for development by forwarding dev server port, you shoud
add your device here because you'll need to repeat that every time you reconnect your device
- `test` - runs unit tests 
- `lint` - checks for js code style 
- `lint:fix` - checks for js code style, fixing it automatically where possible 

[1]: https://facebook.github.io/react-native/docs/running-on-device#connecting-to-the-development-server-1