export const getUserByEmail = (email) => {
    return fetch(`http://localhost:8088/users?email=${email}`).then((res)=>res.json())
}

export const postNewUser = (userObj) => {
    const postOptions = {
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify(userObj)
    }
    return fetch("http://localhost:8088/users", postOptions)
}