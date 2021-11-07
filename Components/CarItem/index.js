import React,{useState} from 'react'
import { View ,Text, ImageBackground,Image,TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './styles'

const CarItem = () => {
    const [locked,setLocked] = useState(true)
    const clickLock = () => {
        if(locked){
            setLocked(false)
        }else{
            setLocked(true)
        }
    }
    return (
        <View style={styles.carContainer}>
            <ImageBackground 
            source={require('../../assets/background.png')}
            style={styles.backgroundimage}
            />
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity>
                <FontAwesome5 name="cog" size={34} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Tesla App</Text>
                <TouchableOpacity>
                <FontAwesome5 name="toolbox" size={34} color="white" />

                </TouchableOpacity>
            </View>
            {/* mileage */}
            <View style={styles.batterySection}>
                <Image
                source={require('../../assets/battery.png')}
                style={styles.batteryImage}
                />
                <Text style={styles.batteryText}>150 mi</Text>
            </View>
            {/* satuts */}
            <View style={styles.status}>
                <Text style={styles.statusText}>Parked</Text>
            </View>
            <View style={styles.controls}>
                <TouchableOpacity>
                    <View style={styles.controlsButton}>
                        <FontAwesome5 name="fan" size={34} color="white" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.controlsButton}>
                        <FontAwesome5 name="key" size={34} color="white" /> 
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={clickLock}
                >
                    <View style={styles.controlsButton}>
                        <FontAwesome5 name={locked ? "lock" : "unlock-alt"} size={34} color="white" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default CarItem;
