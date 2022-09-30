import LottieView from 'lottie-react-native';
import { StyleSheet } from 'react-native';
import React from 'react';

import eyes from '../../Assets/eyes.json';

const styles = StyleSheet.create({
    animation: {
        width: 110,
    },
});

const Animation = () => {
    return <LottieView autoPlay loop source={eyes} style={styles.animation} />;
};

export default Animation;
