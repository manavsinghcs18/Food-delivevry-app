import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, TextInput, ScrollView, FlatList, Button } from "react-native";
import { keyExtractor } from "react-native/Libraries/Lists/VirtualizeUtils";

const DATA = [
    {
        _id: 1,
        foodimg: require('../../res/assets/food/breakfast/1.jpg'),
        name: 'Idli Sambhar and Chutney',
        desc: 'It is a kind of south indian breakfast made up of suji, nariyal and many vegitables',
        quantity: '0',
        price: 'Rs: 120',
        discount: '20%'
    },
    {
        _id: 2,
        foodimg: require('../../res/assets/food/breakfast/2.jpg'),
        name: 'Idli Sambhar and Chutney',
        desc: 'It is a kind of south indian breakfast made up of suji, nariyal and many vegitables',
        quantity: '0',
        price: 'Rs: 120',
        discount: '20%'
    },
    {
        _id: 3,
        foodimg: require('../../res/assets/food/breakfast/3.jpg'),
        name: 'Idli Sambhar and Chutney',
        desc: 'It is a kind of south indian breakfast made up of suji, nariyal and many vegitables',
        quantity: '0',
        price: 'Rs: 120',
        discount: '20%'
    },
    {
        _id: 4,
        foodimg: require('../../res/assets/food/breakfast/4.jpg'),
        name: 'Idli Sambhar and Chutney',
        desc: 'It is a kind of south indian breakfast made up of suji, nariyal and many vegitables',
        quantity: '0',
        price: 'Rs: 120',
        discount: '20%'
    },
    {
        _id: 5,
        foodimg: require('../../res/assets/food/breakfast/5.jpg'),
        name: 'Idli Sambhar and Chutney',
        desc: 'It is a kind of south indian breakfast made up of suji, nariyal and many vegitables',
        quantity: '0',
        price: 'Rs: 120',
        discount: '20%'
    },
    {
        _id: 6,
        foodimg: require('../../res/assets/food/breakfast/6.jpg'),
        name: 'Idli Sambhar and Chutney',
        desc: 'It is a kind of south indian breakfast made up of suji, nariyal and many vegitables',
        quantity: '0',
        price: 'Rs: 120',
        discount: '20%'
    },
    {
        _id: 7,
        foodimg: require('../../res/assets/food/breakfast/7.jpg'),
        name: 'Idli Sambhar and Chutney',
        desc: 'It is a kind of south indian breakfast made up of suji, nariyal and many vegitables',
        quantity: '0',
        price: 'Rs: 120',
        discount: '20%'
    },
    {
        _id: 8,
        foodimg: require('../../res/assets/food/breakfast/8.jpg'),
        name: 'Idli Sambhar and Chutney',
        desc: 'It is a kind of south indian breakfast made up of suji, nariyal and many vegitables',
        quantity: '0',
        price: 'Rs: 120',
        discount: '20%'
    },
    {
        _id: 9,
        foodimg: require('../../res/assets/food/breakfast/9.jpg'),
        name: 'Idli Sambhar and Chutney',
        desc: 'It is a kind of south indian breakfast made up of suji, nariyal and many vegitables',
        quantity: '0',
        price: 'Rs: 120',
        discount: '20%'
    },
    {
        _id: 10,
        foodimg: require('../../res/assets/food/breakfast/10.jpg'),
        name: 'Idli Sambhar and Chutney',
        desc: 'It is a kind of south indian breakfast made up of suji, nariyal and many vegitables',
        quantity: '0',
        price: 'Rs: 120',
        discount: '20%'
    }];




const Lists = ( props) => {

    const { item } = props;
    return (
        <View style={styles.data}>

            <TouchableOpacity style={styles.foodstyles}>
                <Image source={item.foodimg} style={styles.foodimg} />
                <View style={styles.contentstyle}>
                    <TouchableOpacity><Text style={styles.textstyle} >{item.name}</Text></TouchableOpacity>
                    <Text style={styles.descriptionstyle}>Description: {item.desc}</Text>
                    <Text style={styles.pricestyle}>Price: {item.price}</Text>
                    <Text style={styles.discountstyle}>Discount: {item.discount}</Text>
                    {/* <View style={styles.incdecbutton}>
                        <TouchableOpacity  onPress={onSub}><Text style={styles.incdec}>-</Text></TouchableOpacity>
                        <Text style={styles.incdec}>{item.quantity}</Text>
                        <TouchableOpacity  onPress={onAdd}><Text style={styles.incdec}>+</Text></TouchableOpacity>
                    </View> */}

                </View>
            </TouchableOpacity>


        </View>

    );

}


const breakfast = ({ navigation }) => {
    // state = {
    //     DATA,
    // };
    // onSub = (item, index) => {
    //     const DATA = [...this.state.DATA];
    //     DATA[index].quantity -= 1;
    //     this.setState({ DATA });
    // }
    // onAdd = (item, index) => {
    //     const DATA = [...this.state.DATA];
    //     DATA[index].quantity += 1;
    //     this.setState({ DATA });
    // }

    // const { DATA } = this.state;
    // let totalQuantity = 0;
    // DATA.forEach((item) => {
    //     totalQuantity += item.quantity;
    // })
    return (
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
                    <TouchableOpacity onPress={()=>{navigation.navigate('cart')}}>
                        <Image style={styles.cartimg} source={require('../../res/assets/cart.jpg')} />
                        {/* <Text style={styles.cartincdecstyle}>{totalQuantity}</Text> */}
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.boundary} />

            <View style={styles.body}>
                <View><Text style={styles.heading}>Breakfast</Text></View>
                <FlatList
                    
                    data={DATA}
                    renderItem={({ item, index }) =>
                        <Lists
                            item={item}

                        // onSub={() => this.onSub(item, index)}
                        // onAdd={() => this.onAdd(item, index)}
                        />}
                    keyExtractor={item => item._id}
                />
            </View>
        </View>
    );

}
export default breakfast;
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
    boundary: {
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    data: {
        margin: 5,
    },
    foodstyles: {
        flexDirection: 'row',
        // backgroundColor: 'grey',
        borderColor: "black",
        borderWidth: 1,
        width: 395
    },
    body: {
        padding: 2
    },
    heading: {
        color: 'black',
        fontSize: 40,
        textDecorationLine: 'underline',
        width: 150,
        marginLeft: 150
    },
    foodimg: {
        height: 200,
        width: 170,
        borderRadius: 10,
        margin: 5
    },
    textstyle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        textDecorationLine: 'underline',
    },
    discountstyle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 10
    },
    contentstyle: {
        // backgroundColor: 'green'
        margin: 10
    },
    descriptionstyle: {
        margin: 5,
        width: 200,
        color: 'black'
    },
    pricestyle: {
        margin: 10,
        color: 'black',
        fontSize: 20
    },


    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },

    incdec: {
        borderWidth: 0.5,
        height: 30,
        width: 30,
        flexDirection: 'row',
        fontSize: 30,
        color: 'black',
        // backgroundColor:'yellow'
    },
    incdecbutton: {
        flexDirection: "row",
        marginLeft: 50
    },
    cartincdecstyle: {
        color: 'white',
        backgroundColor: 'black',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        position: 'absolute',
        marginTop: 10,
        width: 15,
        height: 15,
        marginLeft: 40
    }

})