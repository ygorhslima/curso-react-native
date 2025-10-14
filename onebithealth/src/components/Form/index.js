import {useState} from "react";

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Vibration,
    Pressable,
    Keyboard
} from "react-native";

import ResultIMC from "./resultImc";
import styleForm from "./styleForm";

export default function Form(){
    const [height,setHeight] = useState(null); // altura
    const [weight,setWeight] = useState(null); // peso
    const [messageImc,setMessageImc] = useState("preencha o peso e altura"); // mensagem padrão do IMC
    const [imc,setImc] = useState(null); // valor que vai receber o cálculo do IMC
    const [textButton,setTextButton] = useState("Calcular");
    const [errorMessage, setErrorMessage] = useState(null);

    function imcCalculador(){
        let heightFormat = height.replace(",",".")
        return setImc((weight / (heightFormat * heightFormat)).toFixed(2));
    }

    function verificationImc(){
        if(imc == null){
            Vibration.vibrate();
            setErrorMessage("campo obrigatório! ");
        }
    }

    function validationImc(){
        if(weight != null && height != null){
            imcCalculador();
            setHeight(null);
            setWeight(null);
            setMessageImc(`Seu IMC é igual: `);
            setTextButton("Calcular Novamente");
            setErrorMessage(null);
            return;
        }else{
            verificationImc();
            setImc(null);
            setTextButton("Calcular");
            setMessageImc("preencha o peso e altura");               
        }
    }

    return(
        <View style={styleForm.formContext}>
            {imc == null ? (
                <Pressable onPress={Keyboard.dismiss} style={styleForm.form}>
                    <Text style={styleForm.formLabel}>Altura</Text>
                    <Text style={styleForm.errorMessage}>{errorMessage}</Text>
                    <TextInput 
                        style={styleForm.formInput}
                        onChangeText={setHeight}
                        value={height}
                        placeholder="Ex. 1.75"
                        keyboardType="numeric"
                    />

                    <Text style={styleForm.formLabel}>Peso</Text>
                    <Text style={styleForm.errorMessage}>{errorMessage}</Text>
                    <TextInput 
                        style={styleForm.formInput} 
                        onChangeText={setWeight}
                        value={weight} 
                        placeholder="Ex. 72.6kg" 
                        keyboardType="numeric" 
                    />
                
                    <TouchableOpacity style={styleForm.buttonCalculador} onPress={validationImc}>
                        <Text style={styleForm.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
                </Pressable>
            ):(
                <View style={style.exibitionResultImc}>
                    <ResultIMC messageResultImc={messageImc} resultImc={imc}/>
                     <TouchableOpacity style={styleForm.buttonCalculador} onPress={validationImc}>
                        <Text style={styleForm.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    )
}