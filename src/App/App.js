import './App.css'
import React from 'react'
import { useState, useEffect } from 'react'
import { fetchReservations } from '../APICalls'
import Resy from '../Resy/Resy'
import Form from '../Form/Form'

function App() {

  const [reservations, setReservations] = useState([])

  useEffect(() => {
    const fetchReservationsData = async () => {
      const existingRes = await fetchReservations('reservations')
      setReservations(existingRes)
    }
  
    fetchReservationsData()
  }, [])

  function addResy(newResy) {
    setReservations([...reservations, newResy])
  }

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
        <Form addResy={addResy}/>
      </div>
      <div className='resy-container'>
        <Resy reservations={reservations} />
      </div>
    </div>
  )
}

export default App