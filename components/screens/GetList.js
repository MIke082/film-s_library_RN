import React, { useEffect, useState } from 'react';
import { Button, View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { getDataCreater } from '../store/action';
import CardList from './CardList';

const GetList = (props) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        props.getList();
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
                        {props.list && props.list.map((item, index) => <CardList item={item} key={index} />)}
                    </View>}
            </View>
        </ScrollView>
    );
};

const mapStateToProps = (state) => {
    return {
        list: state.listReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getList: () => {
            dispatch(getDataCreater())
        }
    }
}
const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        marginTop: 20
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(GetList);