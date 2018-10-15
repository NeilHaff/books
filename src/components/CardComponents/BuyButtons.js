import React, {Component} from 'react';
import {  TouchableOpacity, View, Text, } from 'react-native'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {toggleEvent} from "../../../redux/actions/index";


class BuyButtons extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        const { id,  } = this.props.book

        return (


                <TouchableOpacity activeOpacity={0.7}
                                  onPress={() => this.props.toggleEvent(id)}
                >
                    <View style={styles.containerStyle}>
                    <View style={styles.box1}>
                        <Text style={styles.text1}>Buy Now</Text>
                    </View>

                    </View>
                </TouchableOpacity>
        );
    };

}


const styles = {
  containerStyle: {
    marginTop:40,
    width:200,
    height:'auto',
    position: 'relative',
    padding:20,
    backgroundColor: 'red',
    textAlign:'center'

  },


  text1:{
    fontSize: 16,
    color:'white',
    textAlign: 'center',
  },

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
