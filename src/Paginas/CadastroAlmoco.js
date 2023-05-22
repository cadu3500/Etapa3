import React,{Component} from "react";
import { ScrollView,TextInput,StyleSheet,Text,View,TouchableOpacity} from "react-native";
import Almoco from "../Model/Almoco";
import AlmocoDatabase from "../Database/AlmocoDatabase";
import {RNCamera} from 'react-native-camera';


export default class CadastroAlmoco extends Component{
  constructor(props){
    super(props);
    this.state={
      nome: "",
      calorias: "",
      imagem: "",
      Lista: []
    }
  }

  Inserir=(nome,calorias,imagem)=>{
    const AlmocoNovo=new Almoco(nome,calorias,imagem)
    const Banco=new AlmocoDatabase()
    Banco.Inserir(AlmocoNovo)
  }

  TirarFoto=async()=>{
    if(this.camera){
      const options={quality: 0.5, base64: true};
      const data=await this.camera.takePictureAsync(options);
      console.log(data.uri);
      this.setState({imagem: data.uri})
    }
  };

  render(){
    return(
      <ScrollView>
        <View style={Estilo.Corpo}>
          <Text style={Estilo.Titulo}>Cadastro do Almoço</Text>
          <TextInput style={Estilo.EntradaTexto} placeholder="Digite o nome do prato..."onChangeText={(valor)=>{this.setState({nome: valor})}}/>
          <TextInput style={Estilo.EntradaTexto} placeholder="Digite a quantidade de calorias do prato..."onChangeText={(valor)=>{this.setState({calorias: valor})}}/>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <RNCamera
              ref={ref=>{
                this.camera=ref;
              }}
              style={{height: 200, width: 200}}
              type={RNCamera.Constants.Type.back}
              flashMode={RNCamera.Constants.FlashMode.on}
              captureOrientation={RNCamera.Constants.Orientation.portrait}
              androidCameraPermissionOptions={{
                title: "Permissão para usar a câmera",
                message: "Nós precisamos da sua permissão para usar a câmera",
                buttonPositive: "Ok",
                buttonNegative: "Cancelar"
              }}
              androidRecordAudioPermissionOptions={{
                title: "Permissão para usar a gravação de áudio",
                message: "Precisamos da sua permissão para usar seu áudio",
                buttonPositive: "Ok",
                buttonNegative: "Cancelar"
              }}
            />
          </View>
            <View style={Estilo.Areabotao}>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <TouchableOpacity onPress={this.TirarFoto.bind(this)}style={Estilo.BotaoTirarFoto}>
                <Text style={{fontSize: 15}}>Tirar Foto</Text>
              </TouchableOpacity>
            </View>
            <View style={Estilo.Areabotao}>
              <TouchableOpacity onPress={()=>this.Inserir(this.state.nome,this.state.calorias,this.state.imagem)}style={Estilo.BotaoSalvar}>
                <Text style={{fontSize: 15}}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
      </ScrollView>
    )
  }
}


const Estilo=StyleSheet.create({
  Titulo: {
    fontSize: 18,
    color: 'black',
    margin: 20
  },
  EntradaTexto: {
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
    width: 400,
    height: 35,
    margin: 3,
    textAlign: 'center'
  },
  Corpo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  BotaoSalvar: {
    backgroundColor: 'lightgreen',
    width: 150,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  BotaoTirarFoto: {
    backgroundColor: 'red',
    width: 150,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  Areabotao: {
    alignItems: 'center'
  },
});