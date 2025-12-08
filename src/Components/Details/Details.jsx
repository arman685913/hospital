import React from 'react';
import { FaRegRegistered } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router';

const Details = () => {
    const item = useParams()
    const id = item.id;
    const doctors = useLoaderData();
    
    const doctor = doctors.find(doctor => doctor.registrationNumber == id)

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayOfWeek = days[new Date().getDay()]; 
  const [day1, day2, day3] = doctor.available;
    // console.log(doctor,id)
    return (
        <div className='text-center'>
           <div className='mx-10 my-5 bg-white p-10 rounded-3xl'>
            <h1 className='text-2xl font-bold'>Doctor’s Profile Details</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis turpis imperdiet mattis donec dignissim volutpat.</p>
           </div>
           <div className='mx-10 my-5 flex gap-6 items-center bg-white p-10 rounded-3xl'>
                <div >
                    <img className='w-[280px] h-[300px] ' src={doctor.image} alt="" />
                </div>
                <div className='text-left'>
                    <h1 className='text-2xl font-bold'>{doctor.name}</h1>
                    <p className='text-gray-500'>{doctor.education}</p>
                    <p className='text-gray-500'>{doctor.speciality}</p>
                    <p className='text-xl font-semibold my-3'>Working at {doctor.hospitalName}</p>
                    <p className="flex items-center pb-3 border-b border-gray-300 border-dashed gap-1"><FaRegRegistered />Reg No: {doctor.registrationNumber}</p>
                    <div className='flex items-center my-2 gap-3'>
                    <p>Availability :</p>
                    <p className='text-sm px-2 text-green-600 rounded-3xl border'>{doctor.available[0]}</p>
                    <p className='text-sm px-2 text-green-600 rounded-3xl border'>{doctor.available[1]}</p>
                    <p className='text-sm px-2 text-green-600 rounded-3xl border'>{doctor.available[2]}</p>
                    </div>
                    <div className='flex items-center my-2 '>
                    <p>Consultation Fee:</p>
                    <p className='text-sm text-primary'>Taka : {doctor.consultationFee} (incl. Vat) Per consultation</p>
                    </div>
                </div>
           </div>

           <div className='mx-10 my-5 bg-white p-10 rounded-3xl'>
            <h1 className='text-2xl font-bold border-b border-gray-300  border-dashed'>Book an Appointment</h1>
            <div className='flex justify-between my-4'>
            <p>Availability</p>
            <p className='text-sm px-2 text-green-600 rounded-3xl border'>
            {day1 === dayOfWeek || day2 === dayOfWeek || day3 === dayOfWeek ? "Available" : "Not Available"}
            </p>
            </div>
            <p className='text-xs text-warning p-2 border rounded-3xl'>
                {day1 === dayOfWeek || day2 === dayOfWeek || day3 === dayOfWeek ? "Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation." : "Due to high patient volume, we are currently accepting appointments for next available day only. We appreciate your understanding and cooperation."}
            </p>
            <button className='my-3 text-white btn-primary btn rounded-3xl w-full'>Book Appointment Now</button>
           </div>
        </div>
    );
};

export default Details;