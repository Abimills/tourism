import React from 'react'
import './Destinations.css'

const Destinations = () => {
  return (
    <section className="destination">
        <div className="tours">
            <img src="https://wallpaperaccess.com/full/1128280.jpg" alt="canada" className="canada-img" />
           
           <h1 className="discover"> Discover a Better Way to Travel</h1>
           <div className="container">
             <div className='flights-container'>
            <div className="flights">
             <h1>
              
              <span className='h1'>

               Flights
              </span>
              <br />
               
                to  
               <span className='country'>
               Australia 

               </span>

              <br />  
              for <span className='money'>
                
                 $1050
                </span> 

              </h1> 
              <h3> Book Now</h3>  
              <p>This is an exclusive travell guidance donot take it for granted,</p>


            </div>
            <div className="flights">
             <h1>
              
              <span className='h1'>

               Flights
              </span>
              <br />
               
                to  
               <span className='country'>
               Iceland 

               </span>

              <br />  
              for  <span className='money'>
                
                 $700
                </span> 

              </h1> 
              <h3> Book Now</h3>  
              <p>This is an exclusive travell guidance donot take it for granted,</p>


            </div>
            <div className="flights">
             <h1>
              
              <span className='h1'>

               Flights
              </span>
              <br />
               
                to  
               <span className='country'>
               Singapore 

               </span>

              <br />  
              for  <span className='money'>
                
                 $550
                </span> 

              </h1> 
              <h3> Book Now</h3>  
              <p>This is an exclusive travell guidance donot take it for granted,</p>


            </div>
            <div className="flights">
             <h1>
              
              <span className='h1'>

               Flights
              </span>
              <br />
               
                to  
               <span className='country'>
               Thailand 

               </span>

              <br />  
              for <span className='money'>
                
                 $900
                </span> 

              </h1> 
              <h3> Book Now</h3>  
              <p>This is an exclusive travell guidance donot take it for granted,</p>


            </div>
            </div>
           </div>


           <div className="book">
            <h1 className="book-header"> Book a flight</h1>
            <input type="text" className="first" placeholder='Start Destination'/>
            <input type="text" className="second"placeholder='End Destination' />

            <button className="check-btn">Check</button>
           </div>
          
        </div>
    </section>
  )
}

export default Destinations