import React from "react";
import { getLocalStorageItem } from "../functions/functions";

/* 
  
  Компонент ChatRooms показывает список комнат, расположен с право и позволяет переключатся между чатами.
  Список реалезован элементами, по этому каждому элементу требуется своя отдельная функция.
  В компоненте реалезованы:
    * вычисление количества пользователей.
    * выдиление активного чата.(состояние берется из родиделя)
  
  Сама функция переключения чата поднята в родитльский элемент App
*/

class ChatRooms extends React.Component{

  //вычисляет количество пользователей, в параметре указан ключь
  numberOfAllUsers=(localStorageKey)=>{
    let arr = getLocalStorageItem(localStorageKey);
    let result = Object.keys(arr);
    return result.length
  }

  // выдиление активного чата. для каждго чата своя функция
  // вызываются в className, this.props.activeChat берется с состояния родительского компонента App
  showFirstActiveChat=()=>{
    if(this.props.activeChat === 'chat1'){
      return "chat-room active"
    }
    else{
      return 'chat-room'
    }
  }
  showSecondActiveChat=()=>{
    if(this.props.activeChat === 'chat2'){
      return "chat-room active"
    }
    else{
      return 'chat-room'
    }
  }

  render(){
    let num = this.numberOfAllUsers('users')

    return (  
		<section className="chat-rooms ">
    <div className="chat-rooms__top">
      <h2 className="chat-rooms__title">
        чат комнаты
      </h2>
    </div>
    <div className="chat-rooms__main" >
      <div className={this.showFirstActiveChat()} onClick={this.props.choiceFirstchat}>
        <div className="chat-room__title">
          chat 1
        </div>
        <div className="chat-room__users">
          {num} users
        </div>
      </div>
      <div className={this.showSecondActiveChat()} onClick={this.props.choiceSecondChat}>
        <div className="chat-room__title">
          chat 2
        </div>
        <div className="chat-room__users">
          {num} users
        </div>
      </div>
    </div>
  </section>
    )
  }
}

export default ChatRooms 
