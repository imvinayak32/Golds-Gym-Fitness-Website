import React, { useState, useEffect} from 'react';
import { Box, Typography, TextField, Button, Stack } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import  HorizontalScrollBar  from './HorizontalScrollBar';


const SearchExercises = ({ setExercises, bodyPart, setBodyPart}) => {

  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions );

        setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);
  
  const handleSearch = async() => {
    if(search){
        const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions );

        const searchedExercises = exerciseData.filter(
            (exercise) => exercise.name.toLowerCase().includes(search)
            || exercise.target.toLowerCase().includes(search)
            || exercise.equipment.toLowerCase().includes(search)
            || exercise.bodyPart.toLowerCase().includes(search)
        );

        setSearch('');
        setExercises(searchedExercises);
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
        <Typography fontWeight={700} textAlign="center" mb="50px" sx={{
            fontSize: { lg: '44px', xs: '30px' }
        }}
        >
            Awesome exercises you <br /> should know
        </Typography>
        <Box position="realtive" mb="72px">
            <TextField
                sx={{
                    input: { fontWeight: '700', border: 'none', borderRadius: '4px'},
                    width: { lg: '1000px', xs: '350px' },
                    backgroundColor: '#FFF',
                    borderRadius: '40px'
                }}
                height="76px"
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                placeholder="Search Exercises"
                type="text"
            />
            <Button className="search-btn" sx={{
                bgcolor: "#FF2625",
                color: "#FFF",
                textTransform: "none",
                width: { lg: '173px', xs: '80px'},
                fontSize: { lg: '20px', xs: '14px'},
                height: '56px',
                position: 'absolute',
                // right: '0px'
            }}
                onClick={handleSearch}
            >
                Search
            </Button>
        </Box>
        <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
            <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
        </Box>
    </Stack>
  )
}

export default SearchExercises;