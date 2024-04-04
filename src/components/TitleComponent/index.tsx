import React from "react"
import { Text, View } from "react-native"

interface Props {
  title: string
  descr: string
}

const TitleComponent: React.FC<Props> = ({ title, descr }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{descr}</Text>
    </View>
  )
}

export default TitleComponent
