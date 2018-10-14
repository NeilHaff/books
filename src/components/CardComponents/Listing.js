import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'
import Card from '../Card'
import { Actions } from 'react-native-router-flux'
import HTML from 'react-native-render-html'

const Listing = ({Ad}) =>  {
  return (
    <Card>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => Actions.ListingPage({Ad: Ad})}
        style={styles.container}
      >
        <View style={{padding:16, overflow: 'hidden'}}>
          <Text style={styles.title}>{Ad.title.rendered}</Text>
          <View style={styles.line}/>
          <HTML
            containerStyle={{height: 48}}
            html={Ad.content.rendered}
            ignoredStyles={['display']}
            ignoredTags={['img']}
            tagsStyles={{
              p: {
                color: '#5d5d5d',
                fontSize: 13,
                textAlign: 'center'
              }
            }}
          />
        </View>
      </TouchableOpacity>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#aaaaaa',
    overflow: 'hidden',
    marginHorizontal: 16,
    marginBottom: 20,
    height: 150,
    backgroundColor:'#FFF',
    alignItems: 'center'
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color:'#3f6d95',
    textAlign: 'center'
  },
  line:{
    borderWidth:0.5,
    width:150,
    borderColor:'#5d5d5d',
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 6
  }
})

export default Listing
