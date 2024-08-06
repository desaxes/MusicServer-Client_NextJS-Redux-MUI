import { ITrack } from '@/types/track'
import { Box, Grid } from '@mui/material'
import React from 'react'
import TrackItem from './TrackItem'

interface TrackListProps {
    tracks: ITrack[]
}

const TrackList: React.FC<TrackListProps> = ({ tracks }) => {
    return (
        <Grid container direction={'column'} width={'60%'}>
            <Box p={3}>
                {tracks.map(track =>
                    <TrackItem key={track._id} track={track} />
                )}
            </Box>
        </Grid>
    )
}
export default TrackList