import { ScrollView } from 'react-native'
import React from 'react'
import CartCategories from './CartCategories'

const data = [
  { imgUrl: "https://i.ibb.co/fGBBg3f8/sushi.jpg", title: "Sushi" },
  { imgUrl: "https://i.ibb.co/KjVjNK66/Pizza.jpg", title: "Pizza" },
  { imgUrl: "https://i.ibb.co/Q7jM7FSg/food.jpg", title: "Food" },
  { imgUrl: "https://i.ibb.co/7NJz4Nvd/ankondro.jpg", title: "Ankondro" },
  { imgUrl: "https://i.ibb.co/TBTFv647/embolgeur.jpg", title: "Burger" },
  { imgUrl: "https://i.ibb.co/mrHBh3K6/Fruity-pnh.jpg", title: "Fruits" },
  { imgUrl: "https://i.ibb.co/FkqyKCdY/tomate.jpg", title: "Tomate" },
]

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 10 }}
      className="mt-2"
    >
      {data.map((item, index) => (
        <CartCategories
          key={index}
          imgUrl={item.imgUrl}
          title={item.title}
        />
      ))}
    </ScrollView>
  )
}

export default Categories
