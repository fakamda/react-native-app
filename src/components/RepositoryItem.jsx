import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import StyledText from './StyledText.jsx'

const RepositoryItem = (props) => {
  return (
    <View key={props.id} style={styles.container}>
        <StyledText fontSize='subheading' fontWeight='bold'>{props.fullName}</StyledText>
        <StyledText >{props.description}</StyledText>
        <StyledText >{props.language}</StyledText>
        <StyledText >Stars: {props.stargazersCount}</StyledText>
        <StyledText >Forks: {props.forksCount}</StyledText>
        <StyledText >Review: {props.reviewCount}</StyledText>
        <StyledText >Rating: {props.ratingAverage}</StyledText>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
    strong: {
        color: '#09f',
        fontWeight: 'bold',
        marginBottom: 5
    }
})

export default RepositoryItem