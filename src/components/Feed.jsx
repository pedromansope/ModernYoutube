import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Sidebar from './Sidebar';
import Videos from './Videos';

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx:"collum", md: "row"} }}>
      <Box sx={{ height: { sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 }}}>
        <Sidebar />

        <Typography className='copyright' variant="body2" sx={{ mt: 1.5, color: '#fff' }}>
          Copyright 2022 Re:Born Media
        </Typography>

      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant="h4" fontWheight="bold" md={2} sx={{ color: 'white'}}>
          Novos <span style={{ color: '#F31503'}}
          >Vídeos</span>
        </Typography>

        <Videos videos={[]}/>
      </Box>
    </Stack>
  )
}

export default Feed