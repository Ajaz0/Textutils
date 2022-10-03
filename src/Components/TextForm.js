import React, {useState} from 'react'

export default function TextForm(props) {

    const handleLwclick =()=>{
        let Lowertext=text.toLowerCase();
        setText(Lowertext)
    }

    
    const handleclearclick =()=>{
        let Newtext=" ";
        setText(Newtext)
    }
    
    const handleupclick = ()=>{
        let Newtext = text.toLocaleUpperCase();
        setText(Newtext)
    }
    
    const handleonchange=(event)=>{
        
        setText(event.target.value)

    }

    const handelCopy=()=>{
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    
    const handelExtraSpace=()=>{
        let Newtext = text.split(/[ ]+/);
        setText(Newtext.join(" "))
    }
    
    // const Firstlettertouppercase=() => {
    //     var text = document.getElementById("mybox");
    //     // var x = document.getElementById("div");
    //     // var string = text.value;
    //     text = text[0].toUpperCase() + text.slice(1);
    //     setText(text.join(""))
    //   }
    


    const [text, setText] = useState("");
    //   text="new text"; worng Way
    //   settext("new text"); Correct Way
    return (
    <div className="Containers" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.headline}</h1>
        <div className="mb-3">
       
            <textarea className="form-control"style={{backgroundColor: props.mode==='dark'?'gray':'white',
            color: props.mode==='dark'?'white':'#042743'}} value={text} onChange={handleonchange} id="mybox" rows="8"></textarea>
            
        </div>
        
            <button className="btn btn-primary mx-1"  onClick={handleupclick} >Convert To UpperCase</button>

            <button className="btn btn-primary mx-1" onClick={handleLwclick} >Convert To LowerCase</button>
            <button className="btn btn-primary mx-1"  onClick={handleclearclick} >Clear Text</button>
            <button className="btn btn-primary mx-1"  onClick={handelCopy} >Copy Text</button>
            <button className="btn btn-primary mx-1"  onClick={handelExtraSpace} >Word Spacing Remover</button>
        
            {/* <button className="btn btn-primary mx-1"  onClick={Firstlettertouppercase} >First Letter upper case</button> */}

        <div className="container my-3"style={{backgroundcolor: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your Text Summary Here</h2>
            <p>{text.split(" ").length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Somthing Above Textbox-To Preview Here"}</p>

        </div>

    </div>
  )
}
