import React from "react";
import { View, Button, Text} from "react-native";

export default function Almoco({navigation}){
    return(
        <View style={{margin: 20}}>
            <Button
                title="Cadastro do Jantar"
                onPress={()=>navigation.navigate('CadastroJantar')}>
            </Button>
            <Text></Text>
            <Text></Text>
            <Button
                title="Listagem Jantar"
                onPress={()=>navigation.navigate('ListagemJantar')}>
            </Button>
        </View>
    )
}

