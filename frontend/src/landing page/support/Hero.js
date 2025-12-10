import React from 'react';
function Hero() {
    return ( 
       <section className='container-fluid' id="supportHero">
        <div className='p-5' id='supportWrapper'>
            <h4> Support Portal</h4>
            <a href="">Track Tickets</a>
        </div>
        <div className=' row p-5 m-3' >
             <div className=' col-6 p-5 ' >
               <h1 className='fs-3'  style={{lineHeight:"1.5"}}>Search for an answer or browse help topics to create a ticket</h1>
               <input placeholder="E.g: how do I activate F&O"/><br/>
               <a href="" style={{lineHeight:"2.5",color:"white"}}>Track account Opening</a> &nbsp;&nbsp;
               <a href=""style={{lineHeight:"2.5",color:"white"}} >Track segment activation</a>&nbsp;&nbsp;
               <a href="" style={{lineHeight:"2.5",color:"white"}}>Intraday Margins</a>&nbsp;&nbsp;
               <a href="" style={{lineHeight:"2.5",color:"white"}}>Kite user manual</a>
             </div>
             <div className=' col-6 p-5 ml-5 ' >
              <h1 className='fs-3'>Featured</h1>
              <ol type="1.">
               <a href="" style={{lineHeight:"2.5",color:"white"}}><li>Current Takeover and Delisting - January 2025</li></a>
               <a href="" style={{lineHeight:"2.5",color:"white"}}><li>Latest Intraday leverages - MIS &CO</li></a>
               </ol>
             </div>
            
        </div>
       </section>
     );
}

export default Hero;