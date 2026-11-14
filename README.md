# Smart Academy Mobile

Smart Academy Mobile is a cross-platform shopping app built with Expo and React Native. It demonstrates a product marketplace flow with authentication, product browsing, product details, cart data, and a user profile.

The app uses public demo APIs for product, cart, authentication, and profile data. It is intended for learning and prototyping rather than production use.

## Features

- Login flow backed by the Fake Store API
- File-based navigation with Expo Router
- Product listing with loading skeletons
- Product details screen with image, price, rating, and description
- Cart screen with product details, quantities, line totals, and cart total
- Profile screen with contact, address, location, and company information
- Reusable loading skeleton components
- iOS, Android, and web support through Expo
- Persistent login token storage with AsyncStorage

## Tech stack

### Core

- [Expo SDK 58](https://docs.expo.dev/versions/v58.0.0/)
- [React 19](https://react.dev/)
- [React Native 0.88](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expo Router](https://docs.expo.dev/router/introduction/)

### Expo and React Native packages

- `expo-image` for product images
- `@react-native-async-storage/async-storage` for local token persistence
- `@expo/vector-icons` for tab icons
- `react-native-safe-area-context` and `react-native-screens`
- `react-native-gesture-handler`
- `react-native-reanimated`

### Development tools

- ESLint with `eslint-config-expo`
- Expo CLI
- TypeScript compiler

## Data sources

The app currently uses these demo endpoints:

- [Fake Store API](https://fakestoreapi.com/)
  - `POST /auth/login` for login
  - `GET /products` for the marketplace
  - `GET /products/:id` for product details
  - `GET /carts/1` for cart contents
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
  - `GET /users/1` for profile data

## Project structure

```text
src/
├── app/
│   ├── (auth)/              # Login and registration routes
│   ├── (tabs)/              # Products, cart, and profile tabs
│   └── details/[id]/        # Product details route
├── components/              # Reusable UI components
├── skeletons/               # Loading placeholders for app screens
└── types/                   # Shared Product, Cart, and User types
```

## Getting started

### Requirements

- Node.js 18 or newer
- npm
- Expo Go, an Android emulator, or an iOS simulator

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npx expo start
```

From the Expo CLI, choose one of the following:

- Press `a` to open Android
- Press `i` to open iOS
- Press `w` to open the web app
- Scan the QR code with Expo Go

## Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the Expo development server |
| `npm run android` | Start the app for Android |
| `npm run ios` | Start the app for iOS |
| `npm run web` | Start the web version |
| `npm run lint` | Run Expo ESLint checks |
| `npm run reset-project` | Move starter files to `example/` and reset the app directory |

## Authentication demo

The login screen sends credentials to the Fake Store API and stores the returned token in AsyncStorage. The root layout checks for that token and routes authenticated users to the tab navigator.

The password field has a demo default value from the sample implementation. Replace the demo authentication flow with a secure backend before using this project in production.

## Development notes

- Routes are defined under `src/app` using Expo Router conventions.
- Native `ios/` and `android/` directories are not checked in; Expo manages native configuration through `app.json`.
- API requests currently use public demo services and do not include production error handling or offline persistence.
- Registration is currently a UI placeholder and does not create an account.

## Learn more

- [Expo documentation](https://docs.expo.dev/)
- [Expo Router documentation](https://docs.expo.dev/router/introduction/)
- [React Native documentation](https://reactnative.dev/docs/getting-started)
- [TypeScript documentation](https://www.typescriptlang.org/docs/)
