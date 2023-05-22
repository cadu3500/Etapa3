import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";


function Informacoes({navigation}){
    return(
        <ScrollView>
            <View style={EstiloInformacoes.Informacoes}>
                <Text style={EstiloInformacoes.Titulo}>Informações</Text>
            </View>
            <View style={EstiloInformacoes.Informacoes}>
                <View>
                    <Text style={EstiloInformacoes.Corpo}>O Aplicativo "Quanto você come..." tem como característica principal calcular as calorias dos alimentos, bem como fornecer receitas, auxiliando assim, no controle de dietas para ganho ou perda de peso.</Text>
                </View>
            </View>
        </ScrollView>
    )
}



const EstiloInformacoes=StyleSheet.create({

Informacoes: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    flexDirection: 'row',
    margin: 1,
},
Titulo: {
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
    padding: 10,
    margin: 1,
    fontWeight: 'bold',
},
Corpo: {
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
    padding: 10,
    margin: 1,
},
});

export default Informacoes;
