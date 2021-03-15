import React from 'react';
import './App.css';
import Header from './Components/Header';
import Users from './Components/Users';
import Messages from './Components/Messages';
import СhatRooms from './Components/ChatRooms';
import Footer from './Components/Footer';
import {users, User} from './data/users';
import {chat1, chat2} from "./data/chat";
import {
  checkAvtorization,
  checkRegisisterName, 
  createUserName, 
  createUserPassword,
  getLocalStorageItem,
  setLocalStorageItem,
  fillsTheCache,
}  from './functions/functions'

class App extends React.Component{
  
  constructor(props){
    super(props)
    // первые 3 - это ключи от хранилищ
    this.usrsCacheKey = 'users'
    this.chat1CacheKey = 'chat1'
    this.chat2CacheKey = 'chat2'
    //  состояние авторизации, имя пользователя, ключь от активного чата 
    this.state={
      authorized: false,
      currentUserName: '',
      activeChat: this.chat2CacheKey,
    }
    
  }

// выполняет вход
  login=()=>{
    let name = createUserName(); //в Readme
    if(!name){
      return false
    }
    let password = createUserPassword();//в Readme
    if(!password){
      return false;
    }
    
    let cache = getLocalStorageItem('users')//в Readme
    let result = checkAvtorization(cache, name, password)//в Readme
    if(result){
      this.setState({
        authorized: true,
        currentUserName: name,
      })
    }
  }

 // выполняет регистрацию
  register=()=>{
    let newName = createUserName();//в Readme
    if(!newName){
      return false
    }
    let newPassword = createUserPassword();//в Readme
    if(!newPassword){
      return false;
    }
    
    let cache = getLocalStorageItem('users')//в Readme
    let result = checkRegisisterName( cache, newName)//в Readme
    if(result){
      this.register()
    }
    else{
      let user = new User(newName, newPassword)
      cache[newName] = user;
      setLocalStorageItem('users',cache)//в Readme
      this.setState({
        authorized: true,
        currentUserName: newName,
      })
    }
  }

  // выход 
  logout=()=>{
    this.setState({
      authorized: false,
      currentUserName: ''
    })
  }

  // выбор первого чата
  choiceFirstchat=()=>{
    this.setState({
      activeChat: this.chat1CacheKey
    })
  }
  // выбор второго чата
  choiceSecondChat=()=>{
    this.setState({
      activeChat: this.chat2CacheKey
    })
  }
  


  render(){
    // при загрузке автомат. заполняет память данными 
    fillsTheCache(this.usrsCacheKey, users);//в Readme
    fillsTheCache(this.chat1CacheKey, chat1);//в Readme
    fillsTheCache(this.chat2CacheKey, chat2);//в Readme

    // загружает контент в зависимости от состояния регестрации
    let main = this.state.authorized 
    ?   <>
        <Users/>
        <Messages 
          chatName={this.state.activeChat}
          currentUserName={this.state.currentUserName}/>
        <СhatRooms 
          choiceFirstchat={this.choiceFirstchat}
          choiceSecondChat={this.choiceSecondChat}
          activeChat={this.state.activeChat}/>
        </>
    : <div></div>
    
    return(
      <React.Fragment>
      <Header 
        authorized={this.state.authorized}
        currentUserName={this.state.currentUserName}
        login={this.login}
        register={this.register}
        logout={this.logout}
      />
      <div className="main">
        <div className="main__container">
          {main}
        </div>
      </div>
      <Footer/>
      </React.Fragment>
    )
  }
  
}

export default App;
