import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay/lib';

interface SpinnerItemProps {
  loader: boolean;
}

const SpinnerItem: React.FC<SpinnerItemProps> = (props) => {
  return (
    <Spinner
      overlayColor="rgba(0,0,0,0.75)"
      visible={props.loader}
      color={'#F7931E'}
    />
  );
};

export default SpinnerItem;
