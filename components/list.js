import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import { useState } from 'react';

const larguraDaTela = Dimensions.get('window').width;

export default function List() {

    const [lista, setLista] = useState([{id: 1, nome: 'aaaaaaa', bateria: 40}, {id: 2, nome: 'bbbbbb', bateria: 50}]);

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <View style={styles.column}>
                <Text style={styles.label}>Nome:</Text>
                <Text>{item.nome}</Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.label}>Bateria:</Text>
                <Text>{item.bateria}</Text>
            </View>
        </View>
      );

    return (
        <View style={styles.container}>
            <FlatList
                data={lista}
                renderItem={renderItem}
                keyExtractor={item => item.id} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
    width: larguraDaTela,
  },
  item: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: larguraDaTela,
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10,
  },
  label: {
    fontWeight: 'bold',
  },
});