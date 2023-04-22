import React from 'react';
import './Signin.css';
const Signin = () => {
  return (
    <section className="signin">
<div className="container-signin">

<h1 className='signin-h1'>SIGN IN</h1>


<form  className="signin-form">


<br />
<label htmlFor="username" className='label'> USERNAME</label>
<br />
<input type="text" id='name' name='username' className='one username' placeholder='username'/>
<br />
<label htmlFor="name" className='label'> PASSWORD</label>
<br />
<input type="password" id='name' name='name' className='one password' placeholder='password'/>
<br />

<br />
<button className="one create" type='submit'>
  SIGN IN
</button>
</form>
<p className='check-it'>here you can check it</p>
<div className="line"></div>
</div>
<img src="http://wallpaperset.com/w/full/b/7/b/310323.jpg" alt="register background" className="background-register" />
    </section>
  )
}

export default Signin