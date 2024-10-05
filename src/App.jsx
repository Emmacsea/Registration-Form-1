import { useState } from 'react'
import {Registration} from './Components/Registration'

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');


  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  }


  const successSubmit = () => {
    window.alert(`Your have been uploaded`)
  }

  

  return (
    <>
      <Registration
      name={name}
      emailaddress={email}
      password={password}
      confirmpassword={confirmpassword}
      onChangeName={handleName}
      onChangeEmailaddress={handleEmail}
      onChangePassword={handlePassword}
      onChangeConfirmPassword={handleConfirmPassword}
      onSubmitDetails={successSubmit}
      />
    </>
  )
}

export default App
