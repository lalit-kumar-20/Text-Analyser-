import React, {useState} from 'react'


export default function TextForm(props) {

    const handleonChange=(event)=>{
        //console.log("On Change")
         setText(event.target.value)
    }
    const handleUppclick=(event)=>{
       // console.log("Uppercase was Clicked: " + text)
        let newText=text.toUpperCase()
        setText(newText)
        if(text.length===0)
        props.showAlert("Please Enter Text","Failed")
        else
        props.showAlert("Converted to Uppercase!","Success")
    }
    const handleLOclick=(event)=>{
        // console.log("Uppercase was Clicked: " + text)
         let newText=text.toLowerCase()
         setText(newText)
         if(text.length===0)
         props.showAlert("Please Enter Text","Failed")
         else
         props.showAlert("Converted to Lowercase!","Success")
     }
     const handleERclick=(event)=>{
        setText('')
        if(text.length===0)
        props.showAlert("Please Enter Text","Failed")
        else
        props.showAlert("Text Cleared","Success")
        
     }
     const handleCopy=(event)=>{
        // console.log("Uppercase was Clicked: " + text)
         var text=document.getElementById('myBox');
         text.select();
         navigator.clipboard.writeText(text.value);
         if(text.length===0)
         props.showAlert("Please Enter Text","Failed")
         else
         props.showAlert("Text Copied","Success")
     }
     const handleExtraSpace=(event)=>{
        // console.log("Uppercase was Clicked: " + text)
         let newText=text.split(/[ ]+/);
         setText(newText.join(" "));
         if(text.length===0)
         props.showAlert("Please Enter Text","Failed")
         else
         props.showAlert("Extra Space has been removed!","Success")
     }

    const [text,setText] = useState('')
     // const [text,setText] = useState('Enter the state') ///// it is a state
    //text="new Text"; // wrong way to change the state
   // setText("new Text"); // correct way to change the state
  return (
    <>
    <div className='container'npm start
     >
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label"></label>
        <h2>{props.email}</h2>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" style={{backgroundColor: props.mode==='dark'?'black':'white',color: props.mode==='light'?'black':'white'}}/>
      </div>
     <div className='container'>
     <h1>{props.Heading}</h1>
     <div className="mb-3">
      <textarea className="form-control" value={text}  onChange={handleonChange}  style={{backgroundColor: props.mode==='dark'?'black':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
     </div>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-1'  onClick={handleUppclick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-1'  onClick={handleLOclick}>Convert to Lowercase</button>
        <button disabled={text.length==0}className='btn btn-primary mx-2 my-1'  onClick={handleERclick}>Click to EraseText</button>
        <button disabled={text.length===0}className='btn btn-primary mx-2 my-1'  onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-1'  onClick={handleExtraSpace}>Remove Extra Space</button>
      </div>
   </div>
    <div className="container my-3"    style={{backgroundColor:props.mode==='dark'?'black':'white',color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
        <p> Time taken to read these Words Slowly is: {.008*text.split(" ").length} </p>
        <h2>Preview  </h2>
        <p>{text.length>0 ? text:'Enter Something to Preview'}</p>
    </div>
    </>
  )
}
