import React from 'react'
import { ImageBackground, View, Text } from 'react-native'


const Heroimage = ({  title }) =>  {
  const { containerStyle, title1, title2, title3, title4 } = styles

  return (
    <View style={[containerStyle, style]}>
      <ImageBackground
          source={require('../../../assets/bannerblaggs3.png')}
        style={{width: '100%', height: '100%'}}
        resizeMode={resizeMode || 'cover'}>
        <Text style={title1} >{title}</Text>
      </ImageBackground>
    </View>
  )
}

const styles = {
  containerStyle: {
    borderWidth: 0,
    padding: 0,
    backgroundColor: '#FFF',
    height:  200,
    borderColor: '#add',
    position: 'relative',
    // textAlign:'left'
  },

  title1: {
    color: 'white',
    fontSize: 34,
    marginLeft:15,
    marginTop:80,
    textAlign:'left',
    fontWeight: 'bold',
    // backgroundColor: 'rgba(52, 52, 52, 0.5)'
  },

  title2: {
    color: 'white',
    fontSize: 24,
    textAlign: 'left',
    marginLeft:15,
    textAlignVertical: 'center',
    fontWeight: 'bold',
    // backgroundColor: 'rgba(52, 52, 52, 0.5)'
  },

};

export default Heroimage;
