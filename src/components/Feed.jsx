import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Sidebar from './Sidebar';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {

  const [selectedCategory, setselectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items))
  },[selectedCategory]); //retorna a função toda vez que o selectedCategory mudar

  return (
    <Stack sx={{ flexDirection: { sx:"collum", md: "row"} }}>
      <Box sx={{ height: { sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 }}}>
        <Sidebar 
        selectedCategory={selectedCategory} setselectedCategory={setselectedCategory} />

        <Typography className='copyright' variant="body2" sx={{ mt: 1.5, color: '#fff' }}>
          Copyright 2022 Re:Born Media
        </Typography>

      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant="h4" fontWheight="bold" md={2} sx={{ color: 'white'}}>
          {selectedCategory} <span style={{ color: '#F31503'}}>Vídeos</span>
        </Typography>

        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed