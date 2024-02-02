import { Link, useNavigate } from "react-router-dom"
import "./Login.css"
import { useState } from "react"
import { getUserByEmail } from "../../services/userService"

export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")

    const handleSignIn = (event) => {
        event.preventDefault()

        getUserByEmail(email.toLocaleLowerCase()).then((res)=>{
            if (res.length === 1) {
                const user = res[0]
                localStorage.setItem(
                    "baseCamp-user",
                    JSON.stringify({
                        id: user.id
                    })
                )
                navigate("/")
            } else {
                window.alert("Invalid Email")
            }
        })
    }


    return (
        <div className="login-main-container">
            <section className="login-form-container">
                <form className="login-form" onSubmit={handleSignIn}>
                    <h1>Welcome To BaseCamp Planner!</h1>
                    <h4>Log in to start planning your adventure</h4>
                    <fieldset>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="email"
                                value={email}
                                placeholder="Email Address"
                                onChange={(e)=> setEmail(e.target.value)}
                            />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                                <button 
                                    className="login-btn"
                                    type="submit"
                                >
                                Sign in
                                </button>
                        </div>
                    </fieldset>
                </form>
            </section>
            <section className="login-register-container">
                <div className="register-link">
                    <Link to="/register">No account yet? Register here!</Link>
                </div>
            </section>
        </div>
    )
}

