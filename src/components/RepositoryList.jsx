import React from 'react'
import { View, Text } from 'react-native'
import repositories from '../data/repositories.js'

const RepositoryList = () => {
  return (
    <View>
        {repositories.map(repo => (
            <View key={repo.id}>
                <Text>{repo.fullName}</Text>
                <Text>{repo.description}</Text>
                <Text>{repo.language}</Text>
                <Text>{repo.stargazersCount}</Text>
                <Text>{repo.forksCount}</Text>
                <Text>{repo.reviewCount}</Text>
                <Text>{repo.ratingAverage}</Text>
            </View>
        ))}
    </View>
  )
}

export default RepositoryList