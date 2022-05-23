import React from 'react'
import TextField from '@mui/material/TextField';
import Image from 'next/image';
import insta from '../../assets/images.png'
import Button from '@mui/material/Button';
function index() {
  return (
    <div className='login-container'>
      <div>  </div>
        <div className='login-card'>

        <Image src={insta}/>
        <TextField size='small' id="outlined-basic" fullWidth label="Email" margin='dense' variant="outlined" />
        <TextField size='small' id="outlined-basic" fullWidth label="Password" type="password" margin='dense' variant="outlined" />
        
<div style={{color:'red'}}>Incorrect password. Try again!</div>
  <Button variant="contained" fullWidth margin='dense' style={{marginTop:'1rem'}}>
            <input type="file" accept="image/*" style={{display:'none', marginRight:'1rem'}}></input>
    Login
  </Button>
  <div style={{color:'blue',marginTop:"0.5rem"}}>Forgot Password?</div>

        </div>
        <div className='bottom-card'>
            Don't have an account?<span>Signup</span>
        </div>
    </div>
  )
}

export default index