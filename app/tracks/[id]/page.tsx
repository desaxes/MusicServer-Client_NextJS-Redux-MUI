'use client'
import MainContainer from '@/components/main-container'
import { useParams } from 'next/navigation'
import React from 'react'
import s from './trackpage.module.scss'
import { Button, Input, TextField } from '@mui/material'
import { useRouter } from "next/navigation";

const TrackPage = () => {
    const params = useParams()
    const router = useRouter()
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
    return (
        <MainContainer>
            <div className={s.container}>
                <div className={s.trackBlock}>
                <Button onClick={()=>router.push('/tracks')} variant='contained' color='secondary' style={{marginBottom:'20px'}}>Back to the list</Button>
                    <div className={s.info}>
                        <img src={track.picture}/>
                        <div className={s.text}>
                            <p>Artist - {track.artist}</p>
                            <p>Name - {track.name}</p>
                            <p>Listens - {track.listens}</p>
                        </div>
                    </div>
                    <div className={s.text}>
                        <p>Text</p>
                        <p>{track.text}</p>
                        <div className={s.commentBlock}>
                            <p>Comments</p>
                            <Input className={s.input} style={{ color: 'black' }} color='secondary' placeholder='Your Name'></Input>
                            <Input className={s.input} style={{ color: 'black' }} color='warning' placeholder='Comment'></Input>
                        <Button variant='contained' color='secondary' style={{marginLeft:'100%'}}>Send</Button>
                        <div>
                            {track.comments.map(c=>
                                <div className={s.com}>
                                    {c.username}
                                    {c.text}
                                </div>
                            )}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainContainer>
    )
}
export default TrackPage