import React, { useEffect,useState } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import  Container  from '@mui/material/Container'
import CircularProgress from '@mui/material/CircularProgress';


import Router from 'next/router'
import { toast } from 'react-toastify'
import {FcGoogle} from 'react-icons/fc'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { getProviders, signIn } from "next-auth/react"

const Login = ({providers}) => {

  const [showAdmin , setShowAdmin] = useState(false)
  const [loading, setLoading] = useState(false)

  console.log(providers[Object.keys(providers)[0]].id);

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const res = await signIn(providers[Object.keys(providers)[0]].id)
    setLoading(false)
  }

  return (
    <>
      <Container>
      <Box sx={{m:2}} >
        <Image
          src="/../public/mir-h-logo.png"
          height='80'
          width='80'
          onClick={() => setShowAdmin(!showAdmin)}
        />
      </Box>
      <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',minHeight:'80vh'}}>
        <Box sx={{}}>
          <form onSubmit={handleSubmit}>
            { loading
              ? <CircularProgress />
              : showAdmin 
                ? <Box>
                    <Button variant="contained" endIcon={<AdminPanelSettingsIcon color="white"/>} size="large">
                      Login as Admin
                    </Button>                
                  </Box>
                : <Box>
                    <Button type="submit" variant="contained" startIcon={<FcGoogle/>} size="large">
                      Sign in with Google
                    </Button>
                  </Box>             
            }
          </form>
        </Box>
      </Box>
      </Container>
    </>
  )
}


export default Login

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}