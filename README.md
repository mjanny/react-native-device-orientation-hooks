# useDeviceOrientation Hook

This hook is designed to determine and provide the current orientation of the device, distinguishing between portrait
and landscape modes based on accelerometer data and dimension changes. It's an ideal tool for responsive design and
dynamic content rendering in React Native projects.

## Installation

Before you can use the `useDeviceOrientation` hook, ensure that your project setup includes React and React Native. This
hook also requires the `react-native-sensors` package for accelerometer data.

1. If you haven't already, initialize your React Native project:
   ```bash
   npx react-native init YourProjectName
   ```
2. Install `react-native-sensors`:
   ```bash
   npm install react-native-sensors
   ```
   or if you use Yarn:
   ```bash
   yarn add react-native-sensors
   ```

## Usage

To use the `useDeviceOrientation` hook in your React Native component, follow these steps:

1. Import the hook at the top of your component file:
   ```javascript
   import useDeviceOrientation from './path/to/useDeviceOrientation';
   ```
2. Inside your functional component, call `useDeviceOrientation` to get the current orientation:
   ```javascript
   const orientation = useDeviceOrientation();
   ```
3. Use the `orientation` value to adjust your UI or logic based on the device's orientation:
   ```javascript
   return (
   <View style={styles.container}>
   {orientation === 'portrait' ? (
   <PortraitComponent />
   ) : (
   <LandscapeComponent />
   )}
   </View>
   );
   ```

## Example

Below is a simple example demonstrating how to use the `useDeviceOrientation` hook within a React Native component to
dynamically render content based on the device's orientation:

```javascript
import React from 'react';
import { View, Text } from 'react-native';
import useDeviceOrientation from './useDeviceOrientation'; // Adjust the import path accordingly

const ResponsiveComponent = () => {
  const orientation = useDeviceOrientation();

  return (
    <View>
      {orientation === 'portrait' ? (
        <Text>Welcome to Portrait Mode!</Text>
      ) : (
        <Text>Welcome to Landscape Mode!</Text>
      )}
    </View>
  );
};

export default ResponsiveComponent;
```

## Contributing

Contributions to the `useDeviceOrientation` hook are welcome. If you'd like to improve the hook or have suggestions,
please open an issue or submit a pull request to the project's repository.

## License

Specify the license under which this hook is available for use. Common licenses for open source projects include MIT,
Apache 2.0, etc.
