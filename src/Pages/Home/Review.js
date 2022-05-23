import React from 'react';

const Review = ({ review }) => {
    const { name, company, text, picture, designation } = review;
    return (
        <div class="card  bg-base-100 shadow-xl py-12 border-b-4 border-secondary font-roboto">
            <div className='flex items-center justify-around'>
                <div class="avatar">
                    <div class="w-24 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={picture} alt="workers" />
                    </div>
                </div>
                <div>
                    <h2 className='font-bold text-xl font-oswald'>
                        {name}
                    </h2>
                    <p className='text-sm'>{company}</p>
                    <p className='text-sm'>{designation}</p>
                </div>
            </div>
            <div class="card-body">

                <p>{text}</p>
            </div>
        </div>
    );
};

export default Review;