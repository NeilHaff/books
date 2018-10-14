import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, TextInput } from 'react-native'

import * as Color from '../../constants/colors'


class Notes extends Component {


    render() {
        return(
            <View key={this.props.keyval} style={styles.note} >

                <Text style={styles.noteText} >{this.props.val.date}</Text>
                <Text style={styles.noteText} >{this.props.val.note}</Text>

                <TouchableOpacity onPress={this.props.deletemethod} style={styles.deleteNote}>
                        <Text style={styles.noteDeleteText}>Neil</Text>
                </TouchableOpacity>

            </View>


        );
    }
}



const styles = {
    note:{
        position:'relative',
        padding:20,
        paddingRight:100,
        borderBottomWidth:2,
        borderBottomColor: Color.Purple


    },
    noteText:{
        paddingLeft:20,
        borderLeftWidth:10,

     },

    noteDeleteText:{
        color:'white',
        height:30
    },

    deleteNote:{
        backgroundColor:'grey',
        position: 'absolute',
        // justifyContent:'center',
        alignItems:'center',
        padding:10,
        top:10,
        bottom:10
    },

}

export default Notes
