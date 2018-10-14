import React, { Component } from 'react'
import { TouchableOpacity, Text, View, Image, StyleSheet, Dimensions } from 'react-native'
import Images from '@assets/images'
import { Actions } from 'react-native-router-flux'
import HTML from 'react-native-render-html'

import Card from '../Card'
import _ from 'lodash'

const WIDTH = Dimensions.get('window').width / 2

class Product extends Component {
  _renderCategories() {
    const { categories } = this.props.product

    if(!categories || categories.length <= 0) { return }

    const allCategories = categories.map(category => {
      return category.name
    }).join(', ')

    return (
      <Text style={styles.subtext}>
        Category: {allCategories}
      </Text>
    )
  }

  _renderIcon() {
    const { categories } = this.props.product
    const category = categories[0] || {}
    const icons = {
      'Beef'    : Images.beef,
      'Lamb'    : Images.lamb,
      'Pork'    : Images.pork,
      'Chicken' : Images.chicken,
      'Poultry' : Images.chicken,
    }

    return icons[category.name]
  }

  render() {
    const { name, shortdescription, short_description } = this.props.product

    return (
      <Card>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => Actions.ProductPage({product: this.props.product})}
          style={styles.container}
        >
          <View style={styles.box}>
            <Text style={styles.headerTextStyle}>{name}</Text>
            {this._renderCategories()}
            <Image style={styles.image} source={this._renderIcon()} />
            <HTML baseFontStyle={{color: '#5d5d5d', fontSize: 12}} html={short_description}  />
            {/*<HTML baseFontStyle={styles.description} html={short_description}  />*/}
            {/*<Text style={styles.description}>{short_description}</Text>*/}
          </View>
        </TouchableOpacity>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    width: WIDTH
  },

  box: {
    borderWidth:1,
    flexDirection: 'row',
    flexWrap:'wrap',
    borderColor: '#e3e3e3',
    backgroundColor:'white',
    overflow: 'hidden',
    padding: 8,
    margin: 10,
    height: 100
  },

  subtext: {
    fontSize:12,
    color: '#838588',
    width:120
  },

  description: {
    fontSize:10,
    color: '#838588',
    width:120
  },

  headerTextStyle: {
    width:100,
    fontSize:14,
    fontWeight: 'bold',
    color:'#3f6d95',
    paddingTop:0,
    paddingBottom:0
  },

  image:{
    position: 'absolute',
    height: 20,
    width:30,
    right:8,
    top:8,
    resizeMode: 'contain'
  }
})

export default Product
