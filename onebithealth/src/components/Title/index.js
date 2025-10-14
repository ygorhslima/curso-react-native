import { View,Text } from "react-native";
import styleTitle from './styleTitle';

export default function Title(){
    return(
        <View style={styleTitle.boxTitle}>
            <Text style={styleTitle.textTitle}>ONEBITHEALTH</Text>
        </View>
    );
}