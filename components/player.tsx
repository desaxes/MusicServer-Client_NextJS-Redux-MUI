'use client'
import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React, { useEffect } from 'react'
import s from './player.module.scss'
import TrackProgress from './trackProgress'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useActions } from '@/hooks/useActions'
let audio: any
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
    const { active, pause, volume, currentTime, duration } = useTypedSelector(state => state.player)
    const { pauseTrack, playTrack, setVolume, setCurrentTime, setDuration } = useActions()
    useEffect(() => {
        if (!audio) {
            audio = new Audio()
        }
        else {
            setAudio()
            // playTrack()
            // audio.play()
        }
    }, [active])
    const play = () => {
        if (pause) {
            console.log(pause)
            playTrack()
            audio.play()
        }
        else {
            pauseTrack()
            audio.pause()
        }
    }
    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.volume = +e.target.value / 100
        setVolume(+e.target.value)
    }
    const changeTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.currentTime = +e.target.value
        setCurrentTime(+e.target.value)
    }
    const setAudio = () => {
        if (active) {
            if (audio.src != active.audio) {
                audio.src = "http://localhost:5000/" + active.audio
                audio.volume = volume / 100
                audio.onloadedmetadata = () => {
                    setDuration(Math.ceil(audio.duration))
                }
                audio.ontimeupdate = () => {
                    setCurrentTime(Math.ceil(audio.currentTime))
                }
                playTrack()
                audio.play()
            }
        }
    }
    if (!active) {
        return null
    }
    return (
        <div className={s.player}>
            <IconButton onClick={play} color='primary' size='large'>
                {!pause ? <Pause /> : <PlayArrow />
                }</IconButton>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', width: '60%' }}>
                <div className={s.text}>{active?.artist}-{active?.name}</div>
                <TrackProgress audio={true} width={'100%'} left={currentTime} right={duration} onChange={changeTime} />
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
                <VolumeUp />
                <TrackProgress audio={false} left={volume} right={100} onChange={changeVolume} />
            </div>
        </div>
    )
}
export default Player