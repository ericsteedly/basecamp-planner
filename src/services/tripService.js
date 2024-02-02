export const postNewTrip = async (tripObj) => {
    const postOptions = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(tripObj)
    }
    return await fetch("http://localhost:8088/trips", postOptions)
}


export const getTripsByUserId = async (id) => {
    return await fetch(`http://localhost:8088/trips?userId=${id}`).then(
        (res)=>res.json()
    )
}


export const getTripBaseCamps = async (tripId) => {
    return await fetch(`http://localhost:8088/tripBaseCamps/?tripId=${tripId}&_expand=baseCamp`).then(
        (res)=>res.json()
    )
}

export const getStates = async () => {
    return await fetch("http://localhost:8088/states").then(
        (res)=>res.json()
    )
} 


export const deleteTrip = async (tripId) => {
    const deleteOptions = {
        method: "DELETE"
    }
    return await fetch(`http://localhost:8088/trips/${tripId}`, deleteOptions)
}


