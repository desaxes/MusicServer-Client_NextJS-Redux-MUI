import { ITrack, TrackActions, TrackActionTypes } from "@/types/track";
import axios from "axios";
import { Dispatch } from "redux";

// export const fetchTracks = (payload:ITrack[]): TrackActions => {
//     return async { type: TrackActionTypes.FETCH_TRACKS, payload }
// }
// export const fetchTracksError = (payload:string): TrackActions => {
//     return async { type: TrackActionTypes.FETCH_TRACKS_ERROR, payload }
// }

export const fetchTracks = () => {
    return async (dispatch: Dispatch<TrackActions>) => {
        try {
            const response = await axios.get('http://localhost:5000/tracks')
            dispatch({
                type: TrackActionTypes.FETCH_TRACKS,
                payload: response.data
            })
        }
        catch (e) {
            dispatch({
                type: TrackActionTypes.FETCH_TRACKS_ERROR,
                payload: 'Error'
            })
        }
    }
}