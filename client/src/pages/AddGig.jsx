import React from "react";
import Layout from "../components/Layout";

const AddGig = () => {
  return (
    <div>
      <Layout>
          <h1 className="text-gray-dark text-4xl font-semibold">
            Add a New Gig
          </h1>
          <div className="flex justify-center my-8 py-4 px-4 text-gray-dark font-semibold">
            <div className="flex-1 flex flex-col justify-between">
              <label htmlFor="title">Title</label>
              <input type="text" className="normal-input" name="title" id="" />
              <label htmlFor="title">Category</label>
              <input type="title" className="normal-input" name="" id="" />
              <label htmlFor="coverImage">Cover Image</label>
              <input type="file" className="mb-4" />
              <label htmlFor="image">Upload Images</label>
              <input type="file" className="mb-4" />
              <label htmlFor="desc">Decription</label>
              <textarea name="desc" className="text-big" id=""></textarea>
              <button className="py-2 border bg-green hover:bg-green-dark rounded-md text-white">Create</button>
            </div>
            <div className="flex-1 flex flex-col px-16 justify-between">
              <label htmlFor="service">Service Title</label>
              <input type="text" className="normal-input" name="service" id="" />
              <label htmlFor="shortdesc">Short Description</label>
              <textarea name="shortdesc" className="text-big" id=""></textarea>
              <label htmlFor="Time">Delivery Time</label>
              <input type="text" className="normal-input" name="Time" id="" />
              <label htmlFor="revision">Revision Number</label>
              <input type="text" className="normal-input" name="revision" id="" />
              <label htmlFor="features">Add Features</label>
              <input type="text" className="h-8 mb-1 border border-black rounded-md" name="features" id="" />
              <input type="text" className="h-8 mb-1 border border-black rounded-md" name="features" id="" />
              <input type="text" className="h-8 mb-1 border border-black rounded-md" name="features" id="" />
              <label htmlFor="price">Price</label>
              <input type="text" className="normal-input" name="price" id="" />
            </div>
        </div>
      </Layout>
    </div>
  );
};

export default AddGig;
