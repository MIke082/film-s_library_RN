import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveFromFavorite } from '../store/action';

const Cart = () => {
    const filmFavorite = useSelector(state => state.isFavoriteReducer);
    const dispatch = useDispatch();
    const navigation = useNavigation();


    const renderItem = ({ item }) => (

        <View style={styles.mainView}>
            {item !== '' ?
                <View style={styles.imgView}>
                    <View >
                        <Image
                            style={styles.img}
                            source={{ uri: `https://image.tmdb.org/t/p/w500/` + item.backdrop_path }}
                            alt='img'
                        />
                    </View>
                    <View style={styles.nameOfFilm}>
                        <Text style={styles.nameOfFilmText}>Name of film: {item.original_title}</Text>
                        <View style={styles.description}>
                            <Text
                                numberOfLines={3}
                                style={styles.descriptionText}> OverView: {item.overview}</Text>
                        </View>
                        <Text style={styles.rating}> Rating: {item.vote_average}</Text>
                    </View>
                    <View style={styles.btnView}>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => dispatch(RemoveFromFavorite(item))} >
                            <Text>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                :
                <View>
                    <Text>Cart is empty!</Text>
                </View>
            }

        </View>
    );
    return (
        <View>
            <FlatList
                data={filmFavorite}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
            <View style={styles.btnViewToHomePage}>
                <TouchableOpacity
                    style={styles.btnToHomePage}
                    onPress={() => navigation.navigate('HomePage')}>
                    <Text style={styles.btnText}>Back to main page</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        marginTop: 25
    },
    imgView: {
        flexDirection: 'row',
        margin: 5,
        marginTop: 10,
    },
    img: {
        width: 150,
        height: 100,
    },
    nameOfFilm: {
        width: 180,
        justifyContent: 'center',
        marginLeft: 5
    },
    nameOfFilmText: {
        fontSize: 12,

        fontWeight: 'bold'
    },
    description: {

        textAlign: 'center',
        marginTop: 5
    },
    descriptionText: {
        fontSize: 10,
    },
    rating: {
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 5
    },
    btnView: {
        flexDirection: 'column',
        backgroundColor: '#f10000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        width: 50
    },
    btn: {
        color: 'white'
    },

    btnViewToHomePage: {
        alignItems: 'center',
        marginTop: 40,
    },
    btnToHomePage: {
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

export default Cart;