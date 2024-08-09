'use-client'
import { ITrack } from '@/types/track'
import { Box, Card, Grid, IconButton } from '@mui/material'
import React from 'react'
import s from './trackitem.module.scss'
import { useRouter } from "next/navigation";
import { Delete, Pause, PlayArrow } from '@mui/icons-material'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useActions } from '@/hooks/useActions'
const TrackItem: React.FC<{ track: ITrack, key: string }> = ({ track }) => {
    const router = useRouter()
    const {active}= useTypedSelector(state=>state.player)
    const {setActiveTrack,playTrack,pauseTrack}= useActions()
    const play = (e:any) => {
        e.stopPropagation()
        setActiveTrack(track)
    }
    return (
        <Card style={{backgroundColor:active?.audio===track.audio&&'rgb(78, 0, 116)',color:active?.audio===track.audio&&"white"}}
        onClick={() => router.push('/tracks/' + track._id)} className={s.track}>
            <IconButton  disabled={active?.audio ===track.audio} onClick={play} color='error' size='large'>{active?.audio ===track.audio ? <Pause /> : <PlayArrow />}</IconButton>
            <img className={s.picture} src={'http://localhost:5000/'+ track.picture} />
            <div className={s.textblock}>
                <div className={s.name}>{track.name}</div>
                <div className={s.artist}>{track.artist}</div>
            </div>
            <IconButton onClick={e => e.stopPropagation()} color='error' style={{ marginLeft: 'auto' }}>
                <Delete />
            </IconButton>
        </Card>
    )
}
export default TrackItem