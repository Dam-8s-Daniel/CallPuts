import React from 'react';


export default function Contact () {


    return (
        <div className='contactContainer'>
            <h1>Contact page</h1>
            <input
            type='text'
            placeholder='First name'
             />
            <input
            type='text'
            placeholder='Last name'
             />
            <input
            type='email'
            placeholder='Email'
             />
            <textarea
            type='text'
            placeholder='Message'
             />
        <button >
            Submit</button>



        </div>

    )
}