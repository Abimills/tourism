import React, { useState } from 'react'
import './Hotels.css'
import {hotels} from '../../hotels.js'
const Hotels = () => {
const  [data,setData] = useState(hotels)

  const remove= (id) => {
    let newData =data.filter(hotel => hotel.id !== id )
      setData(newData);
  }
if(data.length < 1){

  return <div className="no-hotels">

    <h1>OOPS!!!  NO HOTELS TO SHOW</h1>
  </div>

}
  return (
    <section className="hotels">
        <div className="hotel">
      {
data.map(hotel =>{
    const {id,img,title,status,price,description} = hotel;
    return (
        <article className="hotel-tour">

<img src={img} alt={title} className="hotel-img" />
<div className="written-content">
  
    <div className="title-price">

    <h3>{title}</h3>
   
    <h4>{price}</h4>
    </div>
       <p className='explain'> {description}</p>
 
<p className={status ==='closed'? 'status red' : 'status'}>{status}</p>

</div>
<div className="btns">


<button className="not-interested" onClick={() => remove(id)}>
    Not Interested
</button>
<button className="book-now">
   Book Now
</button>
</div>
        </article>
    )
})
      }
        </div>
    </section>
  )
}

export default Hotels