'use client'
import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import s from './player.module.scss'
import TrackProgress from './trackProgress'
const Player = () => {
    const track = {
        _id: '231',
        name: 'Track 1reeeee',
        artist: 'Artist 1',
        text: 'ewtwetew qwrqwwrqw qwtwqe',
        listens: 2,
        picture: 'http://localhost:5000/image/5b901541-d9fd-4482-b40a-8e39ae544069.jpeg',
        audio: 'http://localhost:5000/audio/c55fda15-9fe4-4027-9aed-c55281d959a5.mp3',
        comments: []
    }
    const active = false
    return (
        <div className={s.player}>
            <IconButton onClick={e => e.stopPropagation()} color='primary' size='large'>
                {active ? <Pause /> : <PlayArrow />
                }</IconButton>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', width: '60%' }}>
                <div  className={s.text}>{track.name}</div>
                <TrackProgress width={'100%'} left={0} right={100} onChange={() => { }} />
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
                <VolumeUp />
                <TrackProgress left={0} right={100} onChange={() => { }} />
            </div>
        </div>
    )
}
export default Player