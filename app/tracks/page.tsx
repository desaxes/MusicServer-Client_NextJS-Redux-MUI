"use client"
import { Box, Button, Card, Grid } from "@mui/material";
import DrawerComponent from "../../components/drawer"
import MainContainer from '@/components/main-container';
import { useRouter } from "next/navigation";
import { ITrack } from "@/types/track";
import TrackList from "@/components/TrackList";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useEffect } from "react";
import { useActions } from "@/hooks/useActions";
const Tracks = () => {
    const router = useRouter()

    return (
        <MainContainer>
            <Grid container justifyContent={'center'} width={'100%'}>
                <Card style={{ backgroundColor: 'rgb(255, 255, 255)', width: '60%', border: 'solid 2px white' }}>
                    <Box p={3} >
                        <Grid container justifyContent={'space-between'}>
                            <h1>
                                Tracks
                            </h1>
                            <Button onClick={() => router.push('/tracks/create')} variant="contained" color='error'>Load</Button>
                        </Grid>
                    </Box>
                </Card>
                <TrackList tracks={[]} />
            </Grid>
        </MainContainer>
    )
}
export default Tracks