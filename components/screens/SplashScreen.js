import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SignInWithGoogle from './SignInWithGoogle';
import SignInWithFacebook from './SignInWithFacebook';
import { FontAwesome } from '@expo/vector-icons';

const SplashScreen = () => {

    return (
        <>
            <View style={styles.mainView}>
                <View style={styles.nameOfUser}>
                    <Text style={styles.nameOfUserText}>Welcome Stranger!</Text>
                </View>
                <FontAwesome name='user-circle' size={140} color='#dcdcdc' />
                <Text style={styles.text}>Please log in to continue to the awesomness</Text>

            </View>
            <View style={styles.components}>
                <SignInWithFacebook />
                <SignInWithGoogle />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    nameOfUser: {
        marginBottom: 50
    },
    nameOfUserText: {
        fontSize: 25
    },
    text: {
        marginTop: 40,
        width: 200,
        fontSize: 17,
        color: 'grey',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    components: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20
    }
})

export default SplashScreen;