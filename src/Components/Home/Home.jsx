import React, { useEffect, useState } from 'react';
import dImg from '../../assets/banner-img-1.png'
import Img1 from '../../assets/success-doctor.png'
import Img2 from '../../assets/success-patients.png'
import Img3 from '../../assets/success-review.png'
import Img4 from '../../assets/success-staffs.png'
import Doctors from './Doctors';
import { useLoaderData } from 'react-router';
import CountUp from 'react-countup';

const Home = () => {
    const allDoctors = useLoaderData();
    const [doctors,setDoctors] = useState([]);
    const [loader,setLoader] = useState(true);

    useEffect(()=>{
            setTimeout(() => {
                setDoctors(allDoctors)
                setLoader(false)
            }, 1500);
        },[])

    const [visibleCount, setVisibleCount] = useState(6);
    const [lessCount, setLessCount] = useState();
    const [startCount, setStartCount] = useState();
    useEffect(()=>{
        setTimeout(() => {
            setStartCount(true)
    }, 4000);
    },[])
    
    // console.log(doctors)
    const handleSeeMore = () => {
        setVisibleCount(doctors.length); 
        setLessCount(doctors.length);

    }
    const handleSeeLess = () => {
        setVisibleCount(6); 
        setLessCount(''); 

    }

    return (
        <div>
            <div className='md:p-10 p-5'>
            <div className='flex items-center  md:py-10 py-5  md:px-20 px-5 flex-col text-center bg-gradient-to-t from-white via-base-100 to-base-300 border-4 rounded-3xl bg-tr shadow border-white'>
                <h1 className='font-bold md:text-4xl '>Dependable Care, Backed by Trusted Professionals.</h1>
                <p className='dark:text-gray-400 text-gray-500 md:my-5 my-2 md:text-base text-xs'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                <div className='flex justify-center items-center flex-col md:flex-row md:mb-5 mb-2 gap-3'>
                    <input type="search" placeholder='Search any doctor...' className='bg-white border border-gray-300 text-sm p-2 px-5  md:w-xl  rounded-3xl' name="" id="" />
                    <button className='btn  md:text-sm text-xs px-6 btn-primary rounded-3xl'>Search Now</button>
                </div>
                <div className='flex justify-center gap-3 md:gap-5'>
                    <img className='w-1/2' src={dImg} alt="" />
                    <img className='w-1/2 ' src={dImg} alt="" />
                </div>
            </div>
            </div>
            <div className='text-center px-10'>
                <h1 className='my-4 font-bold text-3xl'>Our Best Doctors</h1>
                <p className='dark:text-gray-400 text-gray-500 mb-4'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className='md:pt-6 pt-3 md:px-10 px-6 text-center'>
                {
                loader && <div className='gap-3 flex justify-center'><span className="loading loading-bars loading-xs"></span>
                <span className="loading loading-bars loading-sm"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-lg"></span>
                <span className="loading loading-bars loading-xl"></span></div>
            }
            </div>
            <div className='gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-7'>
                {   
                    doctors.slice(0,visibleCount).map(doctor => <Doctors
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctors>)
                }
            </div>
            {
                visibleCount < doctors.length && (
                   <div className='flex justify-center my-5'>
                    <button 
                        onClick={handleSeeMore} 
                        className='btn btn-primary px-6 py-2 rounded-3xl'
                    >
                        See More
                    </button>
                </div> 
              )
            }
            {
                lessCount == doctors.length && (
                   <div className='flex justify-center my-5'>
                    <button 
                        onClick={handleSeeLess} 
                        className='btn btn-primary px-6 py-2 rounded-3xl'
                    >
                        See Less
                    </button>
                </div> 
              )
            }
            <div className='text-center px-10'>
                <h1 className='my-4 font-bold text-3xl'>We Provide Best Medical Services</h1>
                <p className='text-gray-500 mb-4'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
            </div>
            <div className='text-center mx-auto py-10 px-6 lg:px-24 md:px-20 justify-center gap-3 grid lg:grid-cols-4 grid-cols-2'>
                <div className='text-left bg-white rounded-xl shadow-md  py-5 px-7'>
                    <img className='my-4' src={Img1} alt="" />
                    {
                        startCount && <h1 className='font-bold dark:text-black text-4xl'><CountUp
                    start={1}
                    end={200}
                    duration={40}
                    ></CountUp> +</h1>
                    }
                    <p className='text-gray-500 my-3'>Total Doctors</p>
                </div>
                <div className='text-left bg-white rounded-xl shadow-md  py-5 px-7'>
                    <img className='my-4' src={Img2} alt="" />
                    {
                        startCount && <h1 className='font-bold dark:text-black text-4xl'><CountUp 
                    start={10}
                    end={1957}
                    duration={40}
                    ></CountUp> +</h1>
                    }
                    <p className='text-gray-500 my-3'>Total Patients</p>
                </div>
                <div className='text-left bg-white rounded-xl shadow-md py-5 px-7'>
                    <img className='my-4' src={Img4} alt="" />
                    {
                        startCount && <h1 className='font-bold dark:text-black text-4xl'><CountUp
                    start={1}
                    end={325}
                    duration={40}
                    ></CountUp> +</h1>
                    }
                    <p className='text-gray-500 my-3'>Total Stuffs</p>
                </div>
                <div className='text-left bg-white rounded-xl shadow-md py-5 px-7'>
                    <img className='my-4' src={Img3} alt="" />
                    {
                        startCount && <h1 className='font-bold dark:text-black text-4xl'><CountUp
                    start={10}
                    end={478}
                    duration={40}
                    ></CountUp> +</h1>
                    }
                    <p className='text-gray-500 my-3'>Total Reviews</p>
                </div>
            </div>
        </div>
    );
};

export default Home;