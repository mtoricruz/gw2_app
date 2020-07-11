import {
    FETCH_PROFILE_START,
    FETCH_PROFILE_SUCCESS,
    FETCH_PROFILE_FAILURE
} from '../actions/profileAction'

const initialState = {
    profileData: [],
    error: '',
    isFetchingProfile: false
};

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PROFILE_START:
            return {
                ...state,
                isFetchingProfile: true
            };
        case FETCH_PROFILE_SUCCESS:
            return {
                ...state,
                isFetchingProfile: false
            }
        case FETCH_PROFILE_FAILURE:
            return {
                ...state,
                isFetchingProfile: false
            }
        default:
            return state;
    }
}