import React from "react";
import { View, Button, Text} from "react-native";

export default function Cafe({navigation}){
    return(
        <View style={{margin: 20}}>
            <Button
                title="Cadastro do Café da Manhã"
                onPress={()=>navigation.navigate('CadastroCafe')}>
            </Button>
            <Text></Text>
            <Text></Text>
            <Button
                title="Listagem do Café da Manhã"
                onPress={()=>navigation.navigate('ListagemCafe')}>
            </Button>
        </View>
    )
}

