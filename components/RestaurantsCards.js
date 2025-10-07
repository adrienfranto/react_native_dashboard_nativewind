import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const RestaurantsCards = ({
    id,
    img,
    title,
    description,
    genre,
    long,
    lat,
    dishes,
    adresse,
    rating
}) => {
    return (
        <TouchableOpacity>
            <Image
                source={{ uri: img }}
                className="h-40 w-80 rounded-xl "
            />
            <View>
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>

    )
}

export default RestaurantsCards

const styles = StyleSheet.create({})