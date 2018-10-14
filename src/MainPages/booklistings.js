import React, { Component } from 'react'
import {  ScrollView, View, ImageBackground } from 'react-native'
import {  Button, Spinner } from '../components/common/index'
import EventPost  from '../components/CardComponents/BookPost'
import  books  from '../books'


class BookList extends Component {


    renderPosts() {
        return books.map(book => {
            return (

                <BookPost
                    key={books.id}
                    book={book}
                />
            )
        })
    }

    render() {
        const { loading } = this.props;

        if(loading) {
            return <Spinner />
        }

        return (
            <View style={{marginBottom:150}}>

                <ImageBackground
                    source={require('../../assets/blaggsbanner2.png')}
                    style={{width: '100%', height: 120, }}
                >
                </ImageBackground>

            <ScrollView style={{backgroundColor: 'light-grey', marginLeft:20, marginRight:20, marginTop:0}}>
                {this.renderPosts()}
            </ScrollView>
            </View>
        )
    }
}



export default BookList;
