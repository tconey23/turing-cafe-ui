import './Card.css'

function Card ({id, name, date, time, number}) {

    return(

        <div className='card'>
            <p id='res-name'>{name}</p>
            <p>{date}</p>
            <p>{time} pm</p>
            <p>Number of guests: {number}</p>
        </div>

    )

}

export default Card