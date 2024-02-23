/* This file has been downloaded from rnexamples.com */
/* If You want to help us please go here https://www.rnexamples.com/help-us */
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const ProfileCards = () => {
  const items = [
    {
      avatar: "https://www.bootdey.com/img/Content/avatar/avatar3.png",
      coverPhoto: "https://www.bootdey.com/image/280x280/FF00FF/FF00FF",
      name: "John Smith"
    },
    {
      avatar: "https://www.bootdey.com/img/Content/avatar/avatar4.png",
      coverPhoto: "https://www.bootdey.com/image/280x280/00FFFF/00FFFF",
      name: "John Smith"
    },
    {
      avatar: "https://www.bootdey.com/img/Content/avatar/avatar5.png",
      coverPhoto: "https://www.bootdey.com/image/280x280/8A2BE2/8A2BE2",
      name: "John Smith"
    },
    {
      avatar: "https://www.bootdey.com/img/Content/avatar/avatar6.png",
      coverPhoto: "https://www.bootdey.com/image/280x280/FF7F50/FF7F50",
      name: "John Smith"
    },
    {
      avatar: "https://www.bootdey.com/img/Content/avatar/avatar7.png",
      coverPhoto: "https://www.bootdey.com/image/280x280/DC143C/DC143C",
      name: "John Smith"
    },
    {
      avatar: "https://www.bootdey.com/img/Content/avatar/avatar8.png",
      coverPhoto: "https://www.bootdey.com/image/280x280/008B8B/008B8B",
      name: "John Smith"
    }
  ];
  
  const renderItem = ({item}) => {
    return(
    <TouchableOpacity style={styles.itemContainer}>
      <Image source={{ uri: item.coverPhoto }} style={styles.coverPhoto} />
      <View style={styles.avatarContainer}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <Text style={styles.name}>{item.name}</Text>
      </View>
    </TouchableOpacity>

    )
  }

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    marginBottom:20,
    shadowColor: '#cccccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginHorizontal:20,
    backgroundColor: '#fff',
    borderRadius:10,
    paddingBottom:20
  },
  coverPhoto: {
    width: '100%',
    height: 60,
    resizeMode: 'cover',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: -35,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 5,
    borderColor: 'white',
  },
  name: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
});


export default ProfileCards;
