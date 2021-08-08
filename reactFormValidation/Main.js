import React, {useState} from 'react'

const Main = () => {
        // state   //func to update state (whatever we pass in as an arg, in our case e.target.value)
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setcPassword] = useState('');

  const [usernameErr, setUsernameErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [cPasswordErr, setcPasswordErr] = useState('');

  const [uColor, setuColor] = useState('');
  const [eColor, seteColor] = useState('');
  const [pColor, setpColor] = useState('');
  const [cpColor, setcpColor] = useState('');

  const validate = () => {
    if(username.length > 7) {
      setUsernameErr('');
      setuColor('green');
    } else {
      setUsernameErr('Username must be at least 8 characters long');
      setuColor('red');
    }
    if(email.includes('@')) {
      setEmailErr('');
      seteColor('green');
    } else {
      setEmailErr('Please enter a valid email');
      seteColor('red');
    }
    let re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if(re.test(password)) {
      setPasswordErr('');
      setpColor('green');
    } else {
      setPasswordErr('Minimum 8 characters, at least 1 letter, 1 number and 1 special character');
      setpColor('red');
    }
    if(cPassword === password && cPassword !== '') {
      setcPasswordErr('');
      setcpColor('green');
    } else {
      setcPasswordErr('Your passwords do not match');
      setcpColor('red');
    }
  }

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">

            <h1>Form Validation</h1>

            <input type="text" placeholder="username" className="form-control" style={{borderColor: uColor}}
            value={username} onChange={e => {setUsername(e.target.value)}} 
            />
            <small>{usernameErr}</small>

            <input type="text" placeholder="email" className="form-control" style={{borderColor: eColor}} 
            value={email} onChange={e => {setEmail(e.target.value)}}
            />
            <small>{emailErr}</small>

            <input type="text" placeholder="password" className="form-control" style={{borderColor: pColor}} 
            value={password} onChange={e => {setPassword(e.target.value)}}
            />
            <small>{passwordErr}</small>

            <input type="text" placeholder="confirm password" className="form-control" style={{borderColor: cpColor}} 
            value={cPassword} onChange={e => {setcPassword(e.target.value)}}
            />
            <small>{cPasswordErr}</small>

            <button className="btn btn-success" onClick={validate}>SUBMIT</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
