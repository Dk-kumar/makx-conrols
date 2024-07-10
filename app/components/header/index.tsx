import React from "react";
import { View, Text } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { headerStyles } from "./style";

interface HeaderProps {
  username: string;
}

const Header: React.FC<HeaderProps> = ({ username }) => {
  return (
    <View style={headerStyles.header}>
      <View style={{paddingRight: 16}}>
        <Feather
          name="arrow-left"
          style={headerStyles.icon}
          size={24}
          color="black"
        />
      </View>
      <Text style={headerStyles.title}>{username}</Text>
      <View style={headerStyles.childHeader}>
        <Feather
          name="home"
          style={headerStyles.icon}
          size={24}
          color="black"
        />
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>
    </View>
  );
};

export default Header;
