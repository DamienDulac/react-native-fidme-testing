import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animation from '../Animation';
import { Index } from '../UI/Text';
import { colors } from '../theme';
import eyes from '../../Assets/eyes.json';

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: '#CCC',
    },
});

const DeleteAccountHeader = () => {
    return (
        <View styles={styles.header}>
            <Index>Supprimer mon compte</Index>
            <Animation source={eyes} />
            <Index>
                Cela nous attriste beaucoup de vous voir partir, mais nous
                respectons votre choix
            </Index>
        </View>
    );
};

export default DeleteAccountHeader;
