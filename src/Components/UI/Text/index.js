// @flow
import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { colors, size } from '../../theme';

type Props = {
    fontSize?: ?string,
    color?: ?string,
    style?: ?any,
    lineHeight?: number,
    textAlign: ?string,
    children: any,
};

export const Text = (props: Props) => (
    <RNText
        {...props}
        style={[
            styles.text(
                props.fontSize,
                props.color,
                props.lineHeight,
                props.textAlign,
            ),
            props.style,
        ]}>
        {props.children}
    </RNText>
);

Text.defaultProps = {
    fontSize: 'medium',
    color: 'pepper',
    style: {},
    textAlign: 'auto',
};

const styles = StyleSheet.create({
    text: (fontSize, color, lineHeight, textAlign) => ({
        fontSize: size[fontSize] || size.medium,
        color: colors[color] || colors.pepper,
        lineHeight,
        textAlign: textAlign,
    }),
});
