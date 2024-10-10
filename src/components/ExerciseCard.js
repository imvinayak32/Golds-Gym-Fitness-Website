import React from 'react';

import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`} backgroundColor="#FF2625">
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <Stack direction="row">
      <Button 
        sx={{ 
            ml: '21px', 
            color: '#ff0', 
            background: '#FF2625', 
            fontSize: '14px', 
            borderRadius: '20px', 
            textTransform: 'capitalize' 
            }}
        >
        Body Part - {exercise.bodyPart}
      </Button>
      <Button 
        sx={{ 
            ml: '21px', 
            color: '#FF2625', 
            background: '#FF0', 
            fontSize: '14px', 
            borderRadius: '20px', 
            textTransform: 'capitalize'
            }}
        >
        Muscle - {exercise.target}
      </Button>
    </Stack>
    <Typography 
        ml="21px" mt="11px" pb="10px"
        color="#000" 
        fontWeight="bold" 
        sx={{ fontSize: { lg: '24px', xs: '20px' } }} 
        textTransform="capitalize"
        fontSize="22px"
    >
      {exercise.name}
    </Typography>
  </Link>
);


export default ExerciseCard;