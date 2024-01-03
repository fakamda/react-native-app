import React from 'react'
import StyledText from './StyledText.jsx'
import { View } from 'react-native'

const parseThousand = value => {
    return value >= 1000
    ? `${Math.round(value / 100) / 10}k`
    : String(value)
}

const RepositoryStats = (props) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
        <View>
            <StyledText align='center' fontWeight='bold'>{parseThousand(props.stargazersCount)}</StyledText>
            <StyledText align='center'>Stars</StyledText>
        </View>
        <View>
            <StyledText align='center' fontWeight='bold'>{parseThousand(props.forksCount)}</StyledText>
            <StyledText align='center'>Forks</StyledText>
        </View>
        <View>
            <StyledText align='center' fontWeight='bold'>{props.reviewCount}</StyledText>
            <StyledText align='center'>Review</StyledText>
        </View>
        <View>
            <StyledText align='center' fontWeight='bold'>{props.ratingAverage}</StyledText> 
            <StyledText align='center'>Rating</StyledText>
        </View>
    </View>
  )
}

export default RepositoryStats