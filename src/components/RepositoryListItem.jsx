import { Text, View } from 'react-native'
import React from 'react'

const RepositoryListItem = ({ repository }) => {
    console.log(repository)
    return (
        <View>
            <Text>Full name: {repository.fullName}</Text>
            <Text>Description: {repository.description}</Text>
            <Text>Language: {repository.language}</Text>
            <Text>Stars: {repository.stargazersCount}</Text>
            <Text>Forks: {repository.forksCount}</Text>
            <Text>Reviews: {repository.reviewCount}</Text>
            <Text>Rating: {repository.ratingAverage}</Text>
        </View>
    )
}

export default RepositoryListItem
