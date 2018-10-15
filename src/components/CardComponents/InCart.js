import React, {Component} from 'react'
import { Text, View, StyleSheet } from 'react-native'

import * as Color from '../../constants/colors'
import  books  from '../../books'

import { connect } from 'react-redux'


class InCart extends Component {

    renderBoughtBooks() {
        const bought = books.filter(book => {
            return this.props.bought[book.id]
        }).map(book =>  book.title)
            return (
                <Text style={styles.subtext}>
        {bought.join(', ' )}
        </Text>
            )
        }


    render() {
        const { Container, clicktext } = styles

        return (
                <View style={Container}>
                        <Text style={clicktext}>
                            In Cart >
                        </Text>
                        <Text style={clicktext}>
                            {this.renderBoughtBooks()}
                        </Text>

                </View>
        )
    };

}


const styles = StyleSheet.create({

    Container:{
        flexDirection:'row',
        backgroundColor:Color.Background,
        padding: 0 | 10 | 10 | 0,
        marginTop:10,
        marginBottom:15
    },


    clicktext:{
        color: Color.FontBlack,
        fontSize: 15,
        textAlign: 'center',
        paddingBottom:5,
        paddingTop:2

    }

});


const mapStateToProps = (state, props) => {
    return {
        bought: state.events.bought
    }
}


export default connect(mapStateToProps)(InCart )
