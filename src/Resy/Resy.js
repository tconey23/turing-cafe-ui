import './Resy.css'
import Card from '../Card/Card'
import { useEffect } from 'react'

function Resy({reservations}) {
console.log(reservations)
let resCard

    if(reservations){
        resCard = reservations.map((resy) => {
            return (
                <Card
                key={resy.id}
                id={resy.id}
                name={resy.name}
                date={resy.date}
                time={resy.time}
                number={resy.number}
                />
            )
        })
    }


    return(
        <>
            {resCard}
        </>
    )

}

export default Resy