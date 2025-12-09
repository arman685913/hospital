import React, { useEffect, useState } from 'react';
import { getItemsFromLS } from '../../../public/localSt';
import { Link, useLoaderData } from 'react-router';
import BookedDoctor from './BookedDoctor';

const Book = () => {
    const allDoctor = useLoaderData();
    const [bookedDoctors,setBookedDoctors] = useState([]);
    useEffect(()=>{
        const storadeBooksData = getItemsFromLS();
        const Id = storadeBooksData.map(id => id)
        const doctor = allDoctor.filter(doctor => Id.includes(doctor.registrationNumber));
        setBookedDoctors(doctor)
    },[allDoctor])
    console.log(bookedDoctors)
    return (
        <div>
            <div className='my-10 text-center'>
                <h1 className='font-bold text-3xl'>{
                    bookedDoctors.length != 0? 'My Appointments' : 'You Have No Appointments'
                    }</h1>
                <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
                {bookedDoctors.length == 0 && <Link to="/" className="mt-5 inline-block px-5 py-2.5 bg-blue-600 text-white rounded-lg no-underline text-sm">⬅ Back to Home</Link>
                }
            </div>
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