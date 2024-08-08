'use client'
import React from 'react'
import { useState } from "react";
import MainContainer from '@/components/main-container';
import s from './create.module.scss'
import { Stepper, Step, StepLabel, Grid, Button, TextField } from "@mui/material";
import PublishIcon from '@mui/icons-material/Publish';
import { styled } from '@mui/material/styles';
const CreateTrack = () => {
    const steps = ['info', 'picture', 'audio']
    const [state, setState] = useState<number>(1)
    const next = () => {
        setState(state + 1)
    }
    const back = () => {
        setState(state - 1)
    }
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });
    const onChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
        if (e.target.files != null) {
            setFile(e.target.files[0], type)
        }
    }
    const setFile = (file: any, type: string) => {
        if (type = 'image') {
            setPicture(file)
        }
        if (type = 'audio') {
            setAudio(file)
        }
    }
    const [picture, setPicture] = useState('')
    const [audio, setAudio] = useState('')
    console.log(audio)
    return (
        <MainContainer>
            <div className={s.container}>
                <div className={s.loadBlock}>
                    <h1>Track loading</h1>
                    <Stepper activeStep={state - 1}>
                        {steps.map((step, index) =>
                            <Step
                                key={index}
                                completed={state > index + 1}
                            >
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        )}
                    </Stepper>
                    {state === 1 &&
                        <Grid className={s.dataField} container direction='column' gap='20px'>
                            <TextField placeholder='track name'></TextField>
                            <TextField placeholder='artist name'></TextField>
                            <TextField placeholder='text' multiline rows={5}></TextField>
                        </Grid>
                    }
                    {state === 2 && <div className={s.pictureField}>
                        <img src={picture} />
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<PublishIcon />}
                        >
                            Upload file
                            <VisuallyHiddenInput accept="image/*" type="file" onChange={e => onChange(e, 'image')} />
                        </Button>
                    </div>}
                    {state === 3 && <div className={s.audioField}>
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<PublishIcon />}
                        >
                            Upload file
                            <VisuallyHiddenInput accept="audio/*" type="file" onChange={e => onChange(e, 'audio')} />
                        </Button>
                    </div>}
                    <Grid container justifyContent='space-between'>
                        <Button disabled={state === 1} onClick={back} variant='contained' color='secondary'>Назад</Button>
                        <Button disabled={state === 3} onClick={next} variant='contained' color='secondary'>Далее</Button>
                    </Grid>
                </div>
            </div>
        </MainContainer>
    )
}
export default CreateTrack