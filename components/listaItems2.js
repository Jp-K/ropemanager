/* This file has been downloaded from rnexamples.com */
/* If You want to help us please go here https://www.rnexamples.com/help-us */
import React, {  useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  FlatList,
  TouchableOpacity,
  PermissionsAndroid,
  Platform
} from 'react-native';
import { BleManager } from 'react-native-ble-plx';


export default UserListView = () => {

  useEffect(() => {
      const manager = new BleManager();

      const checkBluetoothPermission = async () => {
        if (Platform.OS === 'android') {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Permissão Bluetooth',
              message:
                'O aplicativo precisa de permissão para acessar a localização para encontrar dispositivos Bluetooth.',
              buttonNeutral: 'Pergunte-me depois',
              buttonNegative: 'Cancelar',
              buttonPositive: 'OK',
            }
          );

          if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
            console.error('Permissão Bluetooth não concedida.');
            return;
          }
        } else if (Platform.OS === 'ios') {
          const bluetoothPermission = await manager.checkState('bluetooth');

          if (bluetoothPermission !== 'PoweredOn') {
            Alert.alert(
              'Permissão Bluetooth',
              'Por favor, ative o Bluetooth para encontrar dispositivos.',
              [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
              ],
              { cancelable: false }
            );
            return;
          }
        }

        manager.onStateChange((state) => {
          if (state === 'PoweredOn') {
            manager.startDeviceScan(null, null, (error, device) => {
              if (error) {
                console.error(error);
                return;
              }
              console.log('Device found:', device.id, device.name);
            });
          }
        }, true);
      };

      checkBluetoothPermission();

      return () => {
        manager.destroy();
      };
    }, []);
  
  const data = [
    { 
      id: 1, 
      image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      title: 'Rope 1',
      description: 'Version 1.0',
    },
    { 
      id: 2, 
      image: 'https://bootdey.com/img/Content/avatar/avatar2.png',
      title: 'Rope 2',
      description: 'Version 1.1',
    },
    { 
      id: 3, 
      image: 'https://bootdey.com/img/Content/avatar/avatar3.png',
      title: 'Rope 3',
      description: 'Version 1.0',
    },
    { 
      id: 4, 
      image: 'https://bootdey.com/img/Content/avatar/avatar4.png',
      title: 'Rope 4',
      description: 'Version 1.0',
    },
    { 
      id: 5, 
      image: 'https://bootdey.com/img/Content/avatar/avatar5.png',
      title: 'Rope 5',
      description: 'Version 1.0',
    },
  ]
  
  const [users, setUsers] = useState(data)

  showAlert = () => Alert.alert('Alert', 'Button pressed ' )

  return (
    <FlatList
      enableEmptySections={true}
      data={users}
      keyExtractor={item => item.id}
      renderItem={({ item }) => {
        return (
          <View style={styles.box}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <View style={styles.boxContent}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <View style={styles.buttons}>
                <TouchableOpacity
                  style={[styles.button, styles.view]}
                  onPress={showAlert}>
                  <Image
                    style={styles.icon}
                    source={{ uri: 'https://img.icons8.com/color/70/000000/filled-like.png' }}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.button, styles.profile]}
                  onPress={showAlert}>
                  <Image
                    style={styles.icon}
                    source={{ uri: 'https://img.icons8.com/color/70/000000/cottage.png' }}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.button, styles.message]}
                  onPress={showAlert}>
                  <Image
                    style={styles.icon}
                    source={{ uri: 'https://img.icons8.com/color/70/000000/plus.png' }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )
      }}
    />
  )
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  box: {
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  boxContent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    color: '#151515',
  },
  description: {
    fontSize: 15,
    color: '#646464',
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    height: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: 50,
    marginRight: 5,
    marginTop: 5,
  },
  icon: {
    width: 20,
    height: 20,
  },
  view: {
    backgroundColor: '#eee',
  },
  profile: {
    backgroundColor: '#1E90FF',
  },
  message: {
    backgroundColor: '#228B22',
  },
})
