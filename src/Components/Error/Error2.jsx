import React from 'react';
import { FaRegRegistered } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';

const Error2 = () => {
    const params = useParams();
    const doctorId = params.id;

    return (
        <div className='flex flex-col items-center justify-center min-h-screen text-center px-4'>
            <h1 className='text-5xl font-bold text-red-500 mb-4'>Doctor Not Found!</h1>
            <p className='text-gray-500 mb-6 text-lg'>
                No Doctor Found with this Registration Number
            </p>
            <div className='flex items-center gap-2 mb-6 text-xl text-blue-500'>
                <FaRegRegistered />
                <span>Reg No: {doctorId}</span>
            </div>
            <Link to="/" className='btn btn-primary px-6 py-3 rounded-3xl'>
                View All Doctors
            </Link>
        </div>
    );
};

export default Error2;
