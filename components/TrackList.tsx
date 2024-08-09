import { ITrack } from '@/types/track'
import { Box, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import TrackItem from './TrackItem'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useActions } from '@/hooks/useActions'

// interface TrackListProps {
//     tracks: ITrack[]
// }
const TrackList: React.FC = () => {
    const { tracks, error } = useTypedSelector(state => state.tracks)
    const { fetchTracks } = useActions()
    useEffect(() => {
        fetchTracks()
    }, [])
    return (

        <Grid container direction={'column'} width={'60%'} style={{marginBottom:'60px'}}>
            <Box p={3}>
                {tracks.map(track =>
                    <TrackItem key={track._id} track={track} />
                )}
            </Box>
        </Grid>
    )
}
export default TrackList