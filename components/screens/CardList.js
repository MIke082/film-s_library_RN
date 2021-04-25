import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Entypo } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { AddFavorite, RemoveFromFavorite } from '../store/action';

const CardList = ({ item, index }) => {
    const navigation = useNavigation();
    const [fav, setFav] = useState(false);

    const dispatch = useDispatch();
    return (
        <View key={index}>
            <View style={styles.like}>
                {fav ?
                    <Entypo name='heart' size={32} color='red' onPress={() => dispatch(RemoveFromFavorite(item)) ? setFav(false) : setFav(false)} />
                    :
                    <Entypo name='heart-outlined' size={32} color='black' onPress={() => dispatch(AddFavorite(item)) ? setFav(true) : setFav(false)} />
                }
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Card', { item: item })}>

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
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    imgView: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 350,
        height: 200,
    },
    like: {
        alignItems: 'flex-end',
        marginRight: 10,
        marginBottom: 5
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
    }
})
export default CardList;