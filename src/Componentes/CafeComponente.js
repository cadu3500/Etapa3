import React,{Component} from "react";
import { StyleSheet,Text,View,TouchableOpacity, Image } from "react-native";

export default class CafeComponente extends Component{
    render(){
        return(
            <View style={{ margin: 5}}>
            <View style={{flex: 1,  borderRadius: 10,  padding: 10}}>
              <View style={{flex: 1}}>
                <Text style={Estilo.Titulo}>Nome: {this.props.nome}</Text>
                <Text style={Estilo.Titulo}>Calorias: {this.props.calorias}</Text>
                <Text style={Estilo.Titulo}>Imagem: <Text>{this.props.imagem}</Text></Text>
                <Image style={Estilo.Imagem}source={{uri: this.props.imagem}}/>
                <View style={Estilo.AreaBotao}>
                    <TouchableOpacity onPress={()=>this.props.Remover(this.props.id)} style={Estilo.BotaoRemover}>
                        <Text>Remover</Text>
                    </TouchableOpacity>
                </View>
              </View>
            <Text></Text>
            </View>
          </View>
        )
}
}

const Estilo=StyleSheet.create({
    AreaBotao: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    BotaoRemover: {
        backgroundColor: 'red',
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        padding: 5,
        margin: 5,
    },
    Imagem: {
        width: 150,
        height: 150,
    },
    Titulo: {
        fontSize: 18,
        color: 'black',
        margin: 0
      },
})
