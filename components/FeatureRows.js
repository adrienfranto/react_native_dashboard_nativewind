import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantsCards from './RestaurantsCards'

const FeatureRows = ({id,title,description,FeatureCategories}) => {
  return (
    <View>
        <View 
            className="flex-row items-center justify-between mt-4 px-4"
        >
            <Text
                className="font-bold text-sm"
            >
                {title}
            </Text>
            <ArrowRightIcon
                color="#16C47F"
            />
        </View>
        <Text
            className="text-xs text-gray-600 px-4"
        >
            {description}
        </Text>
        <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ 
                paddingHorizontal: 10 
            }}
              className="mt-2"
            >
            {/* Restaurants Carts */}
            <RestaurantsCards
                id="1"
                img="https://i.ibb.co/fGBBg3f8/sushi.jpg"
                title="Salad"
                description="this is test description"
                genre="Japanese"
                long={0.32223}
                c={[]}
                dishes=""
                adresse=""
                rating={5}
            />
        </ScrollView>
    </View>
  )
}

export default FeatureRows

const styles = StyleSheet.create({})