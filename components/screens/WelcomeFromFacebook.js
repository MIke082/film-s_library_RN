import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const WelcomeFromFacebook = ({ route }) => {
    const { userData } = route.params;
    const navigation = useNavigation()

    return (
        <View style={styles.mainView}>
            <Text style={styles.textWelcome}>Welcome, {userData.name}</Text>
            <Image
                style={styles.img}
                source={{ uri: userData.picture.data.url }}
                alt='img'
            />
            <TouchableOpacity
                style={styles.btn} onPress={() =>
                    navigation.navigate('HomePage')}>
                <Text style={styles.btnText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    img: {
        height: 150,
        width: 150,
        borderRadius: 80
    },
    textWelcome: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    btn: {
        flexDirection: 'row',
        backgroundColor: '#3b5998',
        width: 190,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10

    },
    btnText: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        marginHorizontal: 7

    }
})

export default WelcomeFromFacebook;