import React,{Component} from "react";
import { ScrollView,StyleSheet,Text,View} from "react-native";
import AlmocoComponente from "../Componentes/AlmocoComponente";
import AlmocoDatabase from "../Database/AlmocoDatabase";


export default class ListagemAlmoco extends Component{
  constructor(props){
    super(props)
    this.state={
      nome: "",
      calorias: "",
      imagem: "",
      Lista: []
    }
    this.Listar()
  }


  Listar=()=>{
    const Banco=new AlmocoDatabase()
    Banco.Listar().then(
      ListaCompleta=>{
        this.setState({Lista: ListaCompleta})
      }
    )
  }


  Remover=(ID)=>{
    const Banco=new AlmocoDatabase()
    Banco.Remover(ID)
    this.Listar()
  }


  render(){
    return(
      <ScrollView>
        <View>
          <Text style={Estilo.Titulo}>Listagem dos Almoços Cadastrados</Text>
          {
            this.state.Lista.map(li=>(
              <AlmocoComponente
                Almoco={li}
                id={li.id}
                nome={li.nome}
                calorias={li.calorias}
                imagem={li.imagem}
                Remover={this.Remover}
              />
            )
            )
          }
        </View>
      </ScrollView>
    )
  }
}

const Estilo=StyleSheet.create({
  Titulo: {
    fontSize: 18,
    color: 'black',
    margin: 20,
    fontWeight: 'bold'
  },
});