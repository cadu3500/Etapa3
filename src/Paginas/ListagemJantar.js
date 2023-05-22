import React,{Component} from "react";
import { ScrollView,StyleSheet,Text,View} from "react-native";
import JantarComponente from "../Componentes/JantarComponente";
import JantarDatabase from "../Database/JantarDatabase";


export default class ListagemJantar extends Component{
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
    const Banco=new JantarDatabase()
    Banco.Listar().then(
      ListaCompleta=>{
        this.setState({Lista: ListaCompleta})
      }
    )
  }


  Remover=(ID)=>{
    const Banco=new JantarDatabase()
    Banco.Remover(ID)
    this.Listar()
  }


  render(){
    return(
      <ScrollView>
        <View>
          <Text style={Estilo.Titulo}>Listagem do Jantar Cadastrados</Text>
          {
            this.state.Lista.map(li=>(
              <JantarComponente
                Jantar={li}
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