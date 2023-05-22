import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

function ReceitasFit3({navigation}){
    return(
        <ScrollView>
            <View style={EstiloReceitasFit.Receitas}>
                <Text style={EstiloReceitasFit.Titulo}>Almôndegas de carne com aveia</Text>
            </View>
            <View style={EstiloReceitasFit.Receitas}>
                <View>
                    <Image style={EstiloReceitasFit.ImagemReceita}source={require('../Imagens/AlmondegasCarne.png')}></Image>
                    <Text style={EstiloReceitasFit.NomeReceita}>Essa deliciosa receita de almôndegas de carne com aveia é um acompanhamento perfeito para massas, seu jantar vai ficar incrível. Você pode adicionar outras ervas de sua preferência, hortelã picado combina bastante, experimente!</Text>
                    <Text style={EstiloReceitasFit.Titulo}>Ingredientes</Text>
                    <Text style={EstiloReceitasFit.NomeReceita}>1. 500 gramas de patinho moído (de preferência sem gordura)</Text>
                    <Text style={EstiloReceitasFit.NomeReceita}>2. 2 colheres de sopa de farelo de aveia</Text>
                    <Text style={EstiloReceitasFit.NomeReceita}>3. 1 maço de cheiro verde picadinho</Text>
                    <Text style={EstiloReceitasFit.NomeReceita}>4. 1/2 cebola picada</Text>
                    <Text style={EstiloReceitasFit.NomeReceita}>5. 1 ovo</Text>
                    <Text style={EstiloReceitasFit.NomeReceita}>6. 1 colher de chá (rasa) de sal</Text>
                    <Text style={EstiloReceitasFit.NomeReceita}>7. Pimenta-do-reino a gosto</Text>
                    <Text style={EstiloReceitasFit.Titulo}>Modo de preparo</Text>
                    <Text style={EstiloReceitasFit.NomeReceita}>1. Em um recipiente, adicione todos os ingredientes e misture até formar uma massa (caso fique muito mole, pode colocar um pouco mais de farelo de aveia).</Text>
                    <Text style={EstiloReceitasFit.NomeReceita}>2. Pegue pequenas porções da massa e molde em formato de bolinhas.</Text>
                    <Text style={EstiloReceitasFit.NomeReceita}>3. Transfira elas para uma assadeira untada e leve ao forno preaquecido a 180 ºC por cerca de 20 minutos.</Text>
                    <Text style={EstiloReceitasFit.NomeReceita}>4. Cubra as almôndegas com molho de tomate e sirva. Bom apetite.</Text>
                </View>
            </View>
        </ScrollView>
    )
}



const EstiloReceitasFit=StyleSheet.create({
    
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

export default ReceitasFit3;
