import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');


export default Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: 'Aperte e segure ambos os botões laterais do RoPE por 3 segundos',
      content: 'Passo 1',
      image: 'https://www.bootdey.com/image/90x90/8A2BE2/000000',
    },
    {
      title: 'Espere o sinal de que o bluetooth foi ligado',
      content: 'Passo 2',
      image: 'https://www.bootdey.com/image/90x90/FF7F50/000000',
    },
    {
      title: 'Procure o dispositivo na listagem e clique para se conectar',
      content: 'Passo 3',
      image: 'https://www.bootdey.com/image/90x90/00FFFF/000000',
    },
    {
        title: 'Adicione SSID e SENHA da rede desejada',
        content: 'Passo 4',
        image: 'https://www.bootdey.com/image/90x90/00FFFF/000000',
    },
    {
        title: 'Pronto! seu dispositivo já está conectado a internet',
        content: 'Passo 5',
        image: 'https://www.bootdey.com/image/90x90/00FFFF/000000',
    },
  ];

  return (
    <View style={styles.carouselContainer}>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          const x = event.nativeEvent.contentOffset.x;
          const index = Math.floor(x / (width - 60));
          if (index !== activeIndex) {
            setActiveIndex(index);
          }
        }}
        scrollEventThrottle={16}
      >
        {items.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Image source={{uri: item.image}} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.content}>{item.content}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.dotContainer}>
        {items.map((_, index) => (
          <TouchableOpacity key={index} onPress={() => setActiveIndex(index)}>
            <View
              style={[
                styles.dot,
                { backgroundColor: index === activeIndex ? '#3399ff' : 'gray' },
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    position: 'absolute',
    top: 100,
    //alignItems: 'center',
    //justifyContent: 'center',
    height:400,
  },
  itemContainer: {
    width: width - 60,
    height: height / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  image: {
    width: '80%',
    height: '30%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  textContainer: {
    width: '100%',
    height: '60%',
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 10,
    position: 'absolute',
    bottom: 80,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    bottom: 0,
    marginBottom: 5,
  },
  content: {
    fontSize: 14,
    textAlign: 'center',
  },
  dotContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
  },
  dot: {
    width: 15,
    height: 15,
    borderRadius: 10,
    margin: 5,
    borderWidth:1
  },
});