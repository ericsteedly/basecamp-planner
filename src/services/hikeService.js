export const getHikesByBaseId = async (baseId) => {
    return await fetch(`http://localhost:8088/hikes?baseCampId=${baseId}`).then(
        (res)=>res.json()
    )
}

export const getHikeById = async (id) => {
    return await fetch(`http://localhost:8088/hikes/${id}`).then(
        (res)=>res.json()
    )
}

export const getTripHikes = async (tripBaseId) => {
    return await fetch(`http://localhost:8088/tripHikes?tripBaseCampId=${tripBaseId}`).then(
        (res)=>res.json()
    )
}

export const getHikeDetails = async (tripHikeid) => {
    return await fetch(`http://localhost:8088/tripHikes/${tripHikeid}?_expand=hike`).then(
        (res)=>res.json()
    )
}

export const deleteTripHike = async (tripHikeId) => {
    const deleteOptions = {
        method: "DELETE"
    }
    return await fetch(`http://localhost:8088/tripHikes/${tripHikeId}`, deleteOptions)
}

export const postTripHike = async (tripHikeObj) => {
    const postOptions = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(tripHikeObj)
    }
    return await fetch(`http://localhost:8088/tripHikes`, postOptions)
}