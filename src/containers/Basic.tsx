/**
 * @file basic demos demonstrating how to use typescript in react
 */

import React from 'react'

interface greetProps {
  name: string,
  message?: string
}

function Greet({name, message = 'Welcome!'}: greetProps) {
  return (
    <>
      <strong>Hello, {name}!</strong>&nbsp;{message}
    </>
  ) 
}



export default function() {
  return (
    <>
      <h1>Basic Demo</h1>
      <Greet name="Jack" message="Welcome Back!" />
    </>
  )
}