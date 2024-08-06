import { ITrack } from '@/types/track'
import { Box, Card, Grid, IconButton } from '@mui/material'
import React from 'react'
import s from './trackitem.module.scss'
import { useRouter } from "next/navigation";
import { Delete, Pause, PlayArrow } from '@mui/icons-material'
const TrackItem: React.FC<{ track: ITrack, key: string, active?: boolean }> = ({ track, active = false }) => {
    const router = useRouter()
    return (
        <Card onClick={() => router.push('/tracks/' + track._id)} className={s.track}>
            <IconButton onClick={e=>e.stopPropagation()} color='error' size='large'>{active ? <Pause /> : <PlayArrow />}</IconButton>
            <img className={s.picture} src={track.picture} />
            <div className={s.textblock}>
                <div className={s.name}>{track.name}</div>
                <div className={s.artist}>{track.artist}</div>
            </div>
            <IconButton onClick={e=>e.stopPropagation()} color='error' style={{ marginLeft: 'auto' }}>
                <Delete />
            </IconButton>
        </Card>
    )
}
export default TrackItem