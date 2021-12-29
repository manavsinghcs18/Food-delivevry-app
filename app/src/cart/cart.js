import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
const fooddescription = ({route}) => {
    return(
        <View style={styles.container}>
        <View style={styles.header}>
            <View>
                <Image style={styles.image} source={require('../../res/assets/icon.jpg')} />
            </View>
            <View>
                <TouchableOpacity style={styles.searchbar}>
                    <TextInput>Search Here.</TextInput>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                    <Image style={styles.cartimg} source={require('../../res/assets/cart.jpg')} />
                </TouchableOpacity>
            </View>
        </View>
        
        <View style={styles.boundary}/>

        <View>
            <Text>This is Cart screen</Text>
        </View>




        </View>
    );
}

export default fooddescription;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,
        marginBottom: 0,

    },

    header: {
        flexDirection: "row",
        margin: 5,

    },
    image: {

        height: 50,
        width: 50,
        borderRadius: 10
    },
    searchbar: {
        marginLeft: 20,
        marginTop: 5,
        borderColor: 'black',
        color: 'black',
        borderWidth: 1,
        width: 270,
        height: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    cartimg: {
        marginLeft: 10,
        height: 50,
        width: 50
    },
    boundary:{
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    menulist:{
        borderColor:"black",
        borderWidth:1,
        
    },
    menuimage:{
        width:350,
        height:150,
        margin:25,
        
    },
    menutext:{
        fontWeight:"bold",
        color:"black",
        width:100,
        height:20,
        fontSize:20,
        marginLeft:170
    }

})