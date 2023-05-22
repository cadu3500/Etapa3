import React, { useState } from 'react'
import {View, StyleSheet, TouchableWithoutFeedback, Animated} from 'react-native'
import NovoIcone from 'react-native-vector-icons/AntDesign';
import CafeDaManhaIcone from 'react-native-vector-icons/MaterialIcons';
import AlmocoIcone from 'react-native-vector-icons/MaterialIcons';
import JantarIcone from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const ButtonNew = props => {  
    
    const [animation] = useState(new Animated.Value(0))
    const navigation=useNavigation()

    const toogleMenu = () =>{
        const toValue = this.open ? 0 : 1

        Animated.spring(animation, {
            toValue,
            friction: 5,
            useNativeDriver: true
        }).start()

        this.open = !this.open
    }

    const rotation = {
        transform : [
            {
                rotate: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '45deg']
                })
            }
        ]
    }

    const CafeDaManhaStyle={
        transform: [
            {scale: animation},
            {
                translateY: animation.interpolate({
                    inputRange: [0,1],
                    outputRange: [0,-80]
                })
            }
        ]
    }

    const AlmocoStyle={
        transform: [
            {scale: animation},
            {
                translateY: animation.interpolate({
                    inputRange: [0,1],
                    outputRange: [0,-140]
                })
            }
        ]
    };


    const JantarStyle={
        transform: [
            {scale: animation},
            {
                translateY: animation.interpolate({
                    inputRange: [0,1],
                    outputRange: [0,-200]
                })
            }
        ]
    };

    return(
        <View style={{...Estilo.Container, ...props.style}}>
            <TouchableWithoutFeedback onPress={() =>navigation.navigate('Jantar')}>
                <Animated.View style={[Estilo.Button,Estilo.Secondary,JantarStyle]}>
                    <JantarIcone name="dinner-dining"size={50}color="#F02A4B"/>
                </Animated.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() =>navigation.navigate('Almoco')}>
                <Animated.View style={[Estilo.Button,Estilo.Secondary,AlmocoStyle]}>
                    <AlmocoIcone name="lunch-dining"size={50}color="#F02A4B"/>
                </Animated.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() =>navigation.navigate('Cafe')}>
                <Animated.View style={[Estilo.Button,Estilo.Secondary,CafeDaManhaStyle]}>
                    <CafeDaManhaIcone name="breakfast-dining"size={50}color="#F02A4B"/>
                </Animated.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => {toogleMenu()}}>
                <Animated.View style={[Estilo.Button,Estilo.Menu, rotation]}>
                    <NovoIcone name='plus' color='#FFF' size={30} />
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const Estilo = StyleSheet.create({
    Container: {
        position: 'absolute',
        alignItems: 'center'     
    },
    Button: {
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 60/2,
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius: 10,
        shadowColor: '#F02A4B',
        shadowOpacity: 0.3,
        shadowOffset: {height: 10},
    },
    Menu: {
        backgroundColor: '#F02A4B',
    },
    Secondary: {
        width: 48,
        height: 48,
        borderRadius: 48/2,
        backgroundColor: '#FFF',
    }
})

export default ButtonNew;
