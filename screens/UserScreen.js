import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import { selectUser } from '../slices/userSlice';
import { useSelector } from "react-redux";
import ProfileHeader from '../components/ProfileHeader';
import { globalStyles } from '../global';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


const UserScreen = () => {
  const user = useSelector(selectUser)

  return (
    <SafeAreaView>
        <ProfileHeader isUser={true} user={user}/>
        <View style={globalStyles.card}>
            <View style={styles.userDetail}>
                <Octicons name="location" size={24} color="gray" />
                <Text style={styles.name}>{user.location.city}, {user.location.country}</Text>
            </View>           
        </View>
        <View style={globalStyles.card}>
            <View style={styles.userDetail}>
                <MaterialCommunityIcons name="email-multiple-outline" size={24} color="gray" />
                <Text style={styles.name}>{user.email}</Text>
            </View>
        </View>
        <View style={globalStyles.card}>
            <View style={styles.userDetail}>
                <MaterialCommunityIcons name="gender-male-female-variant" size={26} color="gray" />
                <Text style={styles.name}>{user.gender}</Text>
            </View>
        </View>
        <View style={globalStyles.card}>
            <View style={styles.userDetail}>
                <FontAwesome name="phone" size={24} color="gray" />
                <Text style={styles.name}>{user.cell}</Text>
            </View>
        </View>
        <View style={globalStyles.card}>
            <View style={styles.userDetail}>
                <Entypo name="address" size={24} color="gray" />
                <Text style={styles.name}>{user.location.postcode}</Text>
            </View>
        </View>
        
    </SafeAreaView>   
  )
}

export default UserScreen

const styles = StyleSheet.create({
    userDetail: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    name: {
        fontSize: 18,
        fontWeight: "600",
        color: "gray",
        marginLeft: 10
    }
})