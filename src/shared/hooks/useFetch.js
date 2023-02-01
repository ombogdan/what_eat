// import React from 'react';

// import { useMountedState } from './useMountedState';

// export const useFetch = ({
//   apiMethod,
//   initialData = null,
//   apiArguments = [],
//   triggers = [],
// }) => {
//   const isMounted = useMountedState();

//   const [state, setState] = React.useState({
//     isLoading: true,
//     isError: false,
//     data: initialData,
//   });

//   const handleLoadData = async () => {
//     let data;

//     try {
//       const response = await apiMethod(...apiArguments);

//       data = response.data;
//     } catch (error) {
//       if (!isMounted()) return;

//       setState((currentState) => ({
//         ...currentState,
//         isLoading: false,
//         isError: true,
//       }));
//       return;
//     }

//     if (!isMounted()) return;

//     setState((currentState) => ({
//       ...currentState,
//       isLoading: false,
//       data,
//     }));
//   };

//   React.useEffect(() => {
//     handleLoadData();
//   }, triggers);

//   return { ...state, handleUpdateState: setState };
// };

import { useState, useCallback, useEffect } from 'react';

export const useFetch = (apiMethod) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setLoadingStatus] = useState(false);
  const [error, setError] = useState(null);
  const [params, setParams] = useState(null);

  const doFetch = useCallback((reqParams) => {
    setParams(reqParams);
    setLoadingStatus(true);
  }, []);

  useEffect(() => {
    let skipGetResponseAfterDestroy = false;

    if (!isLoading) return;

    const requestOptions = { ...params };

    apiMethod(requestOptions)
      .then((res) => {
        if (!skipGetResponseAfterDestroy) {
          setResponse(res.data);
        }
      })
      .catch((err) => {
        if (!skipGetResponseAfterDestroy) {
          // showErrorNotification('Something was wrong');
          setError(err);
        }
      })
      .finally(() => {
        setLoadingStatus(false);
      });

    return () => {
      skipGetResponseAfterDestroy = true;
    };
  }, [apiMethod, isLoading, params]);

  return [{ response, isLoading, error }, doFetch];
};
