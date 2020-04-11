import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Colors from '../Constants/Colors'

const Header = (props) => {
    return (
       <View style={styles.header}>
           <Text style={styles.headerTitle}>{props.title}</Text>
       </View>
    )
}


