import React from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'

const ParentView = ({ children, style, ...rest }: ViewProps) => {
    return (
        <View style={[styles.rootContainer, style]} {...rest}>
            {children}
        </View>
    )
}

export default ParentView

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    }
})