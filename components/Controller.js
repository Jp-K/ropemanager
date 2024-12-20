import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const {width, height} = Dimensions.get('window');
import base64 from 'react-native-base64'

export default Controller = ({ route }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const { confirmCharacteristic, ssidCharacteristic, passwordCharacteristic } = route.params;

    const clickEventListener = async item => {
        console.log(item);
        try {
          // Enviar SSID
          const encodedSSID = base64.encode("ssid novo");
          await ssidCharacteristic.writeWithoutResponse(encodedSSID);
    
          // Enviar Senha
          const encodedPassword = base64.encode("senha nova");
          await passwordCharacteristic.writeWithoutResponse(encodedPassword);
    
          // Confirmar
          const encodedConfirm = base64.encode(item);
          await confirmCharacteristic.writeWithoutResponse(encodedConfirm);
    
        } catch (error) {
          console.error(error);
        }
      }

    return (
        <View style={styles.container}>
            <View style={styles.crossCenter}>
                <TouchableOpacity style={[styles.button, styles.buttonA, styles.crossTop]} onPress={() => clickEventListener('F')}>
                    <Icon name="arrow-upward" style={styles.arrow} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.buttonB, styles.crossBottom]} onPress={() => clickEventListener('G')}>
                    <Icon name="arrow-downward" style={styles.arrow} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.buttonX, styles.crossRight]} onPress={() => clickEventListener('R')}>
                    <Icon name="arrow-forward" style={styles.arrow} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.buttonY, styles.crossLeft]} onPress={() => clickEventListener('L')}>
                    <Icon name="arrow-back" style={styles.arrow} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.crossCircle]} onPress={() => clickEventListener('F')}>
                    <Icon name="play-arrow" style={styles.arrow} />
                    {/* <Text style={styles.buttonText}>Play</Text> */}
                </TouchableOpacity>
            </View>
            <View style={styles.card}>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.buttonBar}>
                    <Text style={styles.buttonText}>Atualizar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonBar}>
                    <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ebf0f7',
    },
    card: {
    shadowColor: '#00000021',
    shadowOffset: {
        width: 0,
        height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    borderRadius: 30,
    },
    crossCenter: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: (width-40)/2,
        paddingVertical: (height-400)/2,
        width: 400,
        height: 400,
        shadowColor: '#00000021',
        shadowOffset: {
        width: 0,
        height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        borderRadius: 45,
        backgroundColor: '#FFF'
    },
    crossTop: {
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 280,
        position: 'absolute',
    },
    crossBottom: {
        alignItems: 'center',
        justifyContent: 'center',
        top: 280,
        position: 'absolute',
    },
    crossLeft: {
        alignItems: 'center',
        justifyContent: 'center',
        right: 260,
        position: 'absolute',
    },
    crossRight: {
        alignItems: 'center',
        justifyContent: 'center',
        left: 260,
        position: 'absolute',
    },
    crossCircle: {
        // backgroundColor: '#333333',
        backgroundColor: '#00A97A',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
    },
    header: {
        fontSize: 28,
        fontWeight: '800',
        color: '#999',
        textAlign: 'center',
        lineHeight: 30,
      },
      buttons: {
        width: '80%',
        alignItems: 'center',
      },
      hr: {
        width: '100%',
        height: 1,
        backgroundColor: '#000',
        marginVertical: 20,
      },
      buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
      },
      button: {
        borderRadius: 20,
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonText: {
        color: '#FFF',
        fontWeight: '600',
        fontSize: 24,
      },
      buttonA: {
        //backgroundColor: '#ED1D29',
        backgroundColor: '#025AC9',
      },
      buttonB: {
        //backgroundColor: '#FF6400',
        backgroundColor: '#D16002',
      },
      buttonX: {
        //backgroundColor: '#025AC9',
        backgroundColor: '#ED1D29',
      },
      buttonY: {
        backgroundColor: '#FFB930',
      },
      buttonAxes: {
        backgroundColor: '#222',
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
      },
      arrow: {
        color: '#FFF',
        fontWeight: '600',
        fontSize: 24,
      },
      buttonBar: {
        backgroundColor: '#BAB9B9',
        width: 120,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
      },
});