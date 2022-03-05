import React from 'react';
import Robot from '../robot.png'

export default function Contact () {

    return (
        <div className='contactContainer'>
            <img src={Robot} className='contactRobot'></img>
            <h1>Contact me</h1>
            <form>
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
                <button >Submit</button>
            </form>


        </div>

    )
}