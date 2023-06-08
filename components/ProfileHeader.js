import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import React from 'react';
import { globalStyles } from '../global';
import MaskedView from '@react-native-masked-view/masked-view';
import downloadFile from '../customHook/downloadImage';
 

 
const ProfileHeader = ({ isUser, user }) => {    
    const saveProfilePic = (uri) => {
        Alert.alert(           
            'Save picture',
            `You want to save ${user.name.first} ${user.name.last} profile picture on phone ?`,
            [
              { text: 'Yes', onPress: () => downloadFile(uri)},
              {
                text: 'No',
                onPress: () => console.log('No Pressed'),
              },
            ],
            { cancelable: false }
          );
    }
    return (  
        <>
        { !isUser 
            ? 
            <View style={styles.headerContainer}>        
                <Text style={styles.text}>Random People</Text>
            </View>  
            : 
            <View style={styles.headerContainerLG}>
                {/* long press profile picture to save to phone*/}
                <TouchableOpacity 
                    style={globalStyles.roundedXLG} 
                    onLongPress={() => saveProfilePic(user.picture.large)}
                >
                    { !user.picture 
                        ? <Entypo name="user" size={32} color="black" />
                        : <Image 
                            source={{uri: user.picture.large}} 
                            style={{width: "100%", height: "100%"}}
                            resizeMode={'cover'}
                        />
                    }
                </TouchableOpacity>
                <MaskedView
                style={{ flex: 1, flexDirection: 'row', height: '100%' }}
                maskElement={
                    <View
                        style={{
                            // Transparent background because mask is based off alpha channel.
                            backgroundColor: 'transparent',
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Text
                            style={{
                            fontSize: 24,
                            color: 'black',
                            }}
                        >
                            {user.name.first} {user.name.last}
                        </Text>
                    </View>
                }
                >
                    {/* Shows behind the mask, you can put anything here, such as an image */}
                    <View style={{ flex: 1, height: '100%', backgroundColor: '#324376' }} />
                    <View style={{ flex: 1, height: '100%', backgroundColor: '#F5DD90' }} />
                    <View style={{ flex: 1, height: '100%', backgroundColor: '#F76C5E' }} />
                    <View style={{ flex: 1, height: '100%', backgroundColor: '#e1e1e1' }} />
                </MaskedView>
            </View>
        }

        </>
    )
}

export default ProfileHeader;

const styles = StyleSheet.create({
    headerContainer: {
        height: 120,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderBottomWidth: 2,
        borderBottomColor: "#ccc",
        paddingTop: 40
    },

    headerContainerLG: {
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderBottomWidth: 2,
        borderBottomColor: "#ccc",
        paddingTop: 40
    },

    text: {
        fontSize:22,
        fontWeight: 800,
    }
})