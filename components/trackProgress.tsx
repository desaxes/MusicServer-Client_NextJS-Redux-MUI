'use client'
import React from 'react'
interface TrackProgressProps{
    left:number;
    right:number;
    onChange:(e:any)=>void,
    width?:string
}
const TrackProgress:React.FC<TrackProgressProps> = ({left,right,onChange,width}) => {
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
        <div style={{display:'flex',width: width}}>
            <input style={{ width: width }} type='range' min={left}max={right}value={left} onChange={onChange}/>
            <div>{left}/{right}</div>
        </div>
    )
}
export default TrackProgress