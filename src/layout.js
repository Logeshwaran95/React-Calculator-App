import React,{useState} from 'react'
import './layout.css';
import Output from './output';


const Layout = (props) => {
    let [input, setinput] = useState('0')
    let [result, setresult] = useState('')

    const handleclick = (e) => {
     
    const value = e.target.value;
    if(value === "="){
        if(input !== ' '){
            let res = ''
            try{
                res = eval(input)
            }
            catch(err){
                setresult("math error")
            }
            if(res === undefined){
                setresult("math error")
            }
            else{
                setresult(input + "=")
                setinput(res)
            }
        }
    }
   else if(value === 'C'){
       setinput('0')
       setresult('')
   }
   else if (value === "DEL"){
       let str = input
       str = String(str).substr(0,str.length-1)
       setinput(str)
   }
   else if(input === '0'){
       setinput(value)
   }
   else{
       setinput(input +=value)
   }
    }

        return (
            <div className="frame">
                <div className="calculator">
                    <Output user={input} answer={result}/>
                    <br></br>
                    <div className="keys">
                     <input type="button" value={'C'} className="button clear" onClick={handleclick}></input>
                     <input type="button" value={'DEL'} className="button clear" onClick={handleclick}></input>
                     <input type="button" value={'%'} className="button operator" onClick={handleclick}></input>
                     <input type="button" value={'/'} className="button operator" onClick={handleclick}></input>
                     
                     <input type="button" value={'7'} className="button " onClick={handleclick}></input>
                     <input type="button" value={'8'} className="button " onClick={handleclick}></input>
                     <input type="button" value={'9'} className="button " onClick={handleclick}></input>
                     <input type="button" value={'*'} className="button operator" onClick={handleclick}></input>

                     <input type="button" value={'4'} className="button " onClick={handleclick}></input>
                     <input type="button" value={'5'} className="button " onClick={handleclick}></input>
                     <input type="button" value={'6'} className="button " onClick={handleclick}></input>
                     <input type="button" value={'-'} className="button operator" onClick={handleclick}></input>

                     <input type="button" value={'1'} className="button " onClick={handleclick}></input>
                     <input type="button" value={'2'} className="button " onClick={handleclick}></input>
                     <input type="button" value={'3'} className="button " onClick={handleclick}></input>
                     <input type="button" value={'+'} className="button operator" onClick={handleclick}></input>

                     <input type="button" value={'0'} className="button " onClick={handleclick}></input>
                     <input type="button" value={'.'} className="button operator" onClick={handleclick}></input>
                     <input type="button" value={'='} className="equal-sign" onClick={handleclick}></input>
                    </div>
                </div>
            </div>
        )
    };
    export default Layout;
