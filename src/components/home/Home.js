import React, { useEffect, useState } from 'react'
import { tours } from '../../data'
import './Home.css';
import { Link } from 'react-router-dom'

const Home = () => {
    const [data,setData] = useState(tours);
    const [value,setValue] = useState(0);


    
    const checker = (num) => {
        
        if(num <0){
            return data.length-1
        }
     if(num > data.length -1){
            return 0;
        }
       
            return num;
        
        
    }
    
  
    useEffect(() => {
        let intervalTimer = setInterval(() => {
        setValue(checker(value + 1))
      },4000);
      return () =>{ clearInterval(intervalTimer)
    };


    },[value])
    
    return (
        <section className="home-section">
    <div className="home">
        {data.map((tour,index) => {
            const {img,id,title,desc,background,location} = tour;
            let position = 'tour next';
            if(value ===index){
                position= 'tour active';
            }
            if(value ==index-1 || index ===0 && index === data.length-1){
                position='tour last'
            }

return (
<>
<article className={ position} key={id}>
 

 <div className="image-container">

 <h4 className="title">{title}</h4>
 <div className="circles">

 <div className="circle"></div>
 <div className="circle "></div>
 <div className="circle brown"></div>
 </div>
 <img src={img} alt={title} className="tour-image" />


 </div>
 <div className="written-content">
 <h1 className="location">{location}</h1>
 <p className="desc">{desc}</p>

 <button className="show">
     Show More

 </button>



 <img src={background} alt={title} key={id} className="background-image" />
 </div>
</article>
</>

)
 

        })}
    
    
    
    </div>
    <img src="https://img.freepik.com/free-vector/black-friday-banner-with-dark-background-grunge_36662-748.jpg?t=st=1663932508~exp=1663933108~hmac=3bbe3c33a492f437b41f66870b2b1297b8c81a3199437cad43a047798ffdc2c8" alt="" className="lowerpart" />
    
   </section>
  )
}

export default Home