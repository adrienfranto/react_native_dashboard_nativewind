import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CartCategories = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="mr-3 items-center">
      <Image
        source={{ uri: imgUrl }}
        className="h-16 w-16 rounded-full"
      />
      <Text className="text-xs font-semibold mt-1 text-gray-700">
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CartCategories
