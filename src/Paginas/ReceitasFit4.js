import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

function ReceitasFit4({navigation}){
    return(
        <ScrollView>
            <View style={EstiloReceitasFit.Receitas}>
                <Text style={EstiloReceitasFit.Titulo}>Brigadeiro fit com 3 ingredientes</Text>
            </View>
            <View style={EstiloReceitasFit.Receitas}>
                <View>
                    <Image style={EstiloReceitasFit.ImagemReceita}source={require('../Imagens/BrigadeiroFit.png')}></Image>
                    <Text style={EstiloReceitasFit.NomeReceita}>O brigadeiro fit de banana é uma ótima alternativa à receita com leite condensado, além de ser bem mais saudável e menos doce. Ele é perfeito tanto para festinhas quanto para comer como sobremesa no dia a dia – ou mesmo em algum momento durante o dia quando der vontade de comer um docinho!</Text>
                    <Text style={EstiloReceitasFit.Titulo}>Ingredientes</Text>
                    <Text style={EstiloReceitasFit.NomeReceita}>1. 2 bananas-nanicas bem maduras</Text>
                    <Text style={EstiloReceitasFit.NomeReceita}>2. 2 colheres de sopa de cacau em pó 100%</Text>
                    <Text style={EstiloReceitasFit.NomeReceita}>3. 4 colheres de sopa de leite em pó</Text>
                    <Text style={EstiloReceitasFit.Titulo}>Modo de preparo</Text>
                    <Text style={EstiloReceitasFit.NomeReceita}>1. Descasque as bananas e leve-as ao micro-ondas, em uma tigela, por cerca de 2 minutos. Se a banana estiver gelada, aumente o tempo de micro-ondas para 2 minutos e meio.</Text>
                    <Text style={EstiloReceitasFit.NomeReceita}>2. Remova a água que formará durante o tempo de micro-ondas.</Text>
                    <Text style={EstiloReceitasFit.NomeReceita}>3. Com um garfo, amasse todas as bananas, até virar uma pasta bem lisa.</Text>
                    <Text style={EstiloReceitasFit.NomeReceita}>4. Acrescente o leite e o cacau em pó, e misture bem até todos os ingredientes ficarem bem incorporados formando uma massa homogênea.</Text>
                    <Text style={EstiloReceitasFit.NomeReceita}>5. Deixe o brigadeiro esfriar um pouco em temperatura ambiente.</Text>
                    <Text style={EstiloReceitasFit.NomeReceita}>6. Cubra a massa com um plástico filme e leve para a geladeira por cerca de 20 minutos.</Text>
                    <Text style={EstiloReceitasFit.NomeReceita}>7. Unte as mãos com um pouco de óleo de coco (ou manteiga) e modele pequenas bolinhas com a massa.</Text>
                    <Text style={EstiloReceitasFit.NomeReceita}>8. Para decorar, você pode colocar granulado. Agora é só servir e bom apetite!.</Text>
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

export default ReceitasFit4;
