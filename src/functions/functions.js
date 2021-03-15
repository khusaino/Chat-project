

export const checkAvtorization = function (data, name, password){
  if(data[name] === undefined || data[name].password !== password){
    alert('не верные данные')
    return false;
  }
  alert('добро пожаловать')
  return true
}

export const checkRegisisterName = function(data, name){
  if(data[name]!== undefined ){
    alert("выберите другое имя")
    return true;
  }
  alert('добро пожаловать')
  return false;
}

export const createUserName = function (){
  let name = prompt('введите имя');
  if(name === null){
    return false
  }
  else if(name.trim()===""){
    alert('введите корректное имя')
    createUserName()
  }
  else{
    return name;
  }
}

export const createUserPassword = function (){
  let password = prompt('введите пароль');
  if(password === null){
    return false
  }
  else if(password.trim()===""){
    alert('введите корректный пароль')
    createUserPassword()
  }
  else{
    return password;
  }
}

export const getLocalStorageItem = function(localStorageKey){
  return JSON.parse(localStorage.getItem(localStorageKey))
}

export const setLocalStorageItem = function(localStorageKey, obj){
  localStorage.setItem(localStorageKey, JSON.stringify(obj))
}

export const fillsTheCache=(localStorageKey, data)=>{
  if(!getLocalStorageItem(localStorageKey)){
    setLocalStorageItem(localStorageKey, data)
  }
}