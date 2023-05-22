import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";


function ReceitasHipercaloricas2({navigation}){
    return(
        <ScrollView>
            <View style={EstiloReceitasHipercaloricas.Receitas}>
                <Text style={EstiloReceitasHipercaloricas.Titulo}>X-Salada Bacon Egg</Text>
            </View>
            <View style={EstiloReceitasHipercaloricas.Receitas}>
                <View>
                    <Image style={EstiloReceitasHipercaloricas.ImagemReceita}source={require('../Imagens/XisSalada.png')}></Image>
                    <Text style={EstiloReceitasHipercaloricas.Titulo}>Ingredientes</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>1. 220g de patinho moído</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>2. 1 ovo</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>3. 3 fatias de queijo mussarela</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>4. 1 pão de hambúrguer</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>5. 2 fatias de tomate</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>6. 2 fatias de bacon</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>7. Alface</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>8. 1 colher (sopa) de maionese</Text>
                    <Text style={EstiloReceitasHipercaloricas.Titulo}>Modo de preparo</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>1. Tempere a carne com sal, misture e deixe em formato de hambúrguer. Coloque em uma frigideira e deixe por alguns minutos. Vire o hambúrguer e quando estiver quase pronto, coloque as fatias de queijo. Quando o hambúrguer estiver bem cozido e a mussarela derretida, retire do fogo.</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>2. Enquanto isso, em outra panela, frite um ovo e as fatias de bacon em uma panela antiaderente. Coloque o hambúrguer sobre uma fatia do pão já com maionese, coloque o ovo, o bacon, alface, tomate e está pronto.</Text>
                    <Text style={EstiloReceitasHipercaloricas.Titulo}>Valor Nutricional</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>Calorias: 850 calorias</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>Carboidrato: 31 g</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>Proteína: 89 g</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>Gordura: 44 g</Text>
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

export default ReceitasHipercaloricas2;
