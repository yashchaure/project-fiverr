import React from "react";
import Layout from "../components/Layout";

const Message = () => {
  return (
    <div>
      <Layout>
          <div className="h-[50vh] overflow-x-auto my-8 py-4 relative flex flex-col">
            <div className="flex justify-start">
              <div className="other-massage w-fit py-2 px-8 bg-gray font-semibold rounded-r-xl rounded-bl-xl">
                hii i am yash chaure
              </div>
            </div>
            <div className="flex justify-end">
              <div className="self-massage w-fit py-2 px-8 bg-gray font-semibold rounded-l-xl rounded-b-xl">
                hii who are you can you please tell me
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-10 my-8 items-center">
            <input
              type="textfield "
              className="h-32 w-[80%] border rounded-md"
            />
            <div className="w-[20%]">
              <button className="bg-green py-2 px-4 rounded-md">Send</button>
            </div>
          </div>
      </Layout>
    </div>
  );
};

export default Message;
