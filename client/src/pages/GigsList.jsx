import React from 'react'
import GigCard from '../components/GigCard'
import Layout from '../components/Layout'
import {Link} from 'react-router-dom'

const GigsList = () => {
  return (
    <div >
        <Layout>
        <h1 className='text-2xl font-bold'>Explore Programming & Tech</h1>
        <div className='flex mx-4 gap-8 my-16 flex-wrap items-center justify-center'>
            <Link to="/gig/:id"><GigCard/></Link>
            <Link to="/gigs"><GigCard/></Link>
            <Link to="/gigs"><GigCard/></Link>
            <Link to="/gigs"><GigCard/></Link>
            <Link to="/gigs"><GigCard/></Link>
            <Link to="/gigs"><GigCard/></Link>
            
        </div>
        </Layout>
    </div>
  )
}

export default GigsList