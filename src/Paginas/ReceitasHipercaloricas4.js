import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

function ReceitasHipercaloricas4({navigation}){
    return(
        <ScrollView>
            <View style={EstiloReceitasHipercaloricas.Receitas}>
                <Text style={EstiloReceitasHipercaloricas.Titulo}>Barra de proteína</Text>
            </View>
            <View style={EstiloReceitasHipercaloricas.Receitas}>
                <View>
                    <Image style={EstiloReceitasHipercaloricas.ImagemReceita}source={require('../Imagens/BarraProteina.png')}></Image>
                    <Text style={EstiloReceitasHipercaloricas.Titulo}>Ingredientes</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>1. 2 xícaras (de chá) de aveia</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>2. 1/2 xícara (de chá) de pasta de amendoim</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>3. 4 scoops de whey protein (qualquer sabor)</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>4. 1 colher (sopa) de linhaça moída</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>5. 1/2 xícara (de chá) de água</Text>
                    <Text style={EstiloReceitasHipercaloricas.Titulo}>Modo de preparo</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>1. Misture todos os ingredientes em uma tigela até ficar uma mistura uniforme.</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>2. Coloque a mistura numa assadeira forrada com papel manteiga. Com o auxílio de uma espátula pressione e espalhe até a superfície ficar lisa. Coloque a forma no congelador por aproximadamente 30 minutos. Retire, corte as barrinhas e mantenha na geladeira.</Text>
                    <Text style={EstiloReceitasHipercaloricas.Titulo}>Valor Nutricional</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>Calorias: 1.823 calorias</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>Carboidrato: 120 g</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>Proteína: 140 g</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>Gordura: 87 g</Text>
                    <Text style={EstiloReceitasHipercaloricas.NomeReceita}>Observação: os valores acima são o total da receita. Quando cortar as barrinhas, os números diminuirão proporcionalmente em relação ao tamanho de cada uma.</Text>
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

export default ReceitasHipercaloricas4;
