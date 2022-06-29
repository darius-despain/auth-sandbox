import bcrypt from 'bcryptjs';
import React from 'react'

const Login = () => {

  const password = "password"

  const hashedPassword = bcrypt.hash(password, 10)
  // console.log(`salt: `, salt)
  // console.log(`hashedPW: `, hashedPassword)

  if(bcrypt.compare(password, hashedPassword)) {
    return (
      <>
       <p>You are logged in!</p>
      </>
    )

  } else {
    return (
    <p>Sorry, please register</p>
    )
  }


}

export default Login;