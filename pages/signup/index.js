import React from 'react'
import TextField from '@mui/material/TextField';
import Image from 'next/image';
import insta from '../../assets/images.png'
import Button from '@mui/material/Button';
function index() {
  return (
    <div className='signup-container'>
        <div className='signup-card'>

        <Image src={insta}/>
        <TextField size='small' id="outlined-basic" fullWidth label="Email" margin='dense' variant="outlined" />
        <TextField size='small' id="outlined-basic" fullWidth label="Password" type="password" margin='dense' variant="outlined" />
        <TextField size='small' id="outlined-basic" fullWidth label="Full Name" margin='dense' variant="outlined" />
        
        <Button variant="outline" fullWidth margin='dense'style={{marginTop:'1rem', border: '1px solid blue'}} component='span'>
            <input type="file" accept="image/*" style={{display : "none"}}></input>
    Upload
  </Button>

  <Button variant="contained" fullWidth margin='dense' style={{marginTop:'1rem'}}>
            <input type="file" accept="image/*" style={{display:'none', marginRight:'1rem'}}></input>
    Sign Up
  </Button>

        </div>
        <div className='bottom-card'>
            Already have an account? <span>Login</span>
        </div>
    </div>
  )
}

export default index