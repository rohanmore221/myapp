import React from 'react'

function About(props) {
//     const [mystyle,setMystle]=useState({
//     color:"black",
//     backgroundColor:"white"
//    })
let mystyle={
    color:props.mode==='dark'?'white':'black',
    backgroundColor:props.mode==='dark'?'grey':'white',

}
  
   
  return ( 
        <div className='container'style={mystyle}>
            <h1>About US</h1>
            <div className="accordion" id="accordionExample">
    <div className="accordion-item" style={mystyle}>
        <h2 className="accordion-header">
        <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Easy to use
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={mystyle}>
            <strong>easy to use </strong>
        </div>
        </div>
    </div>
    <div className="accordion-item" style={mystyle}>
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            free to use
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={mystyle}>
            <strong>it is tootally free</strong>
        </div>
        </div>
    </div>
    <div className="accordion-item" style={mystyle}>
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            features
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={mystyle}>
            <strong>to upper case word counter</strong>
        </div>
        </div>
    </div>
    </div>
           </div>
  )
}

export default About