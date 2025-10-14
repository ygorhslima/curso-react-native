import {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Keyboard } from "react-native";
import ResultIMC from "./resultImc";
import styleForm from "./styleForm";

export default function Form(){
    const [height,setHeight] = useState(null); // altura
    const [weight,setWeight] = useState(null); // peso
    const [messageImc,setMessageImc] = useState("preencha o peso e altura"); // mensagem padrão do IMC
    const [imc,setImc] = useState(null); // valor que vai receber o cálculo do IMC
    const [textButton,setTextButton] = useState("Calcular");

    function imcCalculador(){
        return setImc(weight / (height * height));
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
        <View style={styleForm.formContext}>
            <View style={styleForm.form}>
                <Text style={styleForm.formLabel}>Altura</Text>
                <TextInput 
                    style={styleForm.formInput}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex. 1.75"
                    keyboardType="numeric"
                />

                <Text style={styleForm.formLabel}>Peso</Text>
                <TextInput 
                    style={styleForm.formInput} 
                    onChangeText={setWeight}
                    value={weight} 
                    placeholder="Ex. 72.6kg" 
                    keyboardType="numeric" 
                />
            
                <TouchableOpacity style={styleForm.buttonCalculador} onPress={()=>{validationImc()}}>
                    <Text style={styleForm.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultIMC messageResultImc={messageImc} resultImc={imc}/>
        </View>
    )
}