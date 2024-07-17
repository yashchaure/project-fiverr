import React from "react";
import Layout from "../components/Layout";

const MyGigs = () => {
  return (
    <div>
      <Layout>
        <div className="flex justify-between">
        <h1 className="text-4xl font-bold text-gray-dark">Gigs</h1>
        <button className="py-2 px-4 bg-green hover:bg-green-dark hover:text-white rounded-md">Add New Gig</button>
        </div>
        <table className="gigtable border my-8 w-full">
          <tr className="border bg-green">
            <th>Img</th>
            <th>Title</th> 
            <th>Price</th>
            <th>Orders</th>
            <th>Action</th>
          </tr>
          <tr>
            <td><img className="h-5 w-5" src="dp.jpeg" alt="" /></td>
            <td>Maria Anders</td>
            <td>11</td>
            <td>113</td>
            <td><i class="ri-delete-bin-6-line text-red-500"></i></td>
          </tr>
          <tr>
            <td><img className="h-5 w-5" src="dp.jpeg" alt="" /></td>
            <td>Maria Anders</td>
            <td>11</td>
            <td>113</td>
            <td><i class="ri-delete-bin-6-line text-red-500"></i></td>
          </tr>
          <tr>
            <td><img className="h-5 w-5" src="dp.jpeg" alt="" /></td>
            <td>Maria Anders</td>
            <td>11</td>
            <td>113</td>
            <td><i class="ri-delete-bin-6-line text-red-500"></i></td>
          </tr>
        </table>
      </Layout>
    </div>
  );
};

export default MyGigs;
