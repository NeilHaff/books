import React, {Component} from 'react'
import { TouchableOpacity, Text, View, Image, StyleSheet } from 'react-native'

import { Actions } from 'react-native-router-flux'

import * as Color from '../../constants/colors'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleView } from '../../../redux/actions/index'


class BookPost extends Component {

    constructor(props) {
        super(props);
        this.hasViewed = this.hasViewed.bind(this)
        this.InCart = this.InCart.bind(this)

    }

    InCart() {
        const { Title, ContentBox,  } = styles
        const { title, Img } = this.props.book


        if (this.hasViewed()) {
            return (

                <View style={ContentBox }>
                        <Text style={Title}>
                            {title}
                        </Text>
                    <View>
                    <Text style={styles.clicktext}>
                        View Again >
                        {/*{JSON.stringify(this.props.viewed)}*/}
                    </Text>
                    </View>
                </View>

            )
        }

        else {
            return (
                <View style={[ContentBox, {backgroundColor: 'white',}]}>
                    <Text style={Title}>
                        {title}
                    </Text>
                    <Image
                        style={{resizeMode: 'contain', height:100}}
                        source={Img}
                    />
                    <Text style={[styles.clicktext, {backgroundColor: Color.Yellow}]}>
                        View Book >
                        {/*{JSON.stringify(this.props.viewed)}*/}
                    </Text>
                </View>
                    )
        }
    }


    hasViewed(){
        return(
            // this.props.bought[this.props.book.id],
            this.props.viewed[this.props.book.id]
        )
    }


    render() {
        const {Container,  } = styles
        const { title, id } = this.props.book

        return (


            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                     Actions.bookPage({book: this.props.book});
                     this.props.toggleView(id);}
                }

                style={{ marginBottom:20}}
            >
                    <View style={Container}>

                            <View>
                                {this.InCart()}

                            </View>
                    </View>
            </TouchableOpacity>

        )
    };

}


const styles = StyleSheet.create({

    Container:{
        backgroundColor:'white',
        flex: 1,
        // padding: 0 | 10 | 10 | 0,
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        height: 'auto',
    },

    ContentBox:{
        backgroundColor:'white',
    },

  TextSt: {
    fontSize:15,
    color: Color.FontBlack,
  },


 Title: {
        fontSize:25,
        color: Color.FontBlack,
       fontWeight: 'bold',
       textAlign:'center',
    },


    clicktext:{
        color: Color.FontBlack,
        fontSize: 15,
        textAlign: 'center',
        paddingBottom:5,
        paddingTop:5

    }

});

    const mapStateToProps = (state, props) => {
    return {
        bought: state.events.bought,
        viewed: state.views.viewed
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        toggleView
    }, dispatch)
}


    export default connect(mapStateToProps, mapDispatchToProps)(BookPost )
