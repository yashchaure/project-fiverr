import React from 'react'
import Layout from '../components/Layout'

const Orders = () => {
  return (
    <div>
    <Layout>
      <h1 className="text-4xl font-bold text-gray-dark">Orders</h1>
      <table className="gigtable border my-8 w-full">
        <tr className="border bg-green">
          <th>Img</th>
          <th>Title</th> 
          <th>Price</th>
          <th>Buyers</th>
          <th>Contact</th>
        </tr>
        <tr>
          <td><img className="h-5 w-5" src="dp.jpeg" alt="" /></td>
          <td>Maria Anders</td>
          <td>11</td>
          <td>John cena</td>
          <td><i class="ri-message-line text-2xl"></i></td>
        </tr>
        
      </table>
    </Layout>
  </div>
  )
}

export default Orders