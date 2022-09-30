import React from 'react';
import { shape } from 'prop-types';
import LottieView from 'lottie-react-native';
import eyes from '../../Assets/eyes.json';

const Animation = () => {
    return <LottieView autoPlay loop source={eyes} style={{ width: 110 }} />;
};

// Animation.propTypes = {
//     source: shape({}).isRequired,
// };

export default Animation;
