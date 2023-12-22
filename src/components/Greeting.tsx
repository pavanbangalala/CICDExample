import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const Greeting = () => {
  const [name, setName] = useState('');
  return (
    <View style={styles.container}>
      <TextInput placeholder="person" value={name} onChangeText={setName} />
      <Text>{`Welcome ${name} `}</Text>
    </View>
  );
};

export default Greeting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
