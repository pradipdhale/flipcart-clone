
import { Fragment } from 'react'
import { Box, styled } from '@mui/material'
import NavBar from './NavBar'
import Banner from './Banner'


const Component = styled(Box)`
   padding: 10px 10px;
   background: #F2F2F2;
`

const Home = () => {
  return (
    <Fragment>
       <NavBar />
       <Component>
           <Banner />
       </Component>
      
    </Fragment>
  )
}

export default Home