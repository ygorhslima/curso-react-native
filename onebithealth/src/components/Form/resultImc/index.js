import {View, Text, TouchableOpacity, Share} from "react-native"
import styleResultImc from "./styleResultImc"
export default function ResultIMC({messageResultImc,resultImc}){

    const onShare = async() => {
        const result = await Share.share({
            /**exibindo a mensagem */
            message:`Meu IMC hoje é: ${resultImc}`
        })
    }

    return(
        <View style={styleResultImc.contextImc}>
            <Text style={styleResultImc.titleResultImc}>{messageResultImc}</Text>
            <Text style={styleResultImc.numberImc}>{resultImc}</Text>
            <View style={styleResultImc.boxShareButton}>
                <TouchableOpacity onPress={onShare} style={styleResultImc.shared}>
                    <Text style={styleResultImc.sharedText}>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}