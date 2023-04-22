import React from 'react'
import './Register.css'
const Register = () => {
  return (
    <section className="register">
<div className="container-register">

<h1 className='register-h1'>REGISTER</h1>
<h4 className='free'>ITS COMPLETELLY FREE</h4>

<form  className="register-form">

<label htmlFor="name" className='label'> NAME</label>
<br />
<input type="text" id='name' name='name' className='one name1'
placeholder='Your Full Name'/>
<br />
<label htmlFor="email" className='label'> EMAIL</label>
<br />
<input type="email" id='name' name='email' className='one email1'
placeholder='Email Adress'/>


<br />
<label htmlFor="name" className='label'> PASSWORD</label>
<br />
<input type="password" id='name' name='name' className='one password' placeholder='password'/>
<br />
<label htmlFor="name" className='label'>CONFIRM PASSWORD</label>
<br />
<input type="password" id='name' name='name' className='one password' placeholder='password'/>
<br />
<button className="one create" type='submit'>
    CREATE ACCOUNT
</button>
</form>
<p className='check-it'>here you can check it</p>
<div className="line"></div>
</div>
<img src="http://wallpaperset.com/w/full/b/7/b/310323.jpg" alt="register background" className="background-register" />
    </section>
  )
}

export default Register