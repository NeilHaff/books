import React, { Component } from 'react'
import {  ScrollView, View, ImageBackground } from 'react-native'
import {  Button, Spinner } from '../components/common/index'
import BookPost  from '../components/CardComponents/BookPost'
import InCart from '../components/CardComponents/InCart'
import  books  from '../books'


class BookList extends Component {

    renderPosts() {
        return books.map(book => {
            return (

                <BookPost
                    key={book.id}
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

           <InCart />

            <ScrollView style={{backgroundColor: 'light-grey', marginLeft:25, marginRight:25, marginTop:0}}>
                {this.renderPosts()}
            </ScrollView>
            </View>
        )
    }
}



export default BookList;
