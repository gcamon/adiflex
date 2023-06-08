import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import ProfileHeader from "../components/ProfileHeader";
import axios from 'axios';
import ListUser from '../components/ListUser';
import { useDispatch } from 'react-redux';
import { setUser } from '../slices/userSlice';

const UserScreen = () => {
    const [refreshing, setRefreshing] = useState(false);
    const [users, fetchedUsers] = useState([]);  
    const dispatch = useDispatch();

    const getUsers = async () => {
        try {
            const url = 'https://randomuser.me/api/';
            const response = await axios.get(url) 
            const { results } = response.data; 
            console.log(results)  
            fetchedUsers(results)  
            dispatch(setUser(results[0]))          
        } 
        catch(err) {
            console.log(err)
        }
        setRefreshing(false)
    }

    useEffect(() => {
        getUsers()
        setRefreshing(true)
    },[])

    const onRefresh = () => {
        setRefreshing(true)
        getUsers()
    }

    return (
        <SafeAreaView>
            <ProfileHeader/>
            <FlatList
            data={users} 
            showsVerticalScrollIndicator={false}
            onRefresh={onRefresh}
            refreshing={refreshing}
            style={{marginBottom: 150}}
            keyExtractor={(item, index) => index}
            renderItem={({item}) => (
                <ListUser user={item}/>
            )}
            />
        </SafeAreaView>   
    )
}

export default UserScreen

const styles = StyleSheet.create({
})