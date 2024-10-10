import React from 'react';

import { Stack, Typography } from '@mui/material';

import Icon from '../assets/icons/gym.png';

const BodyPart = ({item, setBodyPart, bodyPart}) => {
  return (
    <Stack
        type="Button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={{
            borderTop: bodyPart === item ? '4px solid #FF2625' : '',
            backgroundColor: '#FFF',
            borderBottomLeftRadius: '20px',
            width: '270px',
            height: '280px',
            cursor: 'pointer',
            gap: '47px'
         }}
         onClick={() => {
            setBodyPart(item);
            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
        }}
    >
        <img src={Icon} alt="dumbbell" className="body-part-icon" 
            style={{width: '40px', height: '40px', }}
        />
        <Typography
            fontWeight="bold"
            fontSize="24px"
            color="#3A1212"
            textTransform="capitalize"
        >
            {item}
        </Typography>
    </Stack>
  )
}

export default BodyPart;  