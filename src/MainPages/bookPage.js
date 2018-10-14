import React, {Component} from 'react'
import { ScrollView, View, Text } from 'react-native'
import Heroimage from '../components/CardComponents/Heroimage'
import AttendingButtons from '../components/CardComponents/BuyButtons'
import Main from './Comments'

import { connect } from 'react-redux'

import * as Color from '../constants/colors'

class bookPage extends Component {

    constructor(props) {
        super(props);
        this.isAttending=this.isAttending.bind(this)
        this.attendingState=this.attendingState.bind(this)

    }

    isAttending(){
        return(
            this.props.attending[this.props.Game.id]
        )

    }

    attendingState(){
    if (this.isAttending()) {
        return (
             <View style={[styles.attending, {backgroundColor: Color.GoGreen,}]}>
                    <Text style={styles.attendState}>
                        Great, you're playing
                    </Text>
             </View>
        )
    }

    else {
        return(
                <View style={[styles.attending, {backgroundColor: Color.NoRed,}]}>
                    <Text style={styles.attendState}>
                        Currently: not attending
                    </Text>
                </View>

        )
    }

    }


render(  ) {
    const { Location, Opponent, Description, Incharge, DateText, FullLocation } = this.props.Game

        return (
            <ScrollView>
                <Heroimage
                    Location={Location}
                    Team={Opponent}

                />
                <AttendingButtons
                    Game={this.props.Game}
                />

                <View style={{flexDirection:'row'}}>
                <Text style={[styles.SubText, {marginTop:10, fontWeight:'bold',  marginLeft:15,}]}>
                    Date:
                </Text>
                    <Text style={[styles.SubText, {marginTop:10}]}>
                        {DateText}
                    </Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={[styles.SubText, {fontWeight:'bold', marginLeft:15,}]}>
                        Managing:
                    </Text>
                <Text style={styles.SubText }>
                    {Incharge}
                </Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={[styles.SubText, {marginBottom:20, fontWeight:'bold', marginLeft:15,}]}>
                        Full Location:
                    </Text>
                    <Text style={[styles.SubText, {marginBottom:20}]}>
                        {FullLocation}
                    </Text>
                </View>

                {this.attendingState()}


                <View style={styles.paragraph}>
                    <Text >
                        {Description}
                    </Text>
                </View>
                <Main/>
            </ScrollView>
        )
    };

}

const styles = {
  container: {
    // padding: 12,
    backgroundColor: '#FFF',
    justifyItems: 'center'
  },

    attending: {
        padding: 10,
        marginBottom: 10,
        marginRight:10,
        marginLeft:10

    } ,

    SubText:{
      fontcolor:Color.FontBlack,
      fontSize:16,
      marginLeft:5

    },

    attendState: {
     fontSize:20,
     color: 'white',
     textAlign: 'center'
    },

  paragraph: {
    color: '#838588',
    fontSize: 14,
    padding:15,
    margin: 20 | 20 | 20  | 20,
    position:'relative'
  },
};



const mapStateToProps = (state, props) => {
    return {
        attending: state.events.attendance
    }
}


export default connect(mapStateToProps)(bookPage)
