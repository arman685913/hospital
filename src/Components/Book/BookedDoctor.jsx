import { useEffect, useState } from 'react';
import { deleteItemsFromLS } from '../../../public/localSt';
import { ToastContainer, toast } from 'react-toastify';

const BookedDoctor = ({ doctor }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleAppointment = (itemId) => {
    deleteItemsFromLS(itemId);
    toast.warning('Appointment Cancel Successfully');
    window.location.reload();
  };

  return (
    <div id={`doctorId${doctor.id}`}>
      <ToastContainer />
      {loading ? (
        <div className='md:pb-7 pb-3 md:px-10 px-6 text-center'>
          <div className='gap-3 flex justify-center'>
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-xl"></span>
          </div>
        </div>
      ) : (
        <div className='my-5 mx-10 bg-white p-5 md:p-10 rounded-2xl'>
          <div className='border-b border-gray-400 border-dashed'>
            <h1 className='dark:text-black text-xl md:text-2xl font-bold'>{doctor.name}</h1>
            <div className='flex justify-between'>
              <p className='text-gray-500 my-1'>{doctor.education}</p>
              <p className='text-gray-500 my-1'>
                Appointment Fee: {doctor.consultationFee} taka + vat
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleAppointment(doctor.registrationNumber)}
            className='mt-3 w-full text-error border-error btn rounded-3xl px-6 py-3'
          >
            Cancel Appointment
          </button>
        </div>
      )}
    </div>
  );
};

export default BookedDoctor;
