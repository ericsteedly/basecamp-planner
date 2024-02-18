import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { getUserByEmail, postNewUser } from "../../services/userService"
import { getStates } from "../../services/tripService"
import "./Register.css"
import { Button, TextField } from "@mui/material"


export default function Register() {
    const navigate = useNavigate()
    
    const [states, setStates] = useState([])
    const [newUser, setNewUser] = useState({
        firstName: '',
        lastName:'',
        email:'',
        stateId: 0
    })

    const createUser = (event) => {

        postNewUser(newUser).then(()=>{
            navigate("/login")
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if(newUser.stateId === 0) {
            window.alert("Please select a state!")
        } else {
            getUserByEmail(newUser.email).then((res)=>{
                if(res.length > 0){
                    window.alert("Account with this email already exists")
                } else {
                    createUser()
                }
            })
        }
    }

    const updateUser = (event) => {
        const userCopy = {...newUser}
        userCopy[event.target.id] = event.target.value
        setNewUser(userCopy)
    }

    useEffect(()=>{
        getStates().then((res)=>{
            setStates(res)
        })
    }, [])

    return (
        <div className="register-main-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <h3 className="register-header">Create an account</h3>
                    <div className="form-group">
                        <TextField
                            className="form-control"
                            label="First Name"
                            id="firstName"
                            required
                            variant="outlined"
                            color="warning"
                            focused
                            placeholder="First Name"
                            value={newUser.firstName}
                            onChange={updateUser} 
                        />
                    </div>
                    <div className="form-group">
                        <TextField
                            className="form-control"
                            label="Last Name"
                            id="lastName"
                            required
                            variant="outlined"
                            color="warning"
                            focused
                            placeholder="Last Name"
                            value={newUser.lastName}
                            onChange={updateUser} 
                        />
                    </div>
                    <div className="form-group">
                        <TextField
                            className="form-control"
                            type="email"
                            label="Email"
                            id="email"
                            required
                            variant="outlined"
                            color="warning"
                            focused
                            value={newUser.email.toLocaleLowerCase()}
                            placeholder="Email Address"
                            onChange={updateUser} 
                        />
                    </div>
                    <div className="form-group">
                        <select 
                            className="homeState-dropdown"
                            id="stateId"
                            required
                            value={newUser.stateId}
                            onChange={updateUser}
                        >
                            <option value={0}>Choose your home state!</option>
                            {states.map((state)=>{
                                return <option key={state.id} value={state.id}>{state.name}</option>
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <Button 
                            className="register-btn"
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
                        Submit
                        </Button>
                    </div>
            </form>
        </div>
    )
}

