import React, {Component} from 'react';
import { WebView, TouchableOpacity, View, Text, Linking} from 'react-native'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import EventsReducer from '../../../redux/reducers/EventsReducer'
import {toggleEvent} from "../../../redux/actions/index";



class BuyButtons extends Component {

    constructor(props) {
        super(props);

    }




    render() {
        const { id,  } = this.props.Game

        return (

            <View style={styles.containerStyle}>

                <TouchableOpacity activeOpacity={0.7}
                                  onPress={() => this.props.toggleEvent(id)}

                >
                    <View style={styles.box1}>
                        <Text style={styles.text1}>Yes</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7}
                                  onPress={() => this.props.toggleEvent(id)}
                >

                    <View style={styles.box2}>
                        <Text style={styles.text2}>Can't Play</Text>

                    </View>
                </TouchableOpacity>

            </View>
        );
    };

}


const styles = {
  containerStyle: {
    marginLeft: 0,
    marginRight: 0,
    backgroundColor: '#181f28',
    height:50,
    position: 'relative',
    flexDirection: 'row',
    flex:1,
    justifyContent: 'space-evenly',
    marginBottom: 10
  },
  box1:{
    flex:1,
    borderRightWidth:0.5,
    borderRightColor: '#838588',
    paddingRight:50,

  },
  box2:{
    flex:1,
  },
  text1:{
    fontSize: 16,
    color:'#796eff',
    marginTop:14,
    textAlign: 'center',
  },
  text2:{
    fontSize: 16,
    color:'#838588',
    marginTop:14,
    textAlign: 'center'
  }

};


const mapStateToProps = (state, props) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        toggleEvent
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps )(BuyButtons)
