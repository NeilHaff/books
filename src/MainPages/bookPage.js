import React, {Component} from 'react'
import { ScrollView, View, Text, Image } from 'react-native'
import Heroimage from '../components/CardComponents/Heroimage'
import BuyButtons from '../components/CardComponents/BuyButtons'

import { connect } from 'react-redux'

import * as Color from '../constants/colors'

class bookPage extends Component {

    constructor(props) {
        super(props);
        this.isAttending=this.isAttending.bind(this)
        this.buyingState=this.buyingState.bind(this)

    }

    isAttending(){
        return(
            this.props.bought[this.props.book.id]
        )

    }

    buyingState(){
    if (this.isAttending()) {
        return (
            <View style={[styles.attending, {backgroundColor: 'red'}]}>
                <Text style={styles.attendState}>
                    In Basket
                </Text>
            </View>

        )
    }

    else {
        return(
            <View>

            </View>

        )
    }

    }


render(  ) {
    const { title, Description, Img  } = this.props.book

        return (
            <ScrollView>

                <Heroimage
                    title={title}
                />
                {this.buyingState()}

                <View style={styles.container}>
                    <Image
                        source={Img}
                        // source={require('../../../assets/Mr.Greedy.jpg')}
                        // style={{width:'100%'}}
                    />
                    <Text >
                        {Description}
                    </Text>

                    <BuyButtons
                        book={this.props.book}
                    />

                </View>


            </ScrollView>
        )
    };

}

const styles = {
  container: {
    // padding: 12,
    backgroundColor: '#FFF',
    justifyItems: 'center',
      alignItems:'center',
      justifyContent:'center',
      padding: 10 | 10 | 55 | 10,
  },

    button: {
     justifyContent: 'center',

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
        bought: state.events.bought
    }
}


export default connect(mapStateToProps)(bookPage)
