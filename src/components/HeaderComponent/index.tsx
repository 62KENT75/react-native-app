import React from "react"
import { StyleSheet, View, Text } from "react-native"

function HeaderComponent(): React.JSX.Element {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Список дел</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 50,
    height: 100,
    backgroundColor: "purple",
  },
  text: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
  },
})

export default HeaderComponent
