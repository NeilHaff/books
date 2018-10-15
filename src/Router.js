import React from 'react'

import bookPage from './MainPages/bookPage'
import BookList from './MainPages/booklistings'


import { Scene, Router,  Stack } from 'react-native-router-flux'

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
            backTitle='Book List'
            back={true}
            backButtonTextStyle={{color: 'white'}}
        >

            <Scene
                key='tabs'
                tabs={true}
                tabBarPosition='top'
                labelStyle={{color: '#FFF', fontSize:15}}
                indicatorStyle={{backgroundColor: 'white'}}
                tabBarStyle={{backgroundColor: Color.Blue, elevation: 0, borderTopWidth:0.2, borderTopColor:'white'}}
            >

                <Stack key="Books"  >
                    <Scene key='BookList' component={BookList} initial  hideNavBar />
                    <Scene
                        key='bookPage'
                        component={bookPage}
                        backButtonTextStyle={{color: 'white'}}
                    />
                </Stack>

            </Scene>

        </Router>

    )
}

const styles = {
    navBar: {
         backgroundColor:Color.Blue,
        paddingBottom: 6,
        paddingLeft: 6,
        paddingTop:5,
    },

    navBarTitle: {
       color: 'white',
    },


}


export default RouterComponent
