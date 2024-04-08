import React, {useState} from 'react'

export default function Hero(props) {
  const handleUpClick =()=>{
    let uppercasetext=text.toUpperCase()
    setText(uppercasetext)
  }
  const handledownClick =()=>{
    let uppercasetext=text.toLowerCase()
    setText(uppercasetext)
  }
  const handleclearClick =()=>{
    setText("")
  }
  const handleOnChange =(event)=>{
    setText(event.target.value);
  }
  const speak =()=>{
    let ms=new
    SpeechSynthesisUtterance();
    ms.text=text;
    window.speechSynthesis.speak(ms);
  }
  const handleReverse=(event)=>{
    let strArr=text.split('');
    strArr =strArr.reverse();
    let newText =strArr.join('');
    setText(newText)
  }
  const handleCopy=()=>{
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleExtraSpace=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  const [text, setText] = useState('');

  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
<div className="mb-3"> 
  <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="5" ></textarea>
  <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to upperCase</button>
  <button className="btn btn-primary my-3 mx-1" onClick={handledownClick}>Convert to lowerCase</button>
  <button className="btn btn-primary my-3 " onClick={handleclearClick}>Clear</button>
  <button className="btn btn-primary my-3 mx-1" onClick={speak}>speak</button>
  <button className="btn btn-primary my-3 " onClick={handleReverse}>Reverse</button>
  <button className="btn btn-primary my-3 mx-1 " onClick={handleCopy}>Copy Text</button>
  <button className="btn btn-primary my-3 " onClick={handleExtraSpace}>Remove Extra Space</button>
</div>
    </div>
    <div className="container my-5">
      <h1>More on your texts!</h1>
      <ul>
      <li>your text have <strong>" {text.length} "</strong>characters.</li>
      <li>your text have <strong>" {(text.split(" ").length)-1 }"</strong> words.</li>
      <li>It will take<strong>" {0.008 *(text.split(" ").length-1) } "</strong>minutes to read.</li>
      <li><h5>Your text preview :</h5>
      <p>{text}</p></li>
      </ul>
    </div>
    </>
  )
}
