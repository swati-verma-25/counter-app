import React, { Component } from 'react';

class CounterClass extends Component {
    constructor() {
        super();
        this.state = {
            number: 0
        }
    }



    Incrments() {

        this.setState({
            number: this.state.number + 1
        })
    }
    Decrements() {
        if (this.state.number > 0) {
            this.setState({
                number: this.state.number - 1
            })
        }

    }


    render() {
        return (
            <div className='bg-gray-800 w-80 min-h-50 p-4 rounded-2xl'>
                <h2 className="text-lg font-semibold mb-4 text-white text-center">
                    Class Component
                </h2>
                <div className='w-full p-3 bg-amber-50 font-bold text-lg rounded-2xl text-center'>{this.state.number}</div>
                <div className='flex justify-center py-4 gap-4    '>
                    <button className="px-4 py-2 bg-blue-500  rounded-lg border-2 text-white font-bold cursor-pointer " onClick={() => this.Incrments()}>+</button>
                    <button className="px-4 py-2 bg-green-500  rounded-lg border-2  text-white font-bold cursor-pointer" onClick={() => this.Decrements()}>-</button>
                </div>
            </div>
        )
    }
}

export default CounterClass