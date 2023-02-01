import { useContext, useEffect, useState } from 'react';
import { BleContext } from 'shared/core/providers/ble-provider';
import { throttle } from 'shared/utils/throttle';

export const useBleData = () => {
  const bleContext = useContext(BleContext);

  const [bleData, setBleData] = useState({
    heartRate: 0,
    heartRateAvg: 0,
    heartRateMax: 0,
  });

  const updateBleData = () => {
    setBleData((prevState) => ({
      ...prevState,
      heartRate: bleContext.measurement.heartRate,
      heartRateAvg: bleContext.measurement.heartRateAvg,
      heartRateMax: bleContext.measurement.heartRateMax,
    }));
  };

  const updateBleDataThrottled = throttle(updateBleData, 1000);

  useEffect(() => {
    updateBleDataThrottled();
  }, [bleContext.measurement]);

  return {
    bleData,
  };
};
