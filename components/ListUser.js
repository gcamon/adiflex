import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { globalStyles } from '../global';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';

const ListUser = ({ user }) => {

  const navigation = useNavigation();

  const shareUser = async (user) => {
    if (!(await Sharing.isAvailableAsync())) {
        alert("Device not allow to share file")
        return;
    }

    // Create a file to be shared using native share

    const fileUri = FileSystem.cacheDirectory + "test.vcf";

    const options = {
        mimeType: 'text/x-vcard',
        dialogTitle: 'Share vcard',
        UTI: 'text/vcard',
    };
    
    //Created a temporal VCARD to be used as file to share
    const vcard = `BEGIN:VCARD
        VERSION:2.1
        N:Gump;Forrest;;${user.name.first} ${user.name.last}
        FN:Forrest Gump
        ORG:Bubba Gump Shrimp Co.
        TITLE:Shrimp Man
        PHOTO;JPG:${user.picture.medium}
        TEL;WORK;VOICE:${user.cell}
        TEL;HOME;VOICE:${user.cell}
        ADR;WORK;PREF:;;${user.location.city} ${user.location.country}
        LABEL;WORK;PREF;ENCODING=QUOTED-PRINTABLE;CHARSET=UTF-8:100 Waters Edge=0D=
        =0ABaytown\, LA 30314=0D=0AUnited States of America
        ADR;HOME:;;42 Plantation St.;Baytown;LA;30314;United States of America
        LABEL;HOME;ENCODING=QUOTED-PRINTABLE;CHARSET=UTF-8:42 Plantation St.=0D=0A=
        Baytown, LA 30314=0D=0AUnited States of America
        EMAIL:${user.email}
        REV:20080424T195243Z
        END:VCARD`;

    FileSystem.writeAsStringAsync(fileUri, vcard).then(data => {
        console.log("wrote vcard")
    }).catch(err => {
        console.log(JSON.stringify(err));
    });


    Sharing.shareAsync(fileUri, options)
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(JSON.stringify(err.message));
    })
  }


  return (
    <View style={globalStyles.card}>
        <TouchableOpacity 
            style={globalStyles.roundedLG} 
            onPress={() => navigation.navigate('User')}
        >
            { !user.picture 
                ? <Entypo name="user" size={32} color="black" />
                : <Image 
                    source={{uri: user.picture.medium}} 
                    style={{width: 50, height: 50}}
                    resizeMode={'cover'}
                />
            }
        </TouchableOpacity>
        <View style={[styles.userInfo,{paddingLeft: 10}]}>
            <Text style={styles.name}>{user.name.first} {user.name.last}</Text>
            <Text style={styles.locationText}>{user.location.city}, {user.location.country}</Text>
        </View>
        <TouchableOpacity style={globalStyles.roundedSM} onPress={() => shareUser(user)}>
            <Ionicons name="share-social" size={28} color="gray" />
        </TouchableOpacity>
    </View>
  )
}

export default ListUser

const styles = StyleSheet.create({
    name: {
        fontSize: 18
    },
    locationText: {
        color:"gray"
    }
})