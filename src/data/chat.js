export const chat1 = [
  {
    user: 'user1',
    date: '20.02.21 12:21',
    text: 'hello world'
  },
  {
    user: 'world',
    date: '20.02.21 12:22',
    text: 'hi'
  },
]

export const chat2 = [
  {
    user: 'user1',
    date: '20.02.21 12:21',
    text: 'hello world'
  },
  {
    user: 'world',
    date: '20.02.21 12:22',
    text: 'hi'
  },
]

export const Message = function(user, text){
  this.user = user
  this.text = text
  let d = new Date();
  this.date = `${d.getDate()}.${d.getMonth()+1}.${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
}