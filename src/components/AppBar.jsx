import React from "react"
import { ScrollView, StyleSheet, View, TouchableWithoutFeedback } from 'react-native'
import StyledText from "./StyledText"
import Constants from 'expo-constants'
import theme from "../theme.js"
import { Link, useLocation } from "react-router-native"

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        // paddingBottom: 10,
        // paddingLeft: 10,
    },
    text: {
        color: theme.appBar.textSecondary,
        paddingHorizontal: 8
    },
    scroll: {
        paddingBottom: 15
    },
    active: {
        color: theme.appBar.textPrimary
    }
})

const AppBarTab = ({ children, to }) => {
    const { pathname } = useLocation()
    const active = pathname === to

    const textStyles = [
        styles.text,
        active && styles.active
    ]

    return (
        <Link to={to} component={TouchableWithoutFeedback} >
            <StyledText fontWeight='bold' style={textStyles}>
                {children}
            </StyledText>
        </Link>
    )
}


const AppBar = () => {
    
    return (
        <View style={styles.container}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.scroll}>
                <AppBarTab to='/'>Repositories</AppBarTab>
                <AppBarTab to='/signin'>Sign In</AppBarTab>
            </ScrollView>
        </View>
    )
}

export default AppBar