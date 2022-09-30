import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text } from '../../Components/UI/Text';
import Animation from '../../Components/Animation';
import { colors, size } from '../../Components/theme';

import messages from '../../i18n/messages';
import DeleteUserAccountTimeline from '../../Components/DeleteUserAccountTimeline';
import useDeleteUserAccount from '../../hooks/useDeleteUserAccount';

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        display: 'flex',
        padding: 5,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    cancelRequestContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerContainer: {
        flex: 2,
        borderBottomColor: colors.pepper,
        borderBottomWidth: 1,
    },
    headerMessage: {
        alignItems: 'center',
        textAlign: 'center',
        paddingBottom: 20,
    },
    suppressAccountButton: {
        flex: 1,
        borderRadius: 10,
    },
    mainContainer: {
        flex: 2,
        paddingTop: 20,
    },
    appButtonContainer: {
        backgroundColor: colors.mainOrange,
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    appButtonText: {
        fontSize: size.medium,
        color: colors.white,
        alignSelf: 'center',
    },
});

const DeleteAccount = () => {
    const { askForDeleteRequest, cancelDeleteRequest, deleteRequestState } =
        useDeleteUserAccount();

    return (
        <>
            {!deleteRequestState ? (
                <View style={styles.screenContainer}>
                    <View style={styles.headerContainer}>
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}>
                            <Text fontSize="large">
                                {messages.DeleteUserAccount.title}
                            </Text>
                            <Text>X</Text>
                        </View>
                        <View style={styles.headerMessage}>
                            <Animation />
                        </View>
                        <Text style={styles.headerMessage}>
                            {messages.DeleteUserAccount.subTitle}
                        </Text>
                    </View>
                    <View style={styles.mainContainer}>
                        <Text>{messages.DeleteUserAccount.steps}</Text>
                        <View style={{ paddingTop: 20 }}>
                            <DeleteUserAccountTimeline />
                        </View>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            paddingTop: 40,
                        }}>
                        <Image
                            source={require('../../Assets/warningDelete.png')}
                        />
                        <Text>{messages.DeleteUserAccount.warning}</Text>
                    </View>
                    <View style={{ paddingBottom: 20 }}>
                        <TouchableOpacity
                            onPress={askForDeleteRequest}
                            style={styles.appButtonContainer}>
                            <Text style={styles.appButtonText}>
                                {
                                    messages.DeleteUserAccount.actions
                                        .requestDelete
                                }
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <View style={styles.cancelRequestContainer}>
                    <Text>Une demande de suppression est en cours</Text>
                    <TouchableOpacity
                        onPress={cancelDeleteRequest}
                        style={styles.appButtonContainer}>
                        <Text style={styles.appButtonText}>
                            {messages.DeleteUserAccount.actions.cancelRequest}
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
        </>
    );
};

export default DeleteAccount;
