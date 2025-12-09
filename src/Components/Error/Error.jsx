import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Error = () => {
  const [error, setError] = useState(false);
  const [loader,setLoader] = useState(true);

  useEffect(()=> {
    setTimeout(() => {
    setError(true);
    setLoader(false)
  }, 1500);
  },[])

  

  return (
    <div>
      <div className='md:py-6 py-3 md:px-10 px-6 text-center'>
                {
                loader && <div className='gap-3 flex justify-center'><span className="loading loading-bars loading-xs"></span>
                <span className="loading loading-bars loading-sm"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-lg"></span>
                <span className="loading loading-bars loading-xl"></span></div>
            }
      </div>
      {
        error &&      
      <div
       className="flex flex-col items-center py-20 md:px-20 px-6">
      <div className="md:w-[500px]">
        <img
          src="https://i.postimg.cc/vmh72rx5/file-folder-mascot-character-design-vector-166742-4413.avif"
          alt="Page Not Found"
        />
      </div>

      <div className="text-center">
        <h1 className="text-3xl md:4xl lg:5xl pt-4 md:pt-7"
          style={{
            fontWeight: "bold",
            color: "#dc3545",
          }}
        >
          404-Page Not Found
        </h1>

        <h2 style={{ marginTop: "10px", fontSize: "22px", fontWeight: "500" }}>
          Page Not Found
        </h2>

        <p className="hidden md:grid" style={{ color: "#666", marginTop: "8px", fontSize: "15px" }}>
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <Link to="/" className="mt-5 inline-block px-5 py-2.5 bg-blue-600 text-white rounded-lg no-underline text-sm">
          ⬅ Back to Home
        </Link>
      </div>
    </div>
    }
    </div>
  );
};

export default Error;
