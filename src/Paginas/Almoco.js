import React from "react";
import { View, Button, Text} from "react-native";

export default function Almoco({navigation}){
    return(
        <View style={{margin: 20}}>
            <Button
                title="Cadastro do Almoço"
                onPress={()=>navigation.navigate('CadastroAlmoco')}>
            </Button>
            <Text></Text>
            <Text></Text>
            <Button
                title="Listagem Almoço"
                onPress={()=>navigation.navigate('ListagemAlmoco')}>
            </Button>
        </View>
    )
}

