import './Form.css'
import { useState } from 'react'

function Form({addResy}) {

    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [number, setGuests] = useState("")


    function submitReservation(event) {
        event.preventDefault()
        const newResy = {
            id: Date.now(),
            name,
            date,
            time,
            number
        }

        addResy(newResy)
        clearInput()
    }

    function clearInput(){
        setName("")
        setDate("")
        setTime("")
        setGuests("")
  }

return(
    <form>
        <input
            type = 'text'
            placeholder = "Name"
            name = 'name'
            value = {name}
            onChange={event => setName(event.target.value)}
        />
        <input
            type = 'text'
            placeholder = "Date"
            name = 'date'
            value = {date}
            onChange={event => setDate(event.target.value)}
            />
        <input
            type = 'text'
            placeholder = "Time"
            name = 'time'
            value = {time}
            onChange={event => setTime(event.target.value)}
            />
        <input
            type = 'text'
            placeholder = "Guests"
            name = 'guests'
            value = {number}
            onChange={event => setGuests(event.target.value)}
            />
            <button onClick = { event => submitReservation(event)}>SUBMIT</button>
    </form>
)

}

export default Form