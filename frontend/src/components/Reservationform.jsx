import React from 'react'
import { FaFacebook,FaInstagram,FaTwitter,FaYoutube,FaReddit } from "react-icons/fa";
const Reservationform = () => {

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "", 
    time: "",
    guests: "1",})

  const handleChanges = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const generateTimeSlots = () => {
    const Slots = []
    for(let hour=9; hour<21; hour++){
      const startHour=hour%12===0?12:hour%12
      const startPeriod=hour<12?'AM':'PM'
      const endHour=(hour+1)%12===0?12:(hour+1)%12
      const endPeriod=hour<12?'AM':'PM'

      Slots.push(`${startHour}:00 ${startPeriod} - ${endHour}:00 ${endPeriod}`)
    }
  return Slots
  }

  return (
    <div className='min-h-screen bg-[#ffe2b7] p-6 md:p-12'>
      <div className='max-w-6xl mx-auto grid md:grid-cols-3 gap-8'>
        <form className='md:col-span-2 bg-white p-8 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold text-shadow-amber-400 uppercase tracking-wider'>Reserve A Table</h2>
          <h1 className='text-3xl font-bold mb-4'>Dine With Us-<span className='text-4xl font-bold bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-700 bg-clip-text text-transparent'>Reserve Here</span></h1>
          <div className='grid md:grid-cols-2 gap-4'>
            <div className='grid gap-1.5'>
              <label htmlFor="" className='font-bold'>Full Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChanges} placeholder='Enter your full name' required className='w-full p-3 mb-3 border rounded-lg focus:ring focus' />
            </div>
            <div className='grid gap-1.5'>
              <label htmlFor="" className='font-bold'>Email</label>
              <input type="email" name='email' value={formData.email} onChange={handleChanges} placeholder='Enter your email' required className='w-full p-3 mb-3 border rounded-lg focus:ring focus'/>
          </div>
          <div className='grid gap-1.5'>
            <label htmlFor="" className='font-bold'>Phone Number</label>
            <input type="tel" name='phone' value={formData.phone} onChange={handleChanges} placeholder='Enter your phone number' required className='w-full p-3 mb-3 border rounded-lg focus:ring focus'/>
          </div>
          <div className='grid gap-1.5'>
            <label htmlFor="" className='font-bold'>Reservation Date</label>
            <input type="date" name='date' value={formData.phone} onChange={handleChanges} required className='w-full p-3 mb-3 border rounded-lg focus:ring focus' />
          </div >
          <div className='grid gap-1.5'>
            <label htmlFor="" className='font-bold'>Reservation Time</label>
            <select name='time' value={formData.time} onChange={handleChanges} required className='w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-300'>
              <option value="">Select Time</option>
             {generateTimeSlots().map((slot, index) => (
                <option key={index} value={slot}>{slot}</option>
              ))}
             </select> 
            </div> 
            <div className='grid gap-1.5'>
              <label htmlFor="" className='font-bold'>Number of Guests</label>
              <select name='guests' value={formData.guests} onChange={handleChanges} required className='w-full p-3 mb-3 border rounded-lg focus:ring focus'>
                {[...Array(10).keys().map((i) => (
                  <option key={i+1} value={i + 1}>{i + 1} Guest(s)</option>
                ))]}
                </select>  
             </div>
             </div>
              <div className='grid gap-1.5'>
             <buttom type="submit" className='w-full mt-4 text-center text-gray-900 brightness-150 dark:brightness-100 group hover:shadow-lg hover:shadow-yellow-700/60 transition ease-in-out hover:scale-105 p-1 rounded-xl bg-gradient-to-br from-yellow-800 via-yellow-600 to-yellow-800 hover:from-yellow-700 hover:via-yellow-800 hover:to-yellow-600'>Reserve Now</buttom>
                </div>
        </form>
        <div className='bg-black text-gray-300 p-8 rounded-lg shadow-md space-y-10'>
          <div>
            <h3 className='text-lg font-bold'>Address</h3>
            <p>123, Abc Street, N-axis,City,State,Country</p>
          </div>
          <div>
            <h2 className='text-lg font-bold'>Open Time</h2>
            <p>Mon-Fri: 11:00AM-10:00PM</p>
            <p>Sat-Sun: 09:00AM-11:00PM</p>
          </div>
          <div>
            <h3 className='text-lg font-bold mb-2'>Stay Connected</h3>
            <div className='flex gap-4'>
              <FaFacebook className='text-4xl text-black brightness-150 dark:brightness-100 group hover:shadow-lg hover:shadow-yellow-700/60 transition ease-in-out hover:scale-105 p-1 rounded-xl bg-gradient-to-br from-yellow-800 via-yellow-600 to-yellow-800 hover:from-yellow-700 hover:via-yellow-800 hover:to-yellow-600' />
              <FaInstagram className='text-4xl text-black brightness-150 dark:brightness-100 group hover:shadow-lg hover:shadow-yellow-700/60 transition ease-in-out hover:scale-105 p-1 rounded-xl bg-gradient-to-br from-yellow-800 via-yellow-600 to-yellow-800 hover:from-yellow-700 hover:via-yellow-800 hover:to-yellow-600' />
              <FaTwitter className='text-4xl text-black brightness-150 dark:brightness-100 group hover:shadow-lg hover:shadow-yellow-700/60 transition ease-in-out hover:scale-105 p-1 rounded-xl bg-gradient-to-br from-yellow-800 via-yellow-600 to-yellow-800 hover:from-yellow-700 hover:via-yellow-800 hover:to-yellow-600'  />
              <FaReddit className='text-4xl text-black brightness-150 dark:brightness-100 group hover:shadow-lg hover:shadow-yellow-700/60 transition ease-in-out hover:scale-105 p-1 rounded-xl bg-gradient-to-br from-yellow-800 via-yellow-600 to-yellow-800 hover:from-yellow-700 hover:via-yellow-800 hover:to-yellow-600' />
              <FaYoutube className='text-4xl text-black brightness-150 dark:brightness-100 group hover:shadow-lg hover:shadow-yellow-700/60 transition ease-in-out hover:scale-105 p-1 rounded-xl bg-gradient-to-br from-yellow-800 via-yellow-600 to-yellow-800 hover:from-yellow-700 hover:via-yellow-800 hover:to-yellow-600' /> 
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Reservationform
