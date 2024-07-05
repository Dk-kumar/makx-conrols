import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons, Feather } from '@expo/vector-icons';

interface HeaderProps {
  username: string;
}

const Header : React.FC<HeaderProps> = ({username}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{username}</Text>
      <View style={styles.childHeader}>
        <Feather name="home" style={styles.icon} size={24} color="black" />
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
  },
  childHeader: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon:{
    marginRight: 15
  }
});

export default Header;
