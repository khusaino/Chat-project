import React from "react";
import { getLocalStorageItem } from "../functions/functions";

class Users extends React.Component{

  // левый блок с списком пользователей
  // данные берутся с кеша, затем происходит перебор с помощью map() который возвращает массив с элементами

  render(){
    let cache = getLocalStorageItem('users')

    let result = Object.keys(cache).map(user=>{
      let logo = cache[user].name.substr(0,1);//1ый символ для логотипа пользоватля

      return(
        <div className="user" key={cache[user].name}>
           <div className="user__logo">
            {logo}
          </div>
          <span className="user__name">
            {cache[user].name}
          </span>
        </div>
      )
    })
  
    return ( 
		<section className="users">
      <div className="users__top">
       <h2 className="users__title">
          пользователи
        </h2>
      </div>
      <div className="users__main"> 
        {result}
      </div>
    </section>
    )
  }
}

export default Users 
