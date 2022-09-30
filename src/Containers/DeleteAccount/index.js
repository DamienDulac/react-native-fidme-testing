import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { colors, size } from '../../Components/theme';
import React from 'react';

import Animation from '../../Components/Animation';
import messages from '../../i18n/messages';
import { Text } from '../../Components/UI/Text';
import DeleteUserAccountTimeline from '../../Components/DeleteUserAccountTimeline';
import useDeleteUserAccount from '../../hooks/useDeleteUserAccount';

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
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
    headerTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerMessage: {
        marginHorizontal: 50,
        paddingBottom: 20,
    },
    headerAnimation: {
        alignItems: 'center',
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
        paddingHorizontal: 30,
    },
    appButtonText: {
        fontSize: size.medium,
        color: colors.white,
        alignSelf: 'center',
    },
});

const renderHeader = () => (
    <>
        <View style={styles.headerTitle}>
            <Text fontSize="large">{messages.DeleteUserAccount.title}</Text>
            <Text>X</Text>
        </View>
        <View style={styles.headerAnimation}>
            <Animation />
        </View>
        <View style={styles.headerMessage}>
            <Text style={{ textAlign: 'center' }}>
                {messages.DeleteUserAccount.subTitle}
            </Text>
        </View>
    </>
);

const DeleteAccount = () => {
    const { askForDeleteRequest, cancelDeleteRequest, deleteRequestState } =
        useDeleteUserAccount();

    return (
        <>
            {!deleteRequestState ? (
                <View style={styles.screenContainer}>
                    <View style={styles.headerContainer}>{renderHeader()}</View>
                    <View style={styles.mainContainer}>
                        <Text>{messages.DeleteUserAccount.steps}</Text>
                        <View style={{ paddingTop: 20 }}>
                            <DeleteUserAccountTimeline />
                        </View>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            paddingTop: 20,
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                            }}>
                            <Image
                                source={require('../../Assets/warning.png')}
                            />
                            <View style={{ paddingLeft: 5 }}>
                                <Text>
                                    {messages.DeleteUserAccount.warning.title}
                                </Text>
                            </View>
                        </View>
                        <Text>
                            {messages.DeleteUserAccount.warning.content}
                        </Text>
                    </View>
                    <View style={{ paddingTop: 40 }}>
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
