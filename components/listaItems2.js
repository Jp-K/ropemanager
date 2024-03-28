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

import base64 from 'react-native-base64'

const serviceUUIDRoPE = "4fafc201-1fb5-459e-8fcc-c5c9c331914b";
const characteristicUUIDRoPE = "beb5483e-36e1-4688-b7f5-ea07361b26a8";
const CHARACTERISTIC_SSID_UUID = "6820d2bc-3510-47ce-a233-f9def48b718e";
const CHARACTERISTIC_PASSWORD_UUID = "44c5b623-f69f-42d7-a14e-ae644ebe8e4d";

export default UserListView = () => {

  const [devices, setDevices] = useState([]);
  const [manager] = useState(new BleManager());

  const connectToDevice = (device) => {
    return device
      .connect()
      .then((device) => {
        //setDeviceID(device.id);
        //setConnectionStatus("Connected");
        //deviceRef.current = device;
        return device.discoverAllServicesAndCharacteristics();
      })
      .then((device) => {
        return device.services();
      })
      .then((services) => {
        let service = services.find((service) => service.uuid === serviceUUIDRoPE);
        return service.characteristics();
      })
      .then(async (characteristics) => {
        console.log(characteristics);
        let confirmCharacteristic = characteristics.find(
          (char) => char.uuid === characteristicUUIDRoPE
        );

        let ssidCharacteristic = characteristics.find(
          (char) => char.uuid === CHARACTERISTIC_SSID_UUID
        );

        let passwordCharacteristic = characteristics.find(
          (char) => char.uuid === CHARACTERISTIC_PASSWORD_UUID
        );

        var encoded = base64.encode("ssid novo");
        await ssidCharacteristic.writeWithoutResponse(encoded);

        var encoded = base64.encode("senha nova");
        await passwordCharacteristic.writeWithoutResponse(encoded);

        var encoded = base64.encode("A");
        await confirmCharacteristic.writeWithoutResponse(encoded);
        // writeWithoutResponse
      })
      .catch((error) => {
        console.log(error);
        setConnectionStatus("Error in Connection");
      });
  };


  const onPressedItem = (item) => {
    connectToDevice(item);
  }

  useEffect(() => {

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
              if (device.serviceUUIDs) {
                if (device.serviceUUIDs.includes('4fafc201-1fb5-459e-8fcc-c5c9c331914b')) {
                  if (!devices.some(el => el.id === device.id)) {
                    setDevices(prevDevices => {
                      if (prevDevices.some(prevDevice => prevDevice.id === device.id)) {
                        return prevDevices.map(prevDevice => {
                          if (prevDevice.id === device.id) {
                            return device;
                          }
                          return prevDevice;
                        });
                      }
                      return [...prevDevices, device];
                    });
                  }
                }
              }

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
  const [users, setUsers] = useState(data);

  showAlert = () => Alert.alert('Alert', 'Button pressed ' )
  //console.log(devices)
  return (
    <FlatList
      enableEmptySections={true}
      data={devices}
      keyExtractor={item => item.id}
      renderItem={({ item }) => {
        return (
          <View style={styles.box}>
            <Image style={styles.image} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar5.png' }} />
            <View style={styles.boxContent}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.description}>{item.id}</Text>
              <View style={styles.buttons}>
                <TouchableOpacity
                  style={[styles.button, styles.view]}
                  onPress={() => onPressedItem(item)}>
                  <Image
                    style={styles.icon}
                    source={{ uri: 'https://img.icons8.com/color/70/000000/filled-like.png' }}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.button, styles.profile]}
                  onPress={() => onPressedItem(item)}>
                  <Image
                    style={styles.icon}
                    source={{ uri: 'https://img.icons8.com/color/70/000000/cottage.png' }}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.button, styles.message]}
                  onPress={() => onPressedItem(item)}>
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
