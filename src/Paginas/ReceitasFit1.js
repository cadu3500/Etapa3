import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";


function ReceitasFit1({navigation}){
    return(
        <ScrollView>
            <View style={EstiloReceitasFit.Receitas}>
                <Text style={EstiloReceitasFit.Titulo}>Panqueca de aveia</Text>
            </View>
            <View style={EstiloReceitasFit.Receitas}>
                <View>
                    <Image style={EstiloReceitasFit.ImagemReceita}source={require('../Imagens/PanquecaDeAveia.png')}></Image>
                    <Text style={EstiloReceitasFit.Titulo}>Ingredientes</Text>
                    <Text style={EstiloReceitasFit.NomeReceita}>1. 1 xícara de aveia em flocos finos ou farinha de aveia</Text>
                    <Text style={EstiloReceitasFit.NomeReceita}>2. 1 xícara de água</Text>
                    <Text style={EstiloReceitasFit.NomeReceita}>3. 2 colheres de sopa de melado</Text>
                    <Text style={EstiloReceitasFit.NomeReceita}>4. 1 colher de sopa de farinha de linhaça</Text>
                    <Text style={EstiloReceitasFit.NomeReceita}>5. 1 colher de chá de fermento químico em pó</Text>
                    <Text style={EstiloReceitasFit.Titulo}>Modo de preparo</Text>
                </View>
            </View>
            <View style={EstiloReceitasFit.ModoDePreparo}>
                <View>
                    <Image style={EstiloReceitasFit.Imagem}source={require('../Imagens/Etapa1Panqueca.png')}></Image>
                </View>
                <View>
                    <Text style={EstiloReceitasFit.TextoReceitas}>1. Reúna todos os ingredientes;</Text>
                </View>
            </View>
            <View style={EstiloReceitasFit.ModoDePreparo}>
                <View>
                    <Image style={EstiloReceitasFit.Imagem}source={require('../Imagens/Etapa2Panqueca.png')}></Image>
                </View>
                <View>
                    <Text style={EstiloReceitasFit.TextoReceitas}>2. Coloque todos os ingredientes</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>no liquidificador,</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>com exceção do fermento,</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>e bata até ficar homogêneo.</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>Se você estiver</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>usando farinha de aveia,</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>pode misturar todos</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>os ingredientes com um fouet;</Text>
                </View>
            </View>
            <View style={EstiloReceitasFit.ModoDePreparo}>
                <View>
                    <Image style={EstiloReceitasFit.Imagem}source={require('../Imagens/Etapa3Panqueca.png')}></Image>
                </View>
                <View>
                    <Text style={EstiloReceitasFit.TextoReceitas}>3. Acrescente o fermento por</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>último e misture delicadamente;</Text>
                </View>
            </View>
            <View style={EstiloReceitasFit.ModoDePreparo}>
                <View>
                    <Image style={EstiloReceitasFit.Imagem}source={require('../Imagens/Etapa4Panqueca.png')}></Image>
                </View>
                <View>
                    <Text style={EstiloReceitasFit.TextoReceitas}>4. Aqueça uma frigideira</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>antiaderente em fogo baixo.</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>Espalhe um pouco da massa</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>e tampe para abafar</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>e já começar a assar</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>o outro lado;</Text>
                </View>
            </View>
            <View style={EstiloReceitasFit.ModoDePreparo}>
                <View>
                    <Image style={EstiloReceitasFit.Imagem}source={require('../Imagens/Etapa5Panqueca.png')}></Image>
                </View>
                <View>
                    <Text style={EstiloReceitasFit.TextoReceitas}>5. Verifique se está bem assada</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>e vire para assar o outro lado</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>até dourar.</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>Tampe novamente para abafar;</Text>
                </View>
            </View>
            <View style={EstiloReceitasFit.ModoDePreparo}>
                <View>
                    <Image style={EstiloReceitasFit.Imagem}source={require('../Imagens/Etapa6Panqueca.png')}></Image>
                </View>
                <View>
                    <Text style={EstiloReceitasFit.TextoReceitas}>6. Repita o processo</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>até terminar a massa;</Text>
                </View>
            </View>
            <View style={EstiloReceitasFit.ModoDePreparo}>
                <View>
                    <Image style={EstiloReceitasFit.Imagem}source={require('../Imagens/Etapa7Panqueca.png')}></Image>
                </View>
                <View>
                    <Text style={EstiloReceitasFit.TextoReceitas}>7. Sirva com o acompanhamento</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>de sua preferência</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>(mel,frutas,geleias,castanhas)</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>Bom apetite!</Text>
                </View>
            </View>
            <View style={EstiloReceitasFit.Receitas}>
                <View>
                    <Text style={EstiloReceitasFit.Titulo}>Dicas</Text>
                    <Text style={EstiloReceitasFit.NomeReceita}>Adicone sementes na massa,fica delicioso e incrementa o valor nutricional da panqueca.</Text>
                    <Text style={EstiloReceitasFit.NomeReceita}>Frutas frescas ou em compota acompanham muito bem!</Text>
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

export default ReceitasFit1;
