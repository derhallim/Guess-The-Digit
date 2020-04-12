import React from "react";
import { StyleSheet, View, Text } from "react-native";

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 2, 
        padding: 10, 
        borderRadius: 10, 
     
    }, 
    number: {
        fontSize: 22
    }
});

export default NumberContainer;
