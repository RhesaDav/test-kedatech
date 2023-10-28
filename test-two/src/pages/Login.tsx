import '../styles/Login.scss'

function Login() {
    return (
        <div className='login-container'>
            <div className='contact-content'>
                <h1>Login</h1>
                <form action="">
                    <input type="email" placeholder='Input email...' />
                    <input type="password" placeholder='Input password...' />
                    <button>SUBMIT</button>
                </form>
            </div>
        </div>
    )
}

export default Login;