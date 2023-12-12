// Write your code here

const Message = props => {
  const {isLogin} = props
  const text = isLogin ? 'Welcome User' : 'PleaseLogin'
  return <h1>{text}</h1>
}

export default Message
