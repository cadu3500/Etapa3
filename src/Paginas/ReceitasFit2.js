import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";


function ReceitasFit2({navigation}){
    return(
        <ScrollView>
            <View style={EstiloReceitasFit.Receitas}>
                <Text style={EstiloReceitasFit.Titulo}>Dadinhos De Tapioca</Text>
            </View>
            <View style={EstiloReceitasFit.Receitas}>
                <View>
                    <Image style={EstiloReceitasFit.ImagemReceita}source={require('../Imagens/DadinhosDeTapioca.png')}></Image>
                    <Text style={EstiloReceitasFit.Titulo}>Ingredientes</Text>
                    <Text style={EstiloReceitasFit.NomeReceita}>1. 250 gramas de tapioca granulada</Text>
                    <Text style={EstiloReceitasFit.NomeReceita}>2. 375 gramas de queijo coalho</Text>
                    <Text style={EstiloReceitasFit.NomeReceita}>3. 500 ml de leite integral</Text>
                    <Text style={EstiloReceitasFit.NomeReceita}>4. Sal, pimenta do reino, orégano a gosto</Text>
                    <Text style={EstiloReceitasFit.NomeReceita}>5. Óleo o quanto baste para fritar por imersão</Text>
                    <Text style={EstiloReceitasFit.Titulo}>Modo de preparo</Text>
                </View>
            </View>
            <View style={EstiloReceitasFit.ModoDePreparo}>
                <View>
                    <Image style={EstiloReceitasFit.Imagem}source={require('../Imagens/Etapa1DadinhosDeTapioca.jpg')}></Image>
                </View>
                <View>
                    <Text style={EstiloReceitasFit.TextoReceitas}>1. Reúna todos os ingredientes;</Text>
                </View>
            </View>
            <View style={EstiloReceitasFit.ModoDePreparo}>
                <View>
                    <Image style={EstiloReceitasFit.Imagem}source={require('../Imagens/Etapa2DadinhosDeTapioca.jpg')}></Image>
                </View>
                <View>
                    <Text style={EstiloReceitasFit.TextoReceitas}>2. Com um ralador, rale</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>o queijo coalho finamente</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>e reserve em um recipiente;</Text>
                </View>
            </View>
            <View style={EstiloReceitasFit.ModoDePreparo}>
                <View>
                    <Image style={EstiloReceitasFit.Imagem}source={require('../Imagens/Etapa3DadinhosDeTapioca.jpg')}></Image>
                </View>
                <View>
                    <Text style={EstiloReceitasFit.TextoReceitas}>3. Em uma panela, ferva bem</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>o leite, em fogo médio.</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>Quando ele chegar ao ponto</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>de subir espuma,</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>desligue o fogo;</Text>
                </View>
            </View>
            <View style={EstiloReceitasFit.ModoDePreparo}>
                <View>
                    <Image style={EstiloReceitasFit.Imagem}source={require('../Imagens/Etapa4DadinhosDeTapioca.jpg')}></Image>
                </View>
                <View>
                    <Text style={EstiloReceitasFit.TextoReceitas}>4. Na tigela com o queijo,</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>acrescente a tapioca.</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>Tempere com sal,</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>pimenta e orégano</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>e misture bem para a massa</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>pegar o sabor;</Text>
                </View>
            </View>
            <View style={EstiloReceitasFit.ModoDePreparo}>
                <View>
                    <Image style={EstiloReceitasFit.Imagem}source={require('../Imagens/Etapa5DadinhosDeTapioca.jpg')}></Image>
                </View>
                <View>
                    <Text style={EstiloReceitasFit.TextoReceitas}>5.Adicione o leite</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>fervente na mistura</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>e mexa sem parar,</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>com o auxílio de um fouet,</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>até incorporar,</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>por cerca de 3 minutos;</Text>
                </View>
            </View>
            <View style={EstiloReceitasFit.ModoDePreparo}>
                <View>
                    <Image style={EstiloReceitasFit.Imagem}source={require('../Imagens/Etapa6DadinhosDeTapioca.jpg')}></Image>
                </View>
                <View>
                    <Text style={EstiloReceitasFit.TextoReceitas}>6. Despeje a mistura na forma</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>de 20 x 25 cm forrada</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>com filme plástico sobrando</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>nas bordas.</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>Deixe descansar</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>por uns 10 minutos.</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>DICA: A forma precisa</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>ser pequena,</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>com cerca de 2 dedos de altura.</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>Cubra a forma com o filme</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>e leve para a geladeira</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>por 2 horas para firmar;</Text>
                </View>
            </View>
            <View style={EstiloReceitasFit.ModoDePreparo}>
                <View>
                    <Image style={EstiloReceitasFit.Imagem}source={require('../Imagens/Etapa7DadinhosDeTapioca.jpg')}></Image>
                </View>
                <View>
                    <Text style={EstiloReceitasFit.TextoReceitas}>7. Retire as aparas do bloco</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>de tapioca e faça cortes verticais</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>com pedaços de espessura</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>de 2 dedos.</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>Corte os bastonetes em cubos;</Text>
                </View>
            </View>
            <View style={EstiloReceitasFit.ModoDePreparo}>
                <View>
                    <Image style={EstiloReceitasFit.Imagem}source={require('../Imagens/Etapa8DadinhosDeTapioca.jpg')}></Image>
                </View>
                <View>
                    <Text style={EstiloReceitasFit.TextoReceitas}>8. Em uma panela ou frigideira</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>com bastante óleo quente,</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>deixe os dadinhos mergulhados</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>até dourar, sem mexer.</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>Retire com uma espátula e</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>coloque-os sobre um</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>prato coberto com papel</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>toalha;</Text>
                </View>
            </View>
            <View style={EstiloReceitasFit.ModoDePreparo}>
                <View>
                    <Image style={EstiloReceitasFit.Imagem}source={require('../Imagens/Etapa9DadinhosDeTapioca.jpg')}></Image>
                </View>
                <View>
                    <Text style={EstiloReceitasFit.TextoReceitas}>9. Sirva com o molho de sua</Text>
                    <Text style={EstiloReceitasFit.TextoReceitas}>preferência.</Text>
                </View>
            </View>
            <View style={EstiloReceitasFit.Receitas}>
                <View>
                    <Text style={EstiloReceitasFit.Titulo}>Dicas</Text>
                    <Text style={EstiloReceitasFit.NomeReceita}>Essa receita é bem prática e pode ser preparada até a etapa 9 com um dia de antecedência.</Text>
                    <Text style={EstiloReceitasFit.NomeReceita}>Fica delicioso servido com mel ou geleia de pimenta.</Text>
                    <Text style={EstiloReceitasFit.NomeReceita}>A tapioca granulada não é a mesma usada para o preparo na frigideira.</Text>
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

export default ReceitasFit2;
