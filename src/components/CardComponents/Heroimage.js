import React from 'react'
import { View, Text } from 'react-native'

import * as Color from '../../constants/colors'


const Heroimage = ({  title }) =>  {
  const { containerStyle, title1,  } = styles

  return (
    <View style={[containerStyle, ]}>
        <Text style={title1} >{title}</Text>

    </View>
  )
}

const styles = {
  containerStyle: {
    borderWidth: 0,
    padding: 20,
    backgroundColor: Color.Yellow,
    height:  100,
    borderColor: '#add',
    position: 'relative',

  },

  title1: {
    color: 'white',
    fontSize: 34,
    textAlignVertical: 'center',
    textAlign:'center',
    fontWeight: 'bold',
    // backgroundColor: 'rgba(52, 52, 52, 0.5)'
  },


};

export default Heroimage;
