import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MapPinIcon, StarIcon } from 'react-native-heroicons/outline'

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
        <TouchableOpacity
            className="bg-white shadow-slate-100 p-2 rounded-md"
        >
            <Image
                source={{ uri: img }}
                className="h-36 w-80 rounded-sm "
            />
            <View
                className="pb-3 px-4"
            >
                <Text
                    className="font-bold pt-2 textlg"
                >{title}</Text>
            </View>
            <View
                className="flex-row items-center space-x-1"
            >
                <StarIcon color={"#EEEEE"} opacity={0.5} size={22} />
                <Text>
                    <Text
                        className="text-yellow-600"
                    >
                        {rating}
                    </Text>
                    - {genre}
                </Text>
                
            </View>
            <View
                className="flex-row items-center space-x-1 pt-2"
            >
                <MapPinIcon color={"gray"} opacity={0.5} size={22} />
                <Text>
                    <Text
                        className="text-sm text-gray-400"
                    >
                    Nearby : {adresse}
                    </Text>
                </Text>
                
            </View>
        </TouchableOpacity>

    )
}

export default RestaurantsCards

const styles = StyleSheet.create({})