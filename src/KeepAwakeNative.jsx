import { Component, createElement } from "react";
import React from 'react';
import { View, Text, Button } from 'react-native';
import  KeepAwake from 'expo-keep-awake';
import { activateKeepAwake, deactivateKeepAwake } from 'expo-keep-awake';

export class KeepAwakeNative extends Component {
    render() {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={this._activate} title="Activate">Activate</Button>
            <Button onPress={this._deactivate} title="Deactivate">Deactivate</Button>
          </View>
        );
      }
    
      _activate = () => {
        activateKeepAwake();
        };
    
      _deactivate = () => {
        deactivateKeepAwake();
        };

} 
