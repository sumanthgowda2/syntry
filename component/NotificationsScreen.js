import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function NotificationsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button 
        //   onPress={() => navigation.goBack()} 
          title="Go back home" />
        </View>
      );
}

const styles = StyleSheet.create({})