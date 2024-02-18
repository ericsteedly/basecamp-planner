import { useEffect, useState } from "react"
import { editUser, getUserByEmail, getUserById } from "../../services/userService"
import { getStates } from "../../services/tripService"
import { useNavigate } from "react-router-dom"
import { Button, TextField } from "@mui/material"

export default function EditProfile({ currentUser }) {
const navigate = useNavigate()

    const [states, setStates] = useState([])
    const [userObj, setUserObj] = useState({
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
        stateId: 0
    })
    const [originalEmail, setOriginalEmail] = useState('')
  

    const handleInput = (event) => {
        const copy = {...userObj}
        copy[event.target.name] = event.target.value
        setUserObj(copy)
    }

    const updateUser = () => {
        const newUserObj = {
            id: currentUser.id,
            firstName: userObj.firstName,
            lastName: userObj.lastName,
            email: userObj.email.toLocaleLowerCase(),
            stateId: userObj.stateId
        }
        editUser(newUserObj).then(()=>{
            navigate("/profile")
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

            getUserByEmail(userObj.email).then((res)=>{
                if(res.length > 0 && res[0].email !== originalEmail){
                    window.alert("Account with this email already exists")
                } else {
                    updateUser()
                }
            })
        }
    

    useEffect(()=>{
        getUserById(currentUser.id).then((res)=>{
            setUserObj(res)
            setOriginalEmail(res.email)
        })

        getStates().then((res)=>{
            setStates(res)
        })

    }, [currentUser])

    return (
        <div className="editProfile-main-container">
            <form className="editProfile-form" onSubmit={handleSubmit}>
                <h1 className="editProfile-header">Edit Profile</h1>
                    <div className="form-group">
                            <TextField 
                                className="form-control" 
                                label="First Name"
                                variant="outlined"
                                color="warning"
                                focused
                                required
                                name="firstName"
                                value={userObj.firstName}
                                onChange={handleInput}
                            />
                    </div>
                    <div className="form-group">
                            <TextField 
                                className="form-control" 
                                label="Last Name"
                                variant="outlined"
                                color="warning"
                                focused
                                required
                                name="lastName"
                                value={userObj.lastName}
                                onChange={handleInput}
                            />
                    </div>
                    <div className="form-group">
                            <TextField 
                                className="form-control"
                                type="email"
                                label="Email"
                                name="email"
                                required
                                variant="outlined"
                                color="warning"
                                focused
                                value={userObj.email}
                                onChange={handleInput}
                            />
                    </div>
                    <div className="form-group">
                        <label><b>Home State:</b> &nbsp; </label>
                        <select 
                            className="editProfile-state-dropdown" 
                            name="stateId"
                            onChange={handleInput}
                            >
                            <option value={userObj.stateId} >{userObj.state?.name}</option>
                            {states.map((state) => {
                                return (
                                    <option key={state.id} value={state.id}>{state.name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="editProfileForm-btn-container">
                        <Button 
                            className="editProfile-save-btn" 
                            type="submit"
                            variant="contained"
                            sx={{
                                margin: 1,
                                boxShadow: 3,
                                backgroundColor: '#8A8A8A',
                                color: 'white',
                                ":hover": {
                                    backgroundColor: '#A1A1A1',
                                    color: 'white'
                                }
                            }}
                        >
                        Save
                        </Button>
                    </div>
            </form>
        </div>
    )
}