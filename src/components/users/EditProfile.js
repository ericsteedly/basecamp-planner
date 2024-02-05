import { useEffect, useState } from "react"
import { editUser, getUserByEmail, getUserById } from "../../services/userService"
import { getStates } from "../../services/tripService"
import { useNavigate } from "react-router-dom"

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
                <h1>Edit Profile</h1>
                <fieldset>
                    <div className="form-group">
                        <label>First Name:
                            <input 
                                className="form-control" 
                                type="text"
                                required
                                name="firstName"
                                value={userObj.firstName}
                                onChange={handleInput}
                            />
                        </label>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label>Last Name:
                            <input 
                                className="form-control" 
                                type="text"
                                required
                                name="lastName"
                                value={userObj.lastName}
                                onChange={handleInput}
                            />
                        </label>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label>Email:
                            <input 
                                className="form-control" 
                                type="email"
                                required
                                name="email"
                                value={userObj.email}
                                onChange={handleInput}
                            />
                        </label>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label>Home State:</label>
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
                </fieldset>
                <div className="editProfile-btn-container">
                    <button className="editProfile-save-btn" type="submit">Save</button>
                </div>
            </form>
        </div>
    )
}