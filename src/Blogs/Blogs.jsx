import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';

const Blogs = () => {
    const allQuestions = useLoaderData();
    const [questions,setQuestions] = useState([]);
    const [loader,setLoader] = useState(true);

    useEffect(()=>{
        setTimeout(() => {
            setQuestions(allQuestions)
            setLoader(false)
        }, 1500);
    },[])
    return (
        <div className='pb-4'>
            <div className='md:pt-6 pt-3 md:px-10 px-6 text-center'>
                {
                loader && <div className='gap-3 flex justify-center'><span className="loading loading-bars loading-xs"></span>
                <span className="loading loading-bars loading-sm"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-lg"></span>
                <span className="loading loading-bars loading-xl"></span></div>
            }
            </div>
            {
                questions.map(question => <div key={question.id} className='md:pt-6 pt-3 md:px-10 px-6'>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title font-semibold">{question.question}</div>
              <div className="collapse-content text-sm">{question.answer}</div>
            </div>
        </div>)
            }
        </div>
    );
};

export default Blogs;