import { useState } from 'react';
import './App.css';

function App() {
  const [Interest, setInterest] = useState(0)
  const [Principle, setPrinciple] = useState('')
  const [Rate, setRate] = useState('')
  const [Year, setYear] = useState('')
  const [isPrinciplevaild, setisPrinciplevaild] = useState(true)
  const [isRatevaild, setisRatevaild] = useState(true)
  const [isYearvaild, setisYearvaild] = useState(true)

  const vaildInput = (e) =>{
    const {value,name} = e.target
    if(!! value.match(/^[0-9]*.?[0-9]+$/)){
      if(name == 'Principle'){
        setisPrinciplevaild(true)
        setPrinciple(value)
      }else if(name == 'Rate'){
        setisRatevaild(true)
        setRate(value)
      }else{
        setisYearvaild(true)
        setYear(value)
      }
    }else{
      if(name == 'Principle'){
        setisPrinciplevaild(false)
        setPrinciple(value)
      }else if(name == 'Rate'){
        setisRatevaild(false)
        setRate(value)
      }else{
        setisYearvaild(false)
        setYear(value)
      }
    }
  }
  const HandleCalculation = () =>{
    setInterest(Principle*Rate*Year/100)
  }
  const Reset = () =>{
    setInterest('0')
    setPrinciple('')
    setRate('')
    setYear('')
    setisPrinciplevaild(true)
    setisRatevaild(true)
    setisYearvaild(true)
    
  }
  return (
    <>
      <div className="App">
       <div className='container'>
          <h1>Simple Interest</h1>
          <p>Calculate your simple interest</p>
          <div className='con rounded'>
           ${Interest}
         </div>
        <div className='pm'>
           <input type='text' onChange={(e) => vaildInput(e)} value={Principle} name='Principle' placeholder='Principle Amount' className='rounded mt-4 prin'></input>
        </div>  
        {
          !isPrinciplevaild &&
          <div className='text-danger ms-3'>
              <p>
                Invaild User Input
              </p>
          </div>
        }       
        <div className='rt'>
         <input type='text' onChange={(e) => vaildInput(e)} value={Rate} name='Rate' placeholder='Rate Of Interest(p.a%)' className='rounded mt-4 prin'></input>
         </div>
         {
          !isRatevaild &&
          <div className='text-danger ms-3'>
              <p>
                Invaild User Input
              </p>
          </div>
        }
         <div className='tp'>
         <input type='text' onChange={(e) => vaildInput(e)} value={Year} name='Year' placeholder='Time Period(Yr)' className='rounded mt-4 prin'></input>
         </div>
         {
          !isYearvaild &&
          <div className='text-danger ms-3'>
              <p>
                Invaild User Input
              </p>
          </div>
        }
         <button className='btn btn-primary' onClick={HandleCalculation} disabled ={isPrinciplevaild && isRatevaild && isYearvaild ? false:true}>Calculate</button>
         <button className='btn btn-outline-primary' onClick={Reset} id='reset'>Reset</button>
       </div>       
      </div>
    </>
  );
}

export default App;
