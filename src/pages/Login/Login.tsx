function Login() {
    

    return (
        <section>
            <h1>Login</h1>

            <form >
                <div>
                    <label htmlFor="username">Usuario</label>
                    <input type="text" name="username" />
                </div>

                <div>
                    <label htmlFor="senha">senha</label>
                    <input type="password" name="senha" />
                </div>

                <button>Entrar</button>
            </form>
        </section>
    )
}

export default Login;