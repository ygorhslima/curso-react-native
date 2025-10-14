import {View, Text} from "react-native"
import styleResultImc from "./styleResultImc"
export default function ResultIMC({messageResultImc,resultImc}){
    return(
        <View style={styleResultImc.ResultImc}>
            <Text style={styleResultImc.information}>{messageResultImc}</Text>
            <Text>{resultImc}</Text>
        </View>
    )
}