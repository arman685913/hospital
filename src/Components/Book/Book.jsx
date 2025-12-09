import React, { useEffect, useState } from 'react';
import { getItemsFromLS } from '../../../public/localSt';
import { Link, useLoaderData } from 'react-router';
import BookedDoctor from './BookedDoctor';
import Chart from './Chart';

const Book = () => {
    const allDoctor = useLoaderData();
    
    const [bookedDoctors,setBookedDoctors] = useState([]);
    useEffect(()=>{
        const storadeBooksData = getItemsFromLS();
        const doctor = allDoctor.filter(doctor => storadeBooksData.includes(doctor.registrationNumber));
        setBookedDoctors(doctor)
    },[allDoctor])
    return (
        <div>
            <div className='my-10 text-center'>
                <h1 className='font-bold text-3xl'>{
                    bookedDoctors.length != 0? 'My Appointments' : 'You Have No Appointments'
                    }</h1>
                <p className='text-gray-500 my-1'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
                {bookedDoctors.length == 0 && <Link to="/" className="mt-5 inline-block px-5 py-2.5 bg-blue-600 text-white rounded-lg no-underline text-sm">⬅ Back to Home</Link>
                }
            </div>
            {
                bookedDoctors.length != 0 &&
                <Chart doctor={bookedDoctors}>
                </Chart>
            }
            {
                bookedDoctors.map(doctor => 
                    <BookedDoctor
                    key={doctor.id}
                    doctor={doctor}>
                    </BookedDoctor>
                )
            }
        </div>
    );
};

export default Book;