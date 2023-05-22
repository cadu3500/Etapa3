import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

function ReceitasHipercaloricas3({navigation}){
    return(
        <ScrollView>
            <View style={EstiloReceitasHipercaloricas.Receitas}>
                <Text style={EstiloReceitasHipercaloricas.Titulo}>Mingau proteico de aveia</Text>
            </View>
            <View style={EstiloReceitasHipercaloricas.Receitas}>
                <View>
                    <Image style={EstiloReceitasHipercaloricas.ImagemReceita}source={require('../Imagens/MingauAveia.png')}></Image>
                    <Text style={EstiloReceitasHipercaloricas.Titulo}>Ingredientes</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>1. 12 claras de ovo</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>2. 1 gema</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>3. ½ xícara de farinha de aveia</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>4. Canela em pó à gosto</Text>
                    <Text style={EstiloReceitasHipercaloricas.Titulo}>Modo de preparo</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>1. Bata todos os ingredientes no liquidificador e coloque a misture em uma uma panela com fogo alto. Aqueça e mexa com uma colher até que a misture ganhe consistência, tire do fogo e aproveite a sua refeição.</Text>
                    <Text style={EstiloReceitasHipercaloricas.Titulo}>Valor Nutricional</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>Calorias: 440 calorias</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>Carboidrato: 31 g</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>Proteína: 58 g</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>Gordura: 9 g</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>Uma forma fácil de aumentar o consumo de calorias e proteína durante o dia, além de ser fácil e rápido de preparar.</Text>
                </View>
            </View>
        </ScrollView>
    )
}



const EstiloReceitasHipercaloricas=StyleSheet.create({
    
TituloReceita: {
    fontSize: 30,
    fontFamily: 'arial',
    color: 'black',
    justifyContent: 'center',
    margin: 10,
},
Titulo: {
    fontSize: 30,
    fontFamily: 'arial',
    color: 'black',
    justifyContent: 'center',
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
},
ImagemReceita: {
    width: 600,
    height: 300,
},

Receitas: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    flexDirection: 'row',
    margin: 1,
},
NomeReceita: {
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
    padding: 10,
    margin: 1,
},
Imagem: {
    width: 250,
    height: 300,
    margin: 10,
},
ModoDePreparo: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    flexDirection: 'row',
    margin: 1,
},
TextoReceitas: {
    color: 'black',
    fontSize: 20,
    textAlign: 'left',
    padding: 10,
},
});

export default ReceitasHipercaloricas3;
