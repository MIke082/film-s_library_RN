import React from 'react';
import { View } from 'react-native';
import Header from './Header';
import GetList from './GetList';

const HomePage = () => {

    return (
        <View>
            <Header />
            <GetList />
        </View>
    );
};

export default HomePage;