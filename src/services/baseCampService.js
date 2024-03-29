export const getStateById = async (id) => {
    return await fetch(`http://localhost:8088/states/${id}`).then(
        (res)=>res.json()
    )
}

export const getBaseCampById = async (id) => {
    return await fetch(`http://localhost:8088/baseCamps/${id}`).then(
        (res)=>res.json()
    )
}


export const getTripBaseCamps = async (tripId) => {
    return await fetch(`http://localhost:8088/tripBaseCamps?tripId=${tripId}`).then(
        (res)=>res.json()
    )
}

export const getTripBaseCampById = async (id) => {
    return await fetch(`http://localhost:8088/tripBaseCamps/${id}`).then(
        (res)=>res.json()
    )
}


export const postTripBaseCamp = async (obj) => {
    const postOptions = {
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify(obj)
    }
    return await fetch("http://localhost:8088/tripBaseCamps", postOptions)
}


export const deleteTripBaseCamp = async (id) => {
    const deleteOptions = {
        method: "DELETE"
    }
    return await fetch(`http://localhost:8088/tripBaseCamps/${id}`, deleteOptions)
}

export const editTripBaseCamp = async (tripBaseObj) => {
    const putOptions = {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(tripBaseObj)
    }
    return await fetch(`http://localhost:8088/tripBaseCamps/${tripBaseObj.id}`, putOptions)
}

