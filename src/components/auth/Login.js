import { useNavigate } from "react-router-dom"
import "./Login.css"
import { useState } from "react"
import { getUserByEmail } from "../../services/userService"
import { Button, Link, TextField } from "@mui/material"

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
                <form className="login-form" onSubmit={handleSignIn}>
                    <h1 className="login-header">Welcome To BaseCamp Planner!</h1>
                    <h4 className="login-statement">Log in to start planning your adventure</h4>
                        <div className="form-group">
                            <TextField
                                className="form-control"
                                type="email"
                                label="Email"
                                variant="outlined"
                                required
                                color="warning"
                                focused
                                value={email}
                                placeholder="Email Address"
                                onChange={(e)=> setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                                <Button 
                                    className="login-btn"
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
                                Sign in
                                </Button>
                        </div>
                </form>
            <section className="login-register-container">
                <div className="register-link">
                    No account yet? &nbsp;
                    <Link href="/register" >
                        <b>Register here!</b>
                    </Link>
                </div>
            </section>
        </div>
    )
}

