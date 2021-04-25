import React, { useEffect, useState } from 'react';
import { Button, View, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getDataCreater } from '../store/action';
import CardList from './CardList';

const GetList = () => {
    const [visible, setVisible] = useState(true);

    const list = useSelector(state => state.listReducer);
    const dispatch = useDispatch();
    
    const GetList = () =>  dispatch(getDataCreater())

    useEffect(() => {
        GetList()
    }, [])

    return (
        <ScrollView>
            <View>
                {visible === true ?
                    <View style={styles.btn}>
                        <Button title='List of films' color='grey' onPress={() => setVisible(false)} />
                    </View> :
                    <View style={styles.btn}>
                        <Button title='List of films' onPress={() => setVisible(true)} />
                        {list && list.map((item, index) => <CardList item={item} key={index} />)}
                    </View>}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        marginTop: 20
    }
})

export default GetList;