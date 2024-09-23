
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
const [principle ,setPrinciple] = useState("")
const [rate , setRate] = useState("")
const [year , setYear]= useState("")
const [interest , setInterest] = useState(0)  
const [isPrinciple, setIsPrinciple] = useState(true)
const [isRate, setIsRate] = useState(true)
const [isYear , setIsYear] =useState(true)


const validate = (e)=>{
  console.log(e.target.name)
  console.log(e.target.value)
  console.log(e.target.value.match('^[0-9]*$'));
  if(!!e.target.value.match('^[0-9]*$')){
    if(e.target.name=='principle'){
      setPrinciple(e.target.value)
      setIsPrinciple(true)
    }
    else if(e.target.name=='rate'){
      setRate(e.target.value)
      setIsRate(true)
    }
    else{
      setYear(e.target.value)
      setIsYear(true)
    }
  }
  else{
    if(e.target.name=='principle'){
      setPrinciple(e.target.value)
      setIsPrinciple(false)
    }
    else if(e.target.name=='rate'){
      setRate(e.target.value)
      setIsRate(false)
    }
    else{
      setYear(e.target.value)
      setIsYear(false)
    }
  }
}

const handleReset = ()=>{
  setPrinciple("")
  setRate("")
  setYear("")
  setIsPrinciple(true)
  setIsRate(true)
  setIsYear(true)
}

const handleCalculate = ()=>{
  setInterest((principle*rate*year)/100)
}

  return (
    < >
     <div style={{height:'100vh'}} className='bg-dark w-100 d-flex justify-content-center align-items-center'> 
      <div style={{width:'500px'}} className='p-5 bg-light rounded'>
        <h2>SIMPLE INTEREST APP</h2>
        <p>Calculate Your Simple Interest Easily</p>
        <div style={{width:'400px'}} className='bg-warning p-5 rounded-2 d-flex justify-content-center align-items-center flex-column'>
          <h1>₹ {interest}</h1>
          <p>Total Simple Interest</p>
        </div>
        <div className='mb-3 mt-3'>
         <TextField  value={principle}  name='principle' id="outlined-basic" label="₹ Principle Amount" variant="outlined"className='w-100' onChange={(e)=>validate(e)} />
          { !isPrinciple && <span className='text-danger' >*Invalid input</span>}
        </div>
        <div className="mb-3">
        <TextField value={rate} name='rate' id="outlined-basic" label="Rate of Interest(p.a%)" variant="outlined" className='w-100' onChange={(e)=>validate(e)} />
       {!isRate && <span className='text-danger' >*Invalid input</span>} 
        </div>
        <div className="mb-3">
        <TextField  value={year}  name='year' id="outlined-basic" label="Years" variant="outlined" className='w-100' onChange={(e)=>validate(e)} />
        {!isYear && <span className='text-danger' >*Invalid input</span>}
        </div>
        <div className='mb-3 d-flex justify-content-between'>
        <Button onClick={handleCalculate} style={{width:'190px', height:'60px'}} variant="contained"  color="success" disabled={isPrinciple && isRate &&  isYear ? false:true} >CALCULATE</Button>
        <Button onClick={handleReset} style={{width:'190px', height:'60px'}} variant="outlined">RESET</Button>
        </div>
      </div>
     </div> 
    </>
  )
}

export default App
