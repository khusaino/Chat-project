export const users = {
  "user1":{
    name: "user1",
    password: '12345'
  },
  "user2":{
    name: "user2",
    password: '12345'
  },
}

export function User (name, password){
  this.name = name
  this.password = password
}