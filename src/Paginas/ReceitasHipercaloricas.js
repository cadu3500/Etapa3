import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";


function ReceitasHipercaloricas({navigation}){
    return(
        <ScrollView>
            <View style={EstiloReceitas.Receitas}>
                <Text style={EstiloReceitas.TituloCategoriaReceita}>Receitas Hipercaloricas</Text>
            </View>
            <View style={EstiloReceitas.Receitas}>
                <View>
                    <TouchableOpacity onPress={()=>navigation.navigate('ReceitasHipercaloricas1')}>
                        <Image style={EstiloReceitas.Imagem}source={require('../Imagens/SanduicheAbacate.png')}></Image>
                    </TouchableOpacity>
                    <Text style={EstiloReceitas.NomeReceita}>Sanduíche de frango</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={()=>navigation.navigate('ReceitasHipercaloricas2')}>
                        <Image style={EstiloReceitas.Imagem}source={require('../Imagens/XisSalada.png')}></Image>
                    </TouchableOpacity>
                    <Text style={EstiloReceitas.NomeReceita}>X-Salada Bacon Egg</Text>
                </View>
            </View>
            <View style={EstiloReceitas.Receitas}>
                <View>
                    <TouchableOpacity onPress={()=>navigation.navigate('ReceitasHipercaloricas3')}>
                        <Image style={EstiloReceitas.Imagem}source={require('../Imagens/MingauAveia.png')}></Image>
                    </TouchableOpacity>
                    <Text style={EstiloReceitas.NomeReceita}>Mingau proteico</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={()=>navigation.navigate('ReceitasHipercaloricas4')}>
                        <Image style={EstiloReceitas.Imagem}source={require('../Imagens/BarraProteina.png')}></Image>
                    </TouchableOpacity>
                    <Text style={EstiloReceitas.NomeReceita}>Barra de Proteina</Text>
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

export default ReceitasHipercaloricas;
