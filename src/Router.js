import React from 'react'

import bookPage from './MainPages/bookPage'
import BookList from './MainPages/booklistings'


import { Scene, Router, Drawer, Stack } from 'react-native-router-flux'

import * as Color from './constants/colors'


const sceneStyle = () => {
    return {
        shadowOpacity: 0
    }
}


const RouterComponent = () => {
    return (

        <Router
            getSceneStyle={() => sceneStyle()}
            navigationBarStyle={styles.navBar}
            navBarButtonColor='white'
            backTitle=' '
            back={true}
            titleStyle={styles.navBarTitle}
            barButtonTextStyle={styles.barButtonTextStyle}
        >

            <Scene
                key='tabs'
                tabs={true}
                tabBarPosition='top'
                labelStyle={{color: '#FFF', fontSize:15}}
                indicatorStyle={{backgroundColor: 'white'}}
                tabBarStyle={{backgroundColor: Color.Purple, elevation: 0, borderTopWidth:0.6, borderTopColor:'white', height:40}}
            >

                <Stack key="Books"  >
                    <Scene key='BookList' component={BookList} initial  hideNavBar />
                    <Scene key='bookPage' component={bookPage}  />
                </Stack>


            </Scene>

        </Router>

    )
}

const styles = {
    navBar: {
 backgroundColor:Color.Purple,
 // marginTop: -20,
 paddingBottom: 6,
 paddingLeft: 6,
    },

   navBarTitle: {
    color:'white',
    fontSize: 15,
},
   barButtonTextStyle: {
   color:'#FFFFFF'
   }
}


export default RouterComponent
