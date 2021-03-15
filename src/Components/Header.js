import React from "react";
import Logo from './Logo'
import CurrentUser from './CurrentUser';
import Authorization from './Authorization';

/*
  компонент Header проверяет переданное родителем App состояние this.props.authorized и рендерит один из компонентов. 
*/

class Header extends React.Component{ 

//  показывает пользоателя или авторизоцию
  showStatePage=()=>{
    if (this.props.authorized){
      return <CurrentUser 
        currentUserName={this.props.currentUserName}
        logout={this.props.logout}
        />
    }
    return <Authorization
    login={this.props.login}
    register={this.props.register}/>
  }

 render(){
   return (  
	<header className="header">
  <div className="header__container">
    <Logo/>
    {this.showStatePage()}
  </div>
</header>
   )
 }
}

export default Header 
