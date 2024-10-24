
import React,{useState} from 'react'

export default function TextForm(props) {
  const [text,setText]=useState("")
    const ch=()=>{
        let newtext =text.toLocaleUpperCase()
        setText(newtext)
        console.log("click")
        props.showAlert("covereted to uppercase","success")


   }
   const low=()=>{
    let newtext=text.toLocaleLowerCase()
    setText(newtext)
    props.showAlert("covereted to lowercase","success")
   }
    
    const onChange=(event)=>{
        console.log("change")
        setText(event.target.value);
        
    }
    const clear=()=>{
      setText("")
    }
    const copy=()=>{
     navigator.clipboard.writeText(text)
     props.showAlert("copied to clipboard","sucess")
     
    }
    
  return (
    <>
    <div className='container'>
    <div className="mb-3">
        <h1>{props.title}</h1>
<textarea className="form-control" id="mybox" rows="8" value={text} onChange={onChange}></textarea>
</div>
<button className='btn btn-primary mx-1 my-1'onClick={ch}>UpperCase</button>

<button className='btn btn-primary mx-1 my-1'onClick={low}>LowerCase</button>
<button className='btn btn-primary mx-1 my-1'onClick={clear}>clear</button>
<button className='btn btn-primary mx-1 my-1'onClick={copy} id=''>copy</button>

    </div>
    <div className="container">
        <h1>Your Text Summary</h1> 

        <p> text words {text.split(" ").filter((element)=>{return element.length!==0}).length} text chracter is {text.length}</p>
        <p>{0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length} minutes required</p>
        <h1>preview</h1>
        <p>{text}</p>
        
    </div>
    </>
  )
}
