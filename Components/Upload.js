import * as React from 'react';
import Button from '@mui/material/Button';
import MovieIcon from '@mui/icons-material/Movie';
import LinearProgress from '@mui/material/LinearProgress';
export default function Upload() {
  return (
    <div className='upload-btn'>
      <Button variant="outlined" color="secondary" size="large" component="label">
         <MovieIcon/>
        Upload Media
        <input hidden accept="*" multiple type="file" />
      </Button>
      <LinearProgress color="secondary" variant="determinate" value={10} sx={{mt:"0.5rem",mb:"0.5rem"}}/>
    </div>
  )
}
