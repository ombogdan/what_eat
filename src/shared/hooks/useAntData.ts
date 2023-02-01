import { useContext, useEffect, useState } from 'react';
import { AntContext } from 'shared/core/providers/ant-provider';
import { throttle } from 'shared/utils/throttle';

export const useAntData = () => {
  const antContext = useContext(AntContext);

  const [antData, setAntData] = useState({
    cadence: 0,
    cadenceMax: 0,
    cadenceAvg: 0,
    speedMphAvg: 0,

    cyclingPower: 0,
    cyclingPowerAvg: 0,
    cyclingPowerMax: 0,
  });

  const updateAntPlusData = () => {
    setAntData((prevState) => ({
      ...prevState,
      cadence: antContext.measurement.cadence,
      cadenceMax: antContext.measurement.cadenceMax,
      cadenceAvg: antContext.measurement.cadenceAvg,
      speedMphAvg: antContext.measurement.speedMphAvg,

      cyclingPower: antContext.measurement.cyclingPower,
      cyclingPowerAvg: antContext.measurement.cyclingPowerAvg,
      cyclingPowerMax: antContext.measurement.cyclingPowerMax,
    }));
  };

  const updateAntPlusDataThrottled = throttle(updateAntPlusData, 1000);

  useEffect(() => {
    updateAntPlusDataThrottled();
  }, [antContext.measurement]);

  return {
    antData,
  };
};
