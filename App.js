import React, { Component } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {notificationManager} from './src/Servicos/NotificationManager';
import Home from './src/Paginas/Home';
import Receitas from "./src/Paginas/Receitas";
import ReceitasFit from "./src/Paginas/ReceitasFit";
import ReceitasFit1 from "./src/Paginas/ReceitasFit1";
import ReceitasFit2 from "./src/Paginas/ReceitasFit2";
import ReceitasFit3 from "./src/Paginas/ReceitasFit3";
import ReceitasFit4 from "./src/Paginas/ReceitasFit4";
import ReceitasHipercaloricas from "./src/Paginas/ReceitasHipercaloricas";
import ReceitasHipercaloricas1 from "./src/Paginas/ReceitasHipercaloricas1";
import ReceitasHipercaloricas2 from "./src/Paginas/ReceitasHipercaloricas2";
import ReceitasHipercaloricas3 from "./src/Paginas/ReceitasHipercaloricas3";
import ReceitasHipercaloricas4 from "./src/Paginas/ReceitasHipercaloricas4";
import Informacoes from './src/Paginas/Informacoes';
import ButtonNew from "./src/Componentes/ButtonNew";
import HomeIcone from 'react-native-vector-icons/Entypo';
import ReceitasIcone from 'react-native-vector-icons/AntDesign';
import InformacoesIcone from 'react-native-vector-icons/AntDesign';
import Cafe from "./src/Paginas/Cafe";
import CadastroCafe from "./src/Paginas/CadastroCafe";
import ListagemCafe from "./src/Paginas/ListagemCafe";
import Almoco from "./src/Paginas/Almoco";
import CadastroAlmoco from './src/Paginas/CadastroAlmoco';
import ListagemAlmoco from "./src/Paginas/ListagemAlmoco";
import Jantar from './src/Paginas/Jantar';
import CadastroJantar from "./src/Paginas/CadastroJantar";
import ListagemJantar from "./src/Paginas/ListagemJantar";


const Stack=createNativeStackNavigator();
const Tab=createBottomTabNavigator();
const Notificador=notificationManager;



const HomeTabs=()=>{
  return(
    <Tab.Navigator>
      <Tab.Screen 
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color,size})=>(
            <HomeIcone name="home"color={color}size={size}/>
          )
        }}
      />
      <Tab.Screen 
        name="Novo"
        component={ButtonNew}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ()=>(
            <ButtonNew style={{bottom: 50}} />
          )
        }}
      />
      <Tab.Screen 
        name="Receitas"
        component={Receitas}
        options={{
          headerShown: false,
          tabBarIcon: ({color,size})=>(
            <ReceitasIcone name="book"color={color}size={size}/>
          )
        }}
      />
      <Tab.Screen 
        name="Informacoes"
        component={Informacoes}
        options={{
          headerShown: false,
          tabBarIcon: ({color,size})=>(
            <InformacoesIcone name="info"color={color}size={size}/>
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default class App extends Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    Notificador.configurar()
    Notificador.criarCanal()
    Notificador.agendarNotificacao()
  }

  render(){
    return(
      <NavigationContainer>
        <StatusBar backgroundColor="#38A69D"barStyle="light-content"/>
        <Stack.Navigator>
          <Stack.Screen name="Home"component={HomeTabs}options={{headerShown: false}}/>
          {
              ({navigation})=>
              {
                Notificador.definirNavegador(navigation);
                return(<Home navegador={navigation}clicarParaEnviar={this.clicarParaEnviar}cancelar={this.cancelar}/>)
              }
          }
          <Stack.Screen name="ReceitasFit"component={ReceitasFit}/>
          <Stack.Screen name="ReceitasFit1"component={ReceitasFit1}/>
          <Stack.Screen name="ReceitasFit2"component={ReceitasFit2}/>
          <Stack.Screen name="ReceitasFit3"component={ReceitasFit3}/>
          <Stack.Screen name="ReceitasFit4"component={ReceitasFit4}/>
          <Stack.Screen name="ReceitasHipercaloricas"component={ReceitasHipercaloricas}/>
          <Stack.Screen name="ReceitasHipercaloricas1"component={ReceitasHipercaloricas1}/>
          <Stack.Screen name="ReceitasHipercaloricas2"component={ReceitasHipercaloricas2}/>
          <Stack.Screen name="ReceitasHipercaloricas3"component={ReceitasHipercaloricas3}/>
          <Stack.Screen name="ReceitasHipercaloricas4"component={ReceitasHipercaloricas4}/>
          <Stack.Screen name="Cafe"component={Cafe}/>
          {
              ({navigation})=>{
                return(<Cafe navegador={navigation}/>)
              }
          }
          <Stack.Screen name="CadastroCafe"component={CadastroCafe}/>
          <Stack.Screen name="ListagemCafe"component={ListagemCafe}/>
          <Stack.Screen name="Almoco"component={Almoco}/>
          <Stack.Screen name="CadastroAlmoco"component={CadastroAlmoco}/>
          <Stack.Screen name="ListagemAlmoco"component={ListagemAlmoco}/>
          <Stack.Screen name="Jantar"component={Jantar}/>
          <Stack.Screen name="CadastroJantar"component={CadastroJantar}/>
          <Stack.Screen name="ListagemJantar"component={ListagemJantar}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}