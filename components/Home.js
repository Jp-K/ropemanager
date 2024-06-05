import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Alert, Linking } from 'react-native'

const images = [
  {
    uri: require('../assets/IconDispositivos.png')
  },
  { 
    uri: require('../assets/IconTutorial.png')
  },
  { 
    uri: require('../assets/IconLoja.png')
  },
  { 
    uri: require('../assets/IconSobre.png')
  },
  { 
    uri: require('../assets/IconProblemas.png')
  },
]

export default OptionList = ({ navigation }) => {

  const data = [
    {
      id: 1,
      name: 'Dispositivos',
      //image: 'https://img.icons8.com/external-phatplus-lineal-phatplus/64/external-robot-android-phatplus-lineal-phatplus-3.png',
      subtext: "Procure por dispositivos na sua área",
      page: 'List',
    },
    {
      id: 2,
      name: 'Tutorial',
      //image: 'https://img.icons8.com/external-phatplus-lineal-color-phatplus/64/000000/external-robot-android-phatplus-lineal-color-phatplus-4.png',
      subtext: "Aprenda a utilizar e \n a conectar seus dispositivos",
      page: 'Tutorial',
    },
    {
      id: 3,
      name: 'Encomende o seu',
      //image: 'https://img.icons8.com/external-phatplus-lineal-phatplus/64/external-robot-android-phatplus-lineal-phatplus-5.png',
      subtext: "Encomende um RoPE hoje mesmo",
      //link: 'https://smartfunbrasil.com/#kits',
      page: 'Buttons'
    },
    {
      id: 4,
      name: 'Sobre',
      //image: 'https://img.icons8.com/external-phatplus-lineal-phatplus/64/external-robot-android-phatplus-lineal-phatplus.png',
      subtext: "Informações adicionais",
      //link: 'https://smartfunbrasil.com/',
      page: 'Controller'
    },
    {
      id: 5,
      name: 'Problemas',
      //image: 'https://img.icons8.com/external-phatplus-lineal-phatplus/64/external-robot-android-phatplus-lineal-phatplus-5.png',
      subtext: "Solucionamento de problemas \n e FAQ",
      link: 'https://api.whatsapp.com/send?phone=5547984031153&text=Ol%C3%A1%20estou%20com%20problemas%20sobre%20o%20RoPE',
    },
  ]

  const [options, setOptions] = useState(data)

  const clickEventListener = item => {
    //Alert.alert('Message', 'Item clicked. ' + item.name)
    if (item.link) {
      Linking.openURL(item.link);
    } else {
      navigation.navigate(item.page);
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.contentList}
        columnWrapperStyle={styles.listContainer}
        data={options}
        keyExtractor={item => {
          return item.id
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.card} onPress={() => clickEventListener(item)}>
              <Image style={styles.image} source={images[item.id-1].uri} />
              <View style={styles.cardContent}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.subtext}>{item.subtext}</Text>
                <TouchableOpacity
                  style={styles.followButton}
                  onPress={() => clickEventListener(item)}>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#ebf0f7',
  },
  contentList: {
    flex: 1,
  },
  cardContent: {
    marginLeft: 20,
    marginTop: 10,
  },
  image: {
    width: 90,
    height: 90,
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

  name: {
    fontSize: 18,
    flex: 1,
    color: '#3399ff',
    fontWeight: 'bold',
  },
  subtext: {
    fontSize: 12,
    flex: 1,
    color: '#6666ff',
  },
  followButton: {
    marginTop: 10,
    height: 35,
    width: 100,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: 'white',
    borderWidth: 0,
    borderColor: '#dcdcdc',
  },
  followButtonText: {
    color: '#dcdcdc',
    fontSize: 12,
  },
})
