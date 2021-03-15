function CurrentUser(props){
  return (
    <div className="current-user" >
      <div className="current-user__name">
        {props.currentUserName}
      </div>
      <button className="logout" onClick={props.logout}>
        выйти
      </button>
    </div>
  )
}
export default CurrentUser