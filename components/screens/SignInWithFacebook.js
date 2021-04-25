import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import * as Facebook from 'expo-facebook';
import { useNavigation } from '@react-navigation/native';
import { Zocial } from '@expo/vector-icons';

const SignInWithFacebook = () => {
    const navigation = useNavigation();

    async function logIn() {
        try {
            await Facebook.initializeAsync({
                appId: '603937697186395',
            });
            const {
                type,
                token
            } = await Facebook.logInWithReadPermissionsAsync({
                permissions: ['public_profile'],
            });
            if (type === 'success') {
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=name,picture`);
                const data = await response.json()
                navigation.navigate('WelcomeFromFacebook', { userData: data });
            } else {
                type === 'cancel'
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    }

    return (
        <View>

            <TouchableOpacity style={styles.btn} onPress={logIn}>
                <Zocial name='facebook' size={24} color='white' />
                <Text style={styles.btnText}>Login with facebook</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
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
});
export default SignInWithFacebook;