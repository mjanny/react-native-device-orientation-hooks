import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { accelerometer } from 'react-native-sensors';

const useDeviceOrientation = () => {
  const [orientation, setOrientation] = useState('portrait');

  useEffect(() => {
    const subscription = accelerometer.subscribe(({ x }) => {
      if (Math.abs(x) > 5) {
        setOrientation('landscape');
      } else {
        setOrientation('portrait');
      }
    });

    Dimensions.addEventListener('change', ({ window: { width, height } }) => {
      if (width < height) {
        setOrientation('portrait');
      } else {
        setOrientation('landscape');
      }
    });

    return () => {
      subscription.unsubscribe();
      Dimensions.removeEventListener('change');
    };
  }, []);

  return orientation;
};

export default useDeviceOrientation;
