import React,{Component} from "react";
import { ScrollView,StyleSheet,Text,View} from "react-native";
import CafeComponente from "../Componentes/CafeComponente";
import CafeDatabase from "../Database/CafeDatabase";


export default class ListagemCafe extends Component{
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
    const Banco=new CafeDatabase()
    Banco.Listar().then(
      ListaCompleta=>{
        this.setState({Lista: ListaCompleta})
      }
    )
  }


  Remover=(ID)=>{
    const Banco=new CafeDatabase()
    Banco.Remover(ID)
    this.Listar()
  }


  render(){
    return(
      <ScrollView>
        <View>
          <Text style={Estilo.Titulo}>Listagem do Café da Manhã Cadastrados</Text>
          {
            this.state.Lista.map(li=>(
              <CafeComponente
                Cafe={li}
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