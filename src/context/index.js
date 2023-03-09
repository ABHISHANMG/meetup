import React from 'react'

const LoginContext = React.createContext({
  username: '',
  topic: '',
  meetPage: false,
  errorMessage: 'Please enter your name',
  isInvalid: false,
  changeName: () => {},
  changeTopic: () => {},
  submitForm: () => {},
})

export default LoginContext
