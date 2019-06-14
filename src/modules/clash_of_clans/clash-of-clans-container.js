import React from 'react';
import { View, Text, Stylesheet} from 'react-native'
import { SafeAreaView } from 'react-navigation'


class ClashOfClans extends React.Component {

    static navigationOptions = {
        headerTitle: <Text>Clash Of Clans</Text>
    }

    render(){
        return(
            <SafeAreaView>
                <View>
                    <Text>Welcome to Clash Of Clans Stats</Text>
                </View>
            </SafeAreaView>

        )
    }
}

export default ClashOfClans