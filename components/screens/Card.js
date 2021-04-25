import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Card = ({ route }) => {
    const { item } = route.params
    const navigation = useNavigation();

    return (
        <View style={styles.mainDiv}>
            <View style={styles.imgView}>
                <Image
                    style={styles.img}
                    source={{ uri: `https://image.tmdb.org/t/p/w500/` + item.backdrop_path }}
                    alt='img'
                />
            </View>
            <View style={styles.nameOfFilm}>
                <Text style={styles.nameOfFilmText}>Name of film: {item.original_title}</Text>
                <View style={styles.description}>
                    <Text style={styles.descriptionText}> OverView: {item.overview}</Text>
                </View>
                <Text style={styles.rating}> Rating: {item.vote_average}</Text>
            </View>
            <View style={styles.btnView}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate('HomePage')}>
                    <Text style={styles.btnText}>Back to main page</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainDiv: {
        flex: 1,
        justifyContent: 'center'
    },
    imgView: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 350,
        height: 200,
    },
    nameOfFilm: {
        marginTop: 10,
        alignItems: 'center',
    },
    nameOfFilmText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    description: {
        textAlign: 'center',
        width: 350,
        marginTop: 10
    },
    descriptionText: {
        fontSize: 17
    },
    rating: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10
    },
    btnView: {
        alignItems: 'center',
        marginTop: 30,
    },
    btn: {
        borderWidth: 1,
        borderColor: 'black',
        width: 140,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    btnText: {
        fontSize: 15,
        fontWeight: 'bold'
    }
})

export default Card;