
let endpoint = 'reservations'

function fetchReservations(endpoint) {
    return fetch(`http://localhost:3001/api/v1/${endpoint}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch ${endpoint}`)
            }
            return response.json()
        })
        .then(data => {return data})
        .catch(error => {
            console.log(`Error fetching ${endpoint}:`, error)
        })
}

export {fetchReservations}