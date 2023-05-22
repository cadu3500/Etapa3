import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";


function Receitas({navigation}){
    return(
        <View style={EstiloReceitas.container}>
            <TouchableHighlight style={EstiloReceitas.button}onPress={()=>navigation.navigate('ReceitasFit')}underlayColor="yellow">
                <Text style={EstiloReceitas.buttonText}>Receitas Fit</Text>
            </TouchableHighlight>
            <TouchableHighlight style={EstiloReceitas.button}onPress={()=>navigation.navigate('ReceitasHipercaloricas')}underlayColor="yellow">
                <Text style={EstiloReceitas.buttonText}>Receitas Hipercalóricas</Text>
            </TouchableHighlight>
        </View>
    )
}


const EstiloReceitas=StyleSheet.create({
    container: {
        paddingTop: 60,
        alignItems: 'center',
    },
    button: {
        marginBottom: 100,
        width: 500,
        alignItems: 'center',
        backgroundColor: '#2196F3',
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 30,
        padding: 20,
        color: 'white',
    },
})

export default Receitas;
