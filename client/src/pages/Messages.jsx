import React from 'react'
import Layout from '../components/Layout'
import {Link} from "react-router-dom"

const Messages = () => {
  return (
    <div>
      <Layout>
        <div>
          <h3 className='text-4xl text-gray-dark text-bold'>Messages</h3>
        <table className="gigtable border my-8 w-full">
          <tr className="border bg-green">
            <th>Buyer</th>
            <th>Last Message</th> 
            <th>Date</th>
            <th>Action</th>
          </tr>
          <Link to="/message/:id">
          <tr>
            <td>john Doe</td>
            <td>Maria Anders</td>
            <td>11</td>
            <button className='bg-green py-2 px-4 m-2'>Mark as Read</button>
          </tr></Link>
          <tr>
            <td>john Doe</td>
            <td>Maria Anders</td>
            <td>11</td>
            <button className='bg-green py-2 px-4 m-2'>Mark as Read</button>
          </tr>
          <tr>
            <td>john Doe</td>
            <td>Maria Anders</td>
            <td>11</td>
            <button className='bg-green py-2 px-4 m-2'>Mark as Read</button>
          </tr>
        </table>
        </div>
      </Layout>
    </div>
  )
}

export default Messages