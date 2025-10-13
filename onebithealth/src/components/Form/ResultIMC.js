import React from "react"
import {View, Text} from "react-native"
export default function ResultIMC({messageResultImc,resultImc}){
    return(
        <View>
            <Text>{messageResultImc}</Text>
            <Text>{resultImc}</Text>
        </View>
    )
}