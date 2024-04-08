import React, { useState } from "react"
import { StyleSheet, Button, Text, TextInput, View } from "react-native"

function FormComponent({ addHandler }): React.JSX.Element {
  const [text, setValue] = useState("")
  const onChange = (text) => {
    setValue(text)
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder="Внесите данные"
      />
      <Button
        color="green"
        title="Добавить задачу"
        onPress={() => addHandler(text)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    padding: 10,
    marginVertical: 30,
    marginHorizontal: "20%",
    width: "60%",
  },
})

export default FormComponent
