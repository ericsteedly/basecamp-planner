export const getUserByEmail = async (email) => {
    return await fetch(`http://localhost:8088/users?email=${email}`).then(
        (res)=>res.json())
}


export const getUserById = async (id) => {
    return await fetch(`http://localhost:8088/users/${id}?_expand=state`).then(
        (res)=>res.json()
    )
}


export const postNewUser = async (userObj) => {
    const postOptions = {
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify(userObj)
    }
    return await fetch("http://localhost:8088/users", postOptions)
}


export const editUser = async (userObj) => {
    const putOptions = {
        method:"PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(userObj)
    }
    return await fetch(`http://localhost:8088/users/${userObj.id}`, putOptions)
}