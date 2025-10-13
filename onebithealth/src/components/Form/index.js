import {useState} from "react"
import { View, Text, TextInput, Button } from "react-native"
import ResultIMC from "./ResultIMC"

export default function Form(){
    const [height,setHeight] = useState(null); // altura
    const [weight,setWeight] = useState(null); // peso
    const [messageImc,setMessageImc] = useState("preencha o peso e altura"); // mensagem padrão do IMC
    const [imc,setImc] = useState(null); // valor que vai receber o cálculo do IMC
    const [textButton,setTextButton] = useState("Calcular");

    function imcCalculador(){
        return setImc(weight / (height * height)).toFixed(2);
    }

    function validationImc(){
        if(weight != null && height != null){
            imcCalculador();
            setHeight(null);
            setWeight(null);
            setMessageImc(`Seu IMC é igual: `);
            setTextButton("Calcular Novamente")
            return;
        }
        setImc(null);
        setTextButton("Calcular");
        setMessageImc("preencha o peso e altura")
    }

    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput 
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex. 1.75"
                    keyboardType="numeric"
                />

                <Text>Peso</Text>
                <TextInput 
                    onChangeText={setWeight}
                    value={weight} 
                    placeholder="Ex. 72.6kg" 
                    keyboardType="numeric" 
                />
                
                <Button onPress={()=>{validationImc()}} title={textButton}/>
            </View>
            <ResultIMC messageResultImc={messageImc} resultImc={imc}/>
        </View>
    )
}