"use client"
import { Box, Button, Card, Grid } from "@mui/material";
import DrawerComponent from "../../components/drawer"
import MainContainer from '@/components/main-container';
import { useRouter } from "next/navigation";
import { ITrack } from "@/types/track";
import TrackList from "@/components/TrackList";
const Tracks = () => {
    const router = useRouter()
    const tracks:ITrack[] = [
        {    
            _id: '231',
            name: 'Track 1reeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeqqqqqqqq',
            artist: 'Artist 1',
            text: 'ewtwetew qwrqwwrqw qwtwqe',
            listens: 2,
            picture: 'http://localhost:5000/image/5b901541-d9fd-4482-b40a-8e39ae544069.jpeg',
            audio: 'http://localhost:5000/audio/c55fda15-9fe4-4027-9aed-c55281d959a5.mp3',
            comments: []
        },
        {    
            _id: '232',
            name: 'Track 1',
            artist: 'Artist 1',
            text: 'ewtwetew qwrqwwrqw qwtwqe',
            listens: 2,
            picture: 'http://localhost:5000/image/5b901541-d9fd-4482-b40a-8e39ae544069.jpeg',
            audio: 'http://localhost:5000/audio/c55fda15-9fe4-4027-9aed-c55281d959a5.mp3',
            comments: []
        },
        {    
            _id: '233',
            name: 'Track 1',
            artist: 'Artist 1',
            text: 'ewtwetew qwrqwwrqw qwtwqe',
            listens: 2,
            picture: 'http://localhost:5000/image/5b901541-d9fd-4482-b40a-8e39ae544069.jpeg',
            audio: 'http://localhost:5000/audio/c55fda15-9fe4-4027-9aed-c55281d959a5.mp3',
            comments: []
        }
    ]
    return (
        <MainContainer>
            <Grid container justifyContent={'center'} width={'100%'}>
                <Card style={{backgroundColor:'rgb(169, 68, 191)', width:'60%',border:'solid 2px white'}}>
                    <Box p={3} >
                        <Grid container justifyContent={'space-between'}>
                            <h1>
                                Tracks
                            </h1>
                            <Button onClick={()=>router.push('/tracks/create')} variant="contained" color='error'>Load</Button>
                        </Grid>
                    </Box>
                </Card>
                <TrackList tracks={tracks}/>
            </Grid>
        </MainContainer>
    )
}
export default Tracks