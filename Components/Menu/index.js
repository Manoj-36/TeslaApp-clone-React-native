import React from 'react'
import { View ,Text, ImageBackground,Image,TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import styles from '../Menu/styles';
import items from "./items"


const Menu = () => {
    return (
        <View style={styles.menuItem}>
            {items.map(item => (
                 <TouchableOpacity key={item.id}>
                 <View style={styles.menuRow}>
                     <FontAwesome5 name={item.icon} size={24} color="white" />
                     <View style={styles.menuTextBox}>
                        <Text style={styles.menuText}>{item.title}</Text>
                        {item.subTitle && (
                            <Text style={styles.subTitle}>{item.subTitle}</Text>
                        )}
                     </View>
                     <FontAwesome5 name="chevron-right" size={24} color="gray" />
                 </View>
             </TouchableOpacity>
            ))}
           
        </View>
    )
}

export default Menu;