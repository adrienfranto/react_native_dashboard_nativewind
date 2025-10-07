import { Image, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import deliveryNow from "../assets/deliveryNow.png"
import { ChevronDownIcon, UserIcon } from "react-native-heroicons/outline"


const HomeScreen = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [navigation])

  return (
    <SafeAreaView className="">
      <View className="flex-row pb-4  items-center mx-4 space-x-2 ">
       <Image
          source={deliveryNow}
          style={{
            width: 50,
            height: 50,
            borderRadius: 50, 
            borderWidth: 2,
            borderColor: 'blue',
            resizeMode: 'cover', 
          }}
        />

      <View className="flex-1">
        <Text className=" font-bold text-gray-400 text-xl">
          Delivery Now!
        </Text>
        <Text 
          className="font-bold text-xl"
        >
          Current Location 
          
        <ChevronDownIcon size={24} color="#000" className="absolute -mt-11 ml-44" />
          
        </Text>
        
      </View>
      
      <UserIcon size={24} color="#16C47F"/>      
      
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
