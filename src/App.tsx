/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from "react"
import HeaderComponent from "components/HeaderComponent"
import ListComponent from "components/ListComponent"
import FormComponent from "components/FormComponent"

import { FlatList, StyleSheet, View, Text } from "react-native"

function App(): React.JSX.Element {
  const [listItems, setListItems] = useState([
    { text: "Купить молоко", key: "1" },
    { text: "Убраться в доме", key: "2" },
    { text: "Сделать дз", key: "3" },
  ])

  const addHandler = (text) => {
    setListItems((list) => {
      return [{ text, key: Math.random().toString(36).substring(7) }, ...list]
    })
  }

  const deleteHandler = (key) => {
    setListItems((list) => {
      return list.filter((listItems) => listItems.key != key)
    })
  }

  return (
    <View>
      <HeaderComponent />
      <FormComponent addHandler={addHandler} />
      <View>
        <FlatList
          data={listItems}
          renderItem={({ item }) => (
            <ListComponent item={item} deleteHandler={deleteHandler} />
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})

export default App
