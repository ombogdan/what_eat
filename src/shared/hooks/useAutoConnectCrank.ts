import { useContext, useState } from 'react';
import { AntContext } from 'shared/core/providers/ant-provider';
import { asyncStorageService } from 'shared/core/services/async-storage-service';

export const useAutoConnectCrank = () => {
  const antContext = useContext(AntContext);

  const [isConnecting, setIsConnecting] = useState(false);

  const doAutoConnectCrank = async () => {
    setIsConnecting(true);

    try {
      const device = await asyncStorageService.getCyclingPowerAntDevice();
      const parsedDevice = JSON.parse(device);

      await antContext.handleDisconnectCyclingPower(parsedDevice);
      await antContext.handleConnectCyclingPower(parsedDevice);
    } catch (error) {
      return Promise.reject(error);
    } finally {
      setIsConnecting(false);
    }
  };
  return {
    doAutoConnectCrank,
    isConnecting,
  };
};
