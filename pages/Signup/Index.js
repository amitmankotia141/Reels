import Image from 'next/image'
import React from 'react'
import logo from "../../Assets/Instagram.jpeg"
import {TextField } from '@mui/material'
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
export default function Index() {
  return (
    <div className='signup-container'>
   <div className='signup-card'> 
    <Image src={logo}/>
    <TextField id="outlined-basic" fullWidth margin="dense" label="Email" variant="outlined" />
    <TextField id="outlined-basic" fullWidth margin="dense" label="Password" variant="outlined" />
    <TextField id="outlined-basic" fullWidth margin="dense" label="Full Name" variant="outlined" />
    <Button variant="outlined" color="secondary">Upload Profile Image 
    <CloudUploadIcon/>
    {/* <input type="" /> */}
    </Button>
   </div>
   </div>
  )
}