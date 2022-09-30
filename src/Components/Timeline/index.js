import React from 'react';
import { Text } from '../UI/Text';
import { arrayOf, shape, number, string, element } from 'prop-types';
import { SectionList, View, StyleSheet, FlatList } from 'react-native';
import { colors } from '../theme';

const styles = StyleSheet.create({
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    leftColumnContainer: {
        width: '20%',
    },
    detailContainer: {
        width: '70%',
        flexDirection: 'row',
        paddingLeft: 30,
    },
    line: {
        flex: 1,
        borderRightColor: colors.midBlue,
        borderRightWidth: 1,
        width: '50%',
    },
    messageContainer: {
        flexDirection: 'column',
        paddingBottom: 30,
    },
    dayNumberContainer: {
        backgroundColor: colors.midBlue,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dayNumberField: {
        paddingHorizontal: 5,
        color: colors.white,
    },
    titleField: {
        fontWeight: 'bold',
    },
});

const Timeline = ({ events }) => {
    return (
        <View>
            {events.map((event, index) => {
                const isLastItem = index === events.length - 1;
                return (
                    <View style={styles.rowContainer} key={index}>
                        <View style={styles.leftColumnContainer}>
                            <View style={styles.dayNumberContainer}>
                                <Text
                                    fontSize="small"
                                    style={styles.dayNumberField}>
                                    JOUR {event.dayNumber}
                                </Text>
                            </View>
                            {!isLastItem ? (
                                <View style={styles.line}></View>
                            ) : null}
                        </View>
                        <View style={styles.detailContainer}>
                            <View style={styles.icon}>{event?.icon}</View>
                            <View style={styles.messageContainer}>
                                <Text
                                    fontSize="medium"
                                    style={styles.titleField}>
                                    {event.title}
                                </Text>
                                {event.description.map(description => (
                                    <Text fontSize="medium">{description}</Text>
                                ))}
                            </View>
                        </View>
                    </View>
                );
            })}
        </View>
    );
};

export default Timeline;

Timeline.propTypes = {
    events: arrayOf(
        shape({
            dayNumber: number.isRequired,
            title: string.isRequired,
            iconTitle: element,
            description: arrayOf(string),
        }),
    ),
};

Timeline.defaultProps = {
    events: [],
};
