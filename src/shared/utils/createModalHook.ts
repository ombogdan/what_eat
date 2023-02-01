import { memo, useRef } from 'react';
import {
  ModalInstance,
  ModalOptions,
} from 'shared/core/services/modals.service';
import { useTypedDispatch, useTypedSelector } from 'shared/store';
import { selectModals } from 'shared/store/selectors/modals';
import { modalsActions } from 'shared/store/slices/modals';

export const createModalHook = <T extends ModalOptions>(
  // eslint-disable-next-line no-undef
  component: (props: T) => () => JSX.Element,
  name: string,
  options?: ModalInstance['options'],
) =>
  function useModal(): [
    (props?: Omit<T, keyof ModalOptions>) => void,
    () => void,
    [],
  ] {
    const dispatch = useTypedDispatch();
    const modals = useTypedSelector(selectModals);
    const idRef = useRef<string>();

    const hideModal = () => {
      if (idRef.current) {
        dispatch(modalsActions.removeModal({ id: idRef.current }));
      }
    };

    const showModal = (props: Omit<T, keyof ModalOptions> = {} as T) => {
      idRef.current = name;
      dispatch(
        modalsActions.showModal({
          id: idRef.current,
          modal: memo(
            component({
              ...props,
              close: hideModal,
            } as T),
          ),
          options,
        }),
      );
    };

    return [showModal, hideModal, modals.includes(name)];
  };
