import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";


function ReceitasFit({navigation}){
    return(
        <ScrollView>
            <View style={EstiloReceitas.Receitas}>
                <Text style={EstiloReceitas.TituloCategoriaReceita}>Receitas Fit</Text>
            </View>
            <View style={EstiloReceitas.Receitas}>
                <View>
                    <TouchableOpacity onPress={()=>navigation.navigate('ReceitasFit1')}>
                        <Image style={EstiloReceitas.Imagem}source={require('../Imagens/PanquecaDeAveia.png')}></Image>
                    </TouchableOpacity>
                    <Text style={EstiloReceitas.NomeReceita}>Panqueca De Aveia</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={()=>navigation.navigate('ReceitasFit2')}>
                        <Image style={EstiloReceitas.Imagem}source={require('../Imagens/DadinhosDeTapioca.png')}></Image>
                    </TouchableOpacity>
                    <Text style={EstiloReceitas.NomeReceita}>Dadinhos De Tapioca</Text>
                </View>
            </View>
            <View style={EstiloReceitas.Receitas}>
                <View>
                    <TouchableOpacity onPress={()=>navigation.navigate('ReceitasFit3')}>
                        <Image style={EstiloReceitas.Imagem}source={require('../Imagens/AlmondegasCarne.png')}></Image>
                    </TouchableOpacity>
                    <Text style={EstiloReceitas.NomeReceita}>Almôndegas de carne</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={()=>navigation.navigate('ReceitasFit4')}>
                        <Image style={EstiloReceitas.Imagem}source={require('../Imagens/BrigadeiroFit.png')}></Image>
                    </TouchableOpacity>
                    <Text style={EstiloReceitas.NomeReceita}>Brigadeiro Fit</Text>
                </View>
            </View>
        </ScrollView>
    )
}


const EstiloReceitas=StyleSheet.create({
    
TituloCategoriaReceita: {
    fontSize: 30,
    fontFamily: 'arial',
    color: 'black',
    justifyContent: 'center',
    margin: 10,
    fontWeight: 'bold',
},

Receitas: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    flexDirection: 'row',
    margin: 1,
},
NomeReceita: {
    fontSize: 25,
    textAlign: 'left',
    color: 'black',
    padding: 30,
    margin: 1,
},
Imagem: {
    width: 250,
    height: 300,
    margin: 10,
},
});

export default ReceitasFit;
