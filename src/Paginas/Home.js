import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import {notificationManager} from '../Servicos/NotificationManager';

const Notificador=notificationManager;

function Home({navigation}){
    clicarParaEnviar=()=>{
        Notificador.exibirNotificacao(
          1,
          "Esse aplicativo,",
          "Você pode cadastrar alimento e ver quanto esse alimento tem de valor calórico",
          {},
          {}
        )
      }
      
      cancelar=()=>{
        Notificador.cancelar()
      }
      
    return(
        <ScrollView>
            <View style={EstiloHome.Home}>
                <Text style={EstiloHome.Titulo}>Quanto você come...</Text>
            </View>
            <View style={EstiloHome.Home}>
                <View>
                    <Image source={require('../Imagens/logo.png')}/>
                </View>
            </View>
            <View style={EstiloHome.Home}>
                <TouchableOpacity
                    style={EstiloHome.button}
                    onPress={()=>this.clicarParaEnviar()}
                >
                    <Text>Enviar Notificação</Text>
                </TouchableOpacity>
            </View>
            <View style={EstiloHome.Home}>
                <TouchableOpacity
                    style={EstiloHome.button}
                    onPress={()=>this.cancelar()}
                >
                    <Text>Cancelar Notificações</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const EstiloHome=StyleSheet.create({
    Home: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        flexDirection: 'row',
        margin: 1,
    },
    Titulo: {
        fontSize: 40,
        textAlign: 'center',
        color: 'black',
        padding: 10,
        margin: 1,
        fontWeight: 'bold',
    },
    Container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: 200,
        marginTop: 10
    }
});



export default Home;
