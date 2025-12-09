import { FaRegRegistered } from 'react-icons/fa';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import { addItemToLS, getItemsFromLS } from '../../../public/localSt';

const Details = () => {
  const { id } = useParams();
  const doctors = useLoaderData();
  const doctor = doctors.find(d => String(d.registrationNumber) === id);
  const navigate = useNavigate();

  const handleBook = () => {
    const storadeBooksData = getItemsFromLS();

    if (storadeBooksData.includes(id)) {
      toast.warning(`Scheduled for ${doctor.name} Already Added`);
      return;
    } else {
      addItemToLS(id);
      toast.success(`Appointment Scheduled for ${doctor.name} Successfully`);
      setTimeout(() => {
        navigate('/book');
      }, 5000);
    }
  };

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayOfWeek = days[new Date().getDay()];
  const [day1, day2, day3] = doctor.available;

  return (
    <div className='text-center px-4 md:px-10'>
      <ToastContainer />
      <div className='my-5 bg-white p-6 md:p-10 rounded-2xl'>
        <h1 className='text-2xl md:text-3xl font-bold dark:text-black'>Doctor’s Profile Details</h1>
        <p className='mt-2 text-sm md:text-gray-500'>
          Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis pis imperdiet mattis donec dignissim volutpat.
        </p>
      </div>

      <div className='md:my-5 my-3 flex flex-col md:flex-row lg:gap-6 md:gap-4 gap-2 items-center bg-white p-6 md:p-10 rounded-3xl'>
        <div className='flex-shrink-0'>
          <img className='lg:w-[480px] lg:h-[550px] md:w-[350px] md:h-[400px] w-[250px] h-[300px] rounded-xl object-cover' src={doctor.image} alt={doctor.name} />
        </div>

        <div className='text-left flex-1'>
          <h1 className='text-2xl md:text-3xl font-bold dark:text-black'>{doctor.name}</h1>
          <p className='text-gray-500'>{doctor.education}</p>
          <p className='text-gray-500'>{doctor.speciality}</p>
          <p className='text-xl font-semibold my-3 dark:text-black'>Working at {doctor.hospitalName}</p>
          <p className="flex items-center pb-3 border-b border-gray-300 border-dashed gap-1 text-primary">
            <FaRegRegistered /> Reg No: {doctor.registrationNumber}
          </p>

          <div className='flex items-center my-2 md:gap-3 gap-1.5 dark:text-black'>
            <p>Availability:</p>
            {doctor.available.map((day, index) => (
              <p key={index} className='text-sm px-2 text-green-600 rounded-3xl border'>{day}</p>
            ))}
          </div>

          <div className='flex flex-col md:flex-row items-center my-2 gap-2 md:gap-3 dark:text-black'>
            <p>Consultation Fee:</p>
            <p className='text-sm font-medium text-primary'>Taka : {doctor.consultationFee} (incl. Vat) Per consultation</p>
          </div>
        </div>
      </div>

      <div className='my-5 bg-white p-5 md:p-10 rounded-2xl'>
        <h1 className='text-2xl md:text-3xl font-bold border-b border-gray-300 border-dashed pb-2 dark:text-black'>Book an Appointment</h1>
        <div className='flex flex-row justify-between items-start md:items-center my-4 gap-2 dark:text-black'>
          <p>Availability</p>
          <p className='text-sm px-2 text-green-600 rounded-3xl border'>
            {day1 === dayOfWeek || day2 === dayOfWeek || day3 === dayOfWeek ? "Available" : "Not Available"}
          </p>
        </div>

        <p className='text-xs text-warning p-2 border rounded-3xl'>
          {day1 === dayOfWeek || day2 === dayOfWeek || day3 === dayOfWeek
            ? "Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation."
            : "Due to high patient volume, we are currently accepting appointments for next available day only. We appreciate your understanding and cooperation."}
        </p>

        <button onClick={handleBook} className='mt-3 w-full text-white btn-primary btn rounded-3xl px-6 py-3'>
          Book Appointment Now
        </button>
      </div>
    </div>
  );
};

export default Details;
