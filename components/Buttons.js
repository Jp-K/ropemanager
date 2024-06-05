import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Buttons = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>HTML5{'\n'}GAMEPAD{'\n'}API</Text>

      <View style={styles.buttons}>
        <View style={styles.hr} />

        <View style={styles.buttonRow}>
          <TouchableOpacity style={[styles.button, styles.buttonA]}>
            <Text style={styles.buttonText}>A</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonB]}>
            <Text style={styles.buttonText}>B</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonX]}>
            <Text style={styles.buttonText}>X</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonY]}>
            <Text style={styles.buttonText}>Y</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.hr} />

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonAxes}>
            <Icon name="arrow-upward" style={styles.arrow} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonAxes}>
            <Icon name="arrow-downward" style={styles.arrow} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonAxes}>
            <Icon name="arrow-back" style={styles.arrow} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonAxes}>
            <Icon name="arrow-forward" style={styles.arrow} />
          </TouchableOpacity>
        </View>

        <View style={styles.hr} />

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonBar}>
            <Text style={styles.buttonText}>BL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBar}>
            <Text style={styles.buttonText}>BR</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.hr} />

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonBarMini}>
            <Text style={styles.buttonText}>SELECT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBarMini}>
            <Text style={styles.buttonText}>START</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.hr} />

        <View style={styles.status}>
          <Text style={styles.statusText}>NOT CONNECTED</Text>
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
    backgroundColor: '#BAB9B9',
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 20,
  },
  buttonA: {
    backgroundColor: '#ED1D29',
  },
  buttonB: {
    backgroundColor: '#FFB930',
  },
  buttonX: {
    backgroundColor: '#025AC9',
  },
  buttonY: {
    backgroundColor: '#00A97A',
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
    color: '#999',
    fontSize: 20,
  },
  buttonBar: {
    backgroundColor: '#BAB9B9',
    width: 80,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonBarMini: {
    backgroundColor: '#222',
    width: 80,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  status: {
    marginTop: 20,
  },
  statusText: {
    color: '#999',
    fontSize: 16,
  },
});

export default Buttons;