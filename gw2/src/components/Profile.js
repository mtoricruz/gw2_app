import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchProfile } from '../actions/profileAction'

const Profile = ({
    isFetchingProfile
}) => {
    useEffect(() => {
        fetchProfile();
    }, [])

    return (
        <main>
            {isFetchingProfile && <h3>Fetching Profile...</h3>}
            {!isFetchingProfile && (
                <div>
                    <p> it works lol hehe</p>
                </div>
            )}
        </main>
    )
}

const mapStateToProps = state => {
    console.log({ state });
    return {
        isFetchingProfile: state.isFetchingProfile
    }
}

export default connect(
    mapStateToProps,
    { fetchProfile }
)(Profile)