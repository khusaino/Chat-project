function Authorization(props){
  return (
    <div className="authorization">
      <button className="login" onClick={props.login}>
        войти
      </button>
      <button className="register" onClick={props.register}>
        зарегестрироватся
      </button>
    </div>
  )
}
export default Authorization