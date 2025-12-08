// import React, { useEffect, useState } from 'react';

import { FaRegRegistered } from "react-icons/fa";
import { Link } from "react-router";

const Doctors = ({doctor}) => {
    
    const {image,name,education,experience,registrationNumber,available} = doctor;

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const din = new Date();
    const dayOfWeek = days[din.getDay()]; 
    const [day1,day2,day3] = available;

    const today = dayOfWeek;


    return (
        <div className=''>
            <div className='bg-white rounded-2xl p-5'>
                <div className="h-[300px]">
                    <img className="h-full w-full" src={image} alt="" />
                </div>
                <div className='flex justify-between mt-4 mb-6'>
  
                    <p className='text-sm px-2 text-green-600 rounded-3xl border'>
                    {day1 === today || day2 === today || day3 === today ? "Available" : "Not Available"}
                    </p>
                    <p className='text-sm px-2 text-blue-600 rounded-3xl border'>{experience} Experience</p>
                </div>
                <div className='pb-3 mb-3 border-b border-gray-400 border-dashed'>
                    <h2 className='text-2xl font-semibold'>{name}</h2>
                    <p className='text-gray-500'>{education}</p>
                </div>
                <div>
                    <p className="flex items-center gap-1"><FaRegRegistered />Reg No: {registrationNumber}</p>
                </div>
                <div className='w-full rounded-4xl border p-2 my-3 flex justify-center hover:bg-primary text-blue-500 font-bold'>
                    <Link to={`doctor/${registrationNumber}`} className='text-center '>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Doctors;