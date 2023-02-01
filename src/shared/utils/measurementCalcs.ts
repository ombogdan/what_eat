/* eslint-disable no-multi-assign */
const measurement = {
  value: 0,
  valueMax: 0,
  valueAvg: 0,
  valueCount: 0,
  valueSumAll: 0,
};

export const resetPowerMeasurement = () => {
  measurement.value = 0;
  measurement.valueMax = 0;
  measurement.valueAvg = 0;
  measurement.valueCount = 0;
  measurement.valueSumAll = 0;
};

export const measurementCalcs = (value) => {
  measurement.value = value;
  measurement.valueCount = measurement.valueCount += 1;

  measurement.valueSumAll = measurement.valueSumAll += value;

  measurement.valueAvg = Math.ceil(
    measurement.valueSumAll / measurement.valueCount,
  );

  if (measurement.value > measurement.valueMax && measurement.valueCount > 5) {
    measurement.valueMax = measurement.value;
  }
  return {
    ...measurement,
  };
};

const measuremen = {
  value: 0,
  valueMax: 0,
  valueAvg: 0,
  valueCount: 0,
  valueSumAll: 0,
};

export const measurementCalc = (value) => {
  measuremen.value = value;
  measuremen.valueCount = measuremen.valueCount += 1;

  measuremen.valueSumAll = measuremen.valueSumAll += value;

  measuremen.valueAvg = Math.ceil(
    measuremen.valueSumAll / measuremen.valueCount,
  );

  if (measuremen.value > measuremen.valueMax && measuremen.valueCount > 5) {
    measuremen.valueMax = measuremen.value;
  }
  return {
    ...measuremen,
  };
};

const speedAndDistanceMeasurement = {
  cadenceCountForSpeed: 0,
  speedCounter: 0,
  cadenceSumAllForSpeed: 0,
  cadenceAvgForSpeed: 0,
  speedMph: 0,
  speedMphSumAll: 0,
  speedMphAvg: 0,
};

// 700Cx23 = 2100(mm) => 2.1m
export const TIER_CIRCUMFERENCE = 2.1;
// Gear ratio of all Spinner bikes 3.25:1 (one revolution of the crank = 3.25 revolutions of the flywheel)
export const GEAR_RATIO = 3.25;
export const ONE_HOUR_IN_MINUTES = 60;

export const metersToMiles = (m, customToFixed = 2) =>
  Number(Number(Number(m) * 0.000621371192).toFixed(customToFixed));

export const speedAndDistanceCalcs = (cadenceValue: number) => {
  speedAndDistanceMeasurement.cadenceCountForSpeed =
    speedAndDistanceMeasurement.cadenceCountForSpeed += 1;

  if (cadenceValue > 0) {
    speedAndDistanceMeasurement.cadenceSumAllForSpeed =
      speedAndDistanceMeasurement.cadenceSumAllForSpeed += Number(cadenceValue);

    speedAndDistanceMeasurement.cadenceAvgForSpeed = Math.ceil(
      speedAndDistanceMeasurement.cadenceSumAllForSpeed /
        speedAndDistanceMeasurement.cadenceCountForSpeed,
    );
    const cyclingDistanceInMeters =
      speedAndDistanceMeasurement.cadenceAvgForSpeed *
      TIER_CIRCUMFERENCE *
      GEAR_RATIO *
      ONE_HOUR_IN_MINUTES;

    const cyclingSpeedInMilesPerHour = metersToMiles(cyclingDistanceInMeters);

    speedAndDistanceMeasurement.speedMph = cyclingSpeedInMilesPerHour;

    speedAndDistanceMeasurement.speedMphSumAll =
      speedAndDistanceMeasurement.speedMphSumAll +=
        speedAndDistanceMeasurement.speedMph;

    speedAndDistanceMeasurement.speedMphAvg =
      speedAndDistanceMeasurement.speedMphSumAll /
      speedAndDistanceMeasurement.speedCounter;
  } else {
    speedAndDistanceMeasurement.speedMph = 0;
    speedAndDistanceMeasurement.cadenceCountForSpeed = 0;
    speedAndDistanceMeasurement.cadenceSumAllForSpeed = 0;
  }

  // console.log('[SPEED] ==>>', speedAndDistanceMeasurement.speedMphAvg);

  return {
    speedMphAvg: speedAndDistanceMeasurement.speedMphAvg,
  };
};
