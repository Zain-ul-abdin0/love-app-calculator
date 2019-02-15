import React , {Component} from 'react';
import {View , Text} from 'react-native';
import Home from './Home'
import {createStackNavigator} from 'react-navigation'
import Gender from './Gender'
import Main from './Main'

export default class App extends Component {
    
    
    render(){
        return (
            <View style ={{flex:1, backgroundColor: '#AE0000'}}>
           <View style = {{flex:1}}>
           <AppStack/>
           </View>
           </View>
            );

        }
    }

    const AppStack = createStackNavigator({
        Home : Home ,
        Gender : Gender,
        Main : Main,
    })