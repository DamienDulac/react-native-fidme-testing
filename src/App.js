/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type { Node } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';
import styled from '@emotion/native';
import React from 'react';

import DeleteAccount from './Containers/DeleteAccount';
import { colors } from './Components/theme';

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        backgroundColor: colors.white,
    },
    scrollView: { background: colors.background },
});

const renderContent = () => (
    <Content>
        <DeleteAccount />
    </Content>
);

const App: () => Node = () => {
    return (
        <SafeAreaView style={styles.layout}>
            <StatusBar barStyle={'light-content'} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
                {renderContent()}
            </ScrollView>
        </SafeAreaView>
    );
};

const Content = styled.View({
    paddingHorizontal: 20,
    paddingVertical: 20,
});

export default App;
