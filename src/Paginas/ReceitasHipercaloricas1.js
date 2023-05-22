import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

function ReceitasHipercaloricas1({navigation}){
    return(
        <ScrollView>
            <View style={EstiloReceitasHipercaloricas.Receitas}>
                <Text style={EstiloReceitasHipercaloricas.Titulo}>Sanduíche de frango com abacate</Text>
            </View>
            <View style={EstiloReceitasHipercaloricas.Receitas}>
                <View>
                    <Image style={EstiloReceitasHipercaloricas.ImagemReceita}source={require('../Imagens/SanduicheAbacate.png')}></Image>
                    <Text style={EstiloReceitasHipercaloricas.Titulo}>Ingredientes</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>1. 2 fatias de pão de forma</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>2. 1 limão</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>3. 1 peito de frango</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>4. 1 abacate maduro</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>5. ½ dente de alho</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>6. Salsinha ou coentro picadinho</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>7. 1 colher (sopa) de maionese</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>8. Folhas de alface ou rúcula à vontade</Text>
                    <Text style={EstiloReceitasHipercaloricas.Titulo}>Modo de preparo</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>1. Tempere o frango com sal e pimenta do reino, coloque-o em uma panela ou grill. Deixe-o grelhar e vai virando até ficar bem dourado. Esprema o suco de meio limão na panela e tampe. Deixe o frango cozinhando até ficar bem cozido e dourado dos dois lados. Quando estiver sem ponto, retire o frango do fogo e deixe descansar.</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>2. Abra o abacate e retire toda a polpa, colocando-a em uma tigela. Tempere com uma pitada de sal, a pimenta do reino, a salsinha, o alho e o suco da outra metade do limão. Misture tudo com um garfo, esmagando um pouco do abacate e por fim acrescente a maionese.</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>3. Você pode tostar o pão na torradeira ou sanduicheira, depois espalhe quase toda a maionese de abacate sobre uma fatia do pão e o restante na outra. Coloque o frango em pedaços pequenos sobre a maionese e por uma o alface e cubra com a outra fatia do pão.</Text>
                    <Text style={EstiloReceitasHipercaloricas.Titulo}>Valor Nutricional</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>Calorias: 716 calorias</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>Carboidrato: 37,5 g</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>Proteína: 71 g</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>Gordura: 31,4g</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>Este lanche é uma ótima opção para duas refeições cultivadas, mas também pode substituir uma refeição principal.</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>Contém uma alta quantidade de calorias e proteínas por porção. Quase toda a gordura desta receita é provinda do abacate, ou seja, é gordura boa. Se você tem alguma restrição ao consumo de gordura, você pode reduzir a quantidade de abacate.</Text>
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

export default ReceitasHipercaloricas1;
