import { PlayerActions, PlayerActionTypes, PlayerState } from "@/types/player"
import { ITrack, TrackActions, TrackActionTypes, TrackState } from './../../types/track';

const InititalState: TrackState = {
    tracks: [],
    error: ''
}
export const trackReducer = (state = InititalState, action: TrackActions): TrackState => {
    switch (action.type) {
        case TrackActionTypes.FETCH_TRACKS: {
            return { ...state, error: '',tracks: action.payload }
        }
        case TrackActionTypes.FETCH_TRACKS_ERROR: {
            return { ...state, error: action.payload }
        }
        default: return state
    }
}