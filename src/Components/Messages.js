import React from "react";
import { getLocalStorageItem, setLocalStorageItem } from "../functions/functions";
import { Message } from "../data/chat";

/*

  Компонент Messages показывает список сообщений и создает сообщение.
   В компоненте реалезованы:
   * Показывает список сообщений из локального хранилища.
   * ввод текста и отправка (все данные записываются в локальное хранилище)
   Алгоритм:
   App отправляет название активного чата--> Messages рендерит список сообщений активного чата а так же выделяет сообщения данного пользователя--> пользователь вводит сообщение --> сообщение сохранаяется в хранилище--> Messages рендерит данные из хранилища.
*/

class Messages extends React.Component{
  constructor(props){
    super(props)
    this.scroll = React.createRef();
    this.chatName = this.props.chatName
    this.state = {
      textValue : '',
    }
  }
  // автомотически скролит сообщения вниз при открытии сообщений
  componentDidMount(){
    let elemHeight = this.scroll.current.clientHeight;
    let elemScrollHeight = this.scroll.current.scrollHeight;
    this.scroll.current.scrollTop = elemScrollHeight - elemHeight;
  }
  // автомотически скролит сообщения вниз при вводе нового сообщения
  componentDidUpdate(){
    let elemHeight = this.scroll.current.clientHeight;
    let elemScrollHeight = this.scroll.current.scrollHeight;
    this.scroll.current.scrollTop = elemScrollHeight - elemHeight;
  }
  // записывает текст с textarea при вводе
  createText=(e)=>{
    let text = e.target.value
    this.setState({
      textValue : text,
    })
  }
  // сохраняет текст в хранилище (вызывается при клике на "отправить")
  submitText=()=>{
    // если нет введенного текста возвраает false
    if(!this.state.textValue){
      return false;
    }
    
    let message = new Message(this.props.currentUserName, this.state.textValue)
    let dataChat = getLocalStorageItem(this.props.chatName);
    dataChat.push(message);
    setLocalStorageItem(this.props.chatName, dataChat)
    // после себя очищает textarea
    this.setState({
      textValue: '',
    })
  }



  render(){
    let chat =  getLocalStorageItem(this.props.chatName)
    let show = chat.map(elem=>{
      let logo = elem.user.substr(0,1)
      let currentUserName = this.props.currentUserName;
      let TypeClassName = "message";
      if(currentUserName === elem.user){
        TypeClassName = "message message__current-user"
      }

      return(
        <div className={TypeClassName} key={elem.date}>
          <div className="message__head">
            <div className="message__logo">
             {logo}
            </div>
            <span className="message__user">
              {elem.user}
           </span>
            <span className="message__date">
              {elem.date}
            </span>
          </div>
          <div className="message__text">
            {elem.text}
          </div>
        </div>
      )
    })

    return (
		<section className="messages">
    <div className="messages__top">
      <h2 className="messages__title">
        сообщения
      </h2>
    </div>
      <div className="messages__main" ref={this.scroll}>
      {show}
      </div>
    <div className="messages__form form">
      <textarea className="form__input" rows="3" onInput={this.createText} value={this.state.textValue}></textarea>
      <button className="form__submit" onClick={this.submitText}>
        enter
      </button>
    </div>
  </section>
    )
  }
}

export default Messages;
