import React from 'react';
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { connect } from 'react-redux'
import { TextInput } from 'react-native-gesture-handler';

class ClashRoyaleSearch extends React.Component {
    render() {
        return(
            <SafeAreaView>
                <View>
                    {/* <SearchInput></SearchInput>  */}
                </View>
            </SafeAreaView>
        );
    }
}

class SearchInput extends React.Component{
    constructor(props){
        super(props);
        this.state = { text: 'Search for Player Tag'};
    }

    render() {
        return (
            <TextInput style={{height: 30, borderColor:'gray', borderWidth:1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            />
        )
    }
}

export default ClashRoyaleSearch