import { useNavigate } from "react-router-dom"
import "./Register.css"
import { useState } from "react"
import { getUserByEmail, postNewUser } from "../../services/userService"


export default function Register() {
    const navigate = useNavigate()

    const [newUser, setNewUser] = useState({
        firstName: '',
        lastName:'',
        email:''
    })

    const createUser = () => {
        postNewUser(newUser).then(()=>{
            navigate("/login")
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        getUserByEmail(newUser.email).then((res)=>{
            if(res.length > 0){
                window.alert("Account with this email already exists")
            } else {
                createUser()
            }
        })
    }

    const updateUser = (event) => {
        const userCopy = {...newUser}
        userCopy[event.target.id] = event.target.value
        setNewUser(userCopy)
    }

    return (
        <div className="register-main-container">
            <section className="register-form-container">
                <form className="register-form" onSubmit={handleSubmit}>
                    <h3>Create an account</h3>
                    <fieldset>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                id="firstName"
                                value={newUser.firstName}
                                placeholder="First Name"
                                required
                                onChange={updateUser} 
                            />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                id="lastName"
                                value={newUser.lastName}
                                placeholder="Last Name"
                                required
                                onChange={updateUser} 
                            />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="email"
                                id="email"
                                value={newUser.email}
                                placeholder="Email Address"
                                required
                                onChange={updateUser} 
                            />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <button 
                                className="register-btn"
                                type="submit"
                            >
                            Submit
                            </button>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    )
}

