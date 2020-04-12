import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

 const Input = (props) => {
    return (
        <TextInput {...props} style={{...styles.input}}></TextInput>
    )
}

const styles = StyleSheet.create({
input: {
    height: 30,   
    
}
})

export default Input;
