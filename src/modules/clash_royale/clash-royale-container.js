import React from 'react';
import { View, Text, Stylesheet} from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { connect } from 'react-redux'

import { fetchProfileData } from './actions/profile-search-actions';


class ClashRoyale extends React.Component {
    componentDidMount() {
        const { fetchProfileId } = this.props;
        fetchProfileData("9RP08Y28Y");
        console.log(fetchProfileData("9RP08Y28Y"))
    }

    static navigationOptions = {
        headerTitle: <Text>Clash Royale</Text>
    }

    render(){
        const {
            profileId,
        } = this.props;

        return(
            <SafeAreaView>
                <View>
                    <Text>Welcome to Clash Royale Stats</Text>
                    <Text>{profileId}</Text>
                </View>
            </SafeAreaView>

        );
    }
}

const mapStateToProps = (state) => {
    const { clashRoyaleProfileReducer } = state;
    return {
        profileId: clashRoyaleProfileReducer.profileId,
    };
};

export default connect(mapStateToProps, {
    fetchProfileDataAction: fetchProfileData,
})(ClashRoyale);