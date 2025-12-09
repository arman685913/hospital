import { useEffect, useState } from 'react';
import { deleteItemsFromLS } from '../../../public/localSt';
import { ToastContainer, toast } from 'react-toastify';

const BookedDoctor = ({doctor}) => {
    const itemId = doctor.registrationNumber;

    const [appointment, setAppointment] = useState(false);
    const [loader,setLoader] = useState(true);

    useEffect(()=> {
        setTimeout(() => {
        setAppointment(true);
        setLoader(false)
      }, 1500);
      },[])

    const handleAppointment = (itemId) => {
        deleteItemsFromLS(itemId)
        toast.warning('Appointment Cancel Successfully')
        const appointmentCard = document.getElementById(`doctorId${doctor.id}`);
        appointmentCard.classList.add('hidden')
    }

    return (
        <div id={`doctorId${doctor.id}`}>
            <ToastContainer></ToastContainer>
            {
            loader && 
            <div className='md:pb-7 pb-3 md:px-10 px-6 text-center'>
                <div className='gap-3 flex justify-center'><span className="loading loading-bars loading-xs"></span>
                <span className="loading loading-bars loading-sm"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-lg"></span>
                <span className="loading loading-bars loading-xl"></span></div>
            </div>
            }
            {
            appointment && 
            <div className='my-5 mx-10 bg-white p-5 md:p-10 rounded-2xl'>
                <div className='border-b border-gray-300 border-dashed'>
                <h1 className='text-xl md:text-2xl font-bold'>{doctor.name}</h1>
                <div className='flex justify-between'>
                <p className='text-gray-400'>{doctor.education}</p>
                <p className='text-gray-400'>Appointment Fee :{doctor.consultationFee} taka + vat</p>
                </div>
                </div>

                <button onClick={() => handleAppointment(itemId)} className='mt-3 w-full  text-error border-error btn rounded-3xl px-6 py-3'>Cancel Appointment
                </button>
            </div>
            }
        </div>
    );
};

export default BookedDoctor;