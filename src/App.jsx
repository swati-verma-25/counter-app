
// import './App.css'

import CounterFunction from './Components/CounterFunction'
import CounterClass from './Components/CounterCalss'

function App() {


  return (
    <div className=' min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8'>
      <h1 className="text-3xl font-extrabold text-blue-700 mb-10">
        Assignment-2 Counter Application
      </h1>
      <div className="flex flex-col md:flex-row gap-10">
        <CounterClass />
        <CounterFunction />
      </div>

    </div>
  )
}

export default App
