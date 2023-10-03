import { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TextInput, View, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { Button } from 'react-native';

export default function App() {
  const [nome, setNome] = useState();
  const [idade, setIdade] = useState();
  const [sexo, setSexo] = useState('Masculino');
  const [limite, setLimite] = useState(250);
  const [isStudent, setisStudent] = useState(false);

  function showData() {
    console.log(`Nome: ${nome}`);
    console.log(`Idade: ${idade}`);
    console.log(`Sexo: ${sexo}`);
    console.log(`Limite: ${limite}`);
    console.log(`É estudante: ${isStudent ? 'sim' : 'Não'}`);
  }

  return (
    <View style={styles.container}>
      <View style={{backgroundColor: '#FEFEFE', alignItems: 'center', padding: 20}}>
          <Text style={{textAlign: 'center', textTransform: 'uppercase', fontSize: 18, color: '#000', fontWeight: 'bold'}}>Banco Marcelino</Text>
      </View>
      <ScrollView style={{flex: 1 }}>
        <View>
          <TextInput style={styles.input} value={nome} onChangeText={ (value) => setNome(value) } placeholder="Nome"  />
          <TextInput style={styles.input} value={idade} onChangeText={ (value) => setIdade(value) } placeholder="Idade" keyboardType="numeric"/>
          <View style={styles.box_limite}>
            <Slider style={styles.slider} minimumValue={250} maximumValue={800} step={1} value={limite} onValueChange={ (value) => setLimite(value) } />
            <Text style={styles.limite}>{limite}</Text>
          </View>

          <Text style={styles.text}>Informe seu sexo: </Text>
          <Picker
            selectedValue={sexo}
            onValueChange={(itemValue) => setSexo(itemValue)}
            style={{ marginBottom: 20 }}
            accessibilityLabel="Sexo"
          >
            <Picker.Item key={1} value={'Masculino'} label={'Masculino'} />
            <Picker.Item key={2} value={'Feminino'} label={'Feminino'} />
            <Picker.Item key={3} value={'Outro'} label={'Outro'} />
          </Picker>
          
          <Text style={styles.text}>Você é estudante?</Text>
          <Switch value={isStudent} onValueChange={ (value) => setisStudent(value) } />

          <Button onPress={showData} title="Mostrar dados" style={styles.button}/>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#121212',
    fontSize: 12,
    marginBottom: 20
  },
  box_limite: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginBottom: 20
  },
  slider: {
    maxWidth: '80%',
  },
  limite: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'right',
    maxWidth: '20%'
  },
  button: {
    padding: 8,
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 20
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#000',
    marginBottom: 5
  }
});
