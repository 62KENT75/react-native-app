import React from "react"
import { StyleSheet, TouchableOpacity, Text } from "react-native"

function ListComponent({ item, deleteHandler }): React.JSX.Element {
  return (
    <TouchableOpacity onPress={() => deleteHandler(item.key)}>
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
    textAlign: "center",
    borderRadius: 5,
    backgroundColor: "#fafa",
    borderWidth: 1,
    marginTop: 20,
    width: "60%",
    marginLeft: "20%",
  },
})

export default ListComponent
