import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Home({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button
            // onPress={() => navigation.navigate('Notifications')}
            title="Go to notifications"
          />
        </View>
      );
}

const styles = StyleSheet.create({})