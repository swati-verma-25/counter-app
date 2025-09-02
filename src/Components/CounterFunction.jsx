import React, { useState } from 'react';



function CounterClass() {

    const [number, setNumber] = useState(0);

    function Increment() {
        setNumber(number + 1);
    }
    function Decrement() {
        if (number > 0) {
            setNumber(number - 1)
        }

    }
    return (
         <div className='bg-gray-800 w-80 min-h-50 p-4 rounded-lg'>
                <h2 className="text-lg font-semibold mb-4 text-white text-center">
                    Function Component
                </h2>
                <div className='w-full p-3 bg-amber-50 font-bold text-lg rounded-2xl text-center'>{number}</div>
                <div className='flex py-4 gap-4 justify-center'>
                    <button className="px-4 py-2 bg-blue-500  rounded-lg border-2 text-white font-bold cursor-pointer " onClick={Increment}>+</button>
                    <button className="px-4 py-2 bg-green-500  rounded-lg border-2  text-white font-bold cursor-pointer" onClick={Decrement}>-</button>
                </div>
            </div>
       
    )
}

export default CounterClass;