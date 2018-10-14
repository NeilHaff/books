import React, {Component} from 'react'
import { TouchableOpacity, Text, View, Image, StyleSheet } from 'react-native'

import { Actions } from 'react-native-router-flux'
import Main from "../../MainPages/Comments";

import EventPage from '../../MainPages/bookPage'
import * as Color from '../../constants/colors'

import { connect } from 'react-redux'
import store from "../../../redux/store";


class BookPost extends Component {

    constructor(props) {
        super(props);
        this.isAttending = this.isAttending.bind(this)
        this.attendingBox = this.attendingBox.bind(this)

    }

    attendingBox() {
        if (this.isAttending()) {
            return (
                <View style={{backgroundColor:Color.GoGreen, justifyContent: 'center',}}>
                    <Text style={styles.attendingtext}>
                        Attending
                    </Text>

                </View>
            )
        }

        else {
            return (

                <View style={{backgroundColor:Color.NoRed, justifyContent: 'center',}}>
                    <Text style={styles.attendingtext}>
                        Not Attending
                        </Text>

                 </View>
        )

        }

    }

    isAttending(){
        return(
            this.props.attending[this.props.Game.id]
        )

    }


    render() {
        const {TextSt, Container, Title, DateText2, ContentBox1, ContentBox2, attendingBox} = styles
        const { title, Description,  } = this.props.Game

        return (

            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => Actions.EventPage({Game: this.props.Game})}
                // style={styles.container}
                style={{ marginBottom:20}}
            >
                <View style={{color: 'FFF'}}>
                    <View style={Container}>

                        <View style={ContentBox1}>
                            <Text style={Title}>
                                {title}
                            </Text>
                            <Text style={TextSt}>
                                {Description}
                            </Text>

                        </View>


                        <View style={ContentBox2}>
                            <Text style={DateText2}>
                                Current Status-
                            </Text>
                            {this.attendingBox()}
                        </View>


                    </View>

                    <View style={{backgroundColor:'grey', flexDirection:'row',}}>
                        <Image
                            source={require('../../../assets/footballwhite.png')}
                            style={{marginLeft: 80, marginTop: 7, marginRight:7}}
                        />
                        <Text style={styles.attendingtext}>

                            View Match details >
                        </Text>

                    </View>


                </View>
            </TouchableOpacity>

        )
    };

}


const styles = StyleSheet.create({

    Container:{
        backgroundColor:Color.Background,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 0 | 10 | 10 | 0,
        marginTop:10
    },


    container: {
      marginRight:10,
      marginLeft:10

  },

    ContentBox1: {
        width: 200,
        height: 'auto',
        backgroundColor: Color.Background
    } ,

    ContentBox2: {
        width: 100,
        height: 65,
        marginLeft:20,
    } ,

  TextSt: {
    fontSize:15,
    color: Color.FontBlack,
  },

    DateText2: {
        fontSize:12,
        color: Color.FontBlack,
        right:10,
        marginTop:10,
        textAlign:'right',
        fontStyle: 'italic'

    },

 Title: {
        fontSize:25,
        color: Color.Purple,
       fontWeight: 'bold'
    },


    attendingtext:{
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        paddingBottom:5,
        paddingTop:5

    }



});


    const mapStateToProps = (state, props) => {
    return {
        attending: state.events.attendance
    }
}


    export default connect(mapStateToProps)(BookPost )
