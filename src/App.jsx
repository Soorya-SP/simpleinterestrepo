import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  //State(that is, initial value of the variable) is set using useState
  const [principal,setPrincipal]=useState(0)
  const [rate,setRate]=useState(0)
  const [year,setYear]=useState(0)
  const [interest,setInterest]=useState(0)
  /*For conditional rendering
 */
const [isPrincipal,setIsPrincipal] = useState(true)
const [isRate,setIsRate] = useState(true)
const [isYear,setIsYear] = useState(true)
  // Function validate
  const validate=(e)=>{
    let name=e.target.name
    let value=e.target.value
  // regular expression to validate input value
console.log(!!value.match(/^[0-9]*$/));
// if..else condition validate and display invalid input values
if(!!value.match(/^[0-9]*$/)){
  if(name=='principal'){
    setPrincipal(value)
    setIsPrincipal(true)
    }
  else if(name == "rate"){
    setRate(value)
    setIsRate(true)
  }
  else{
    setYear(value)
    setIsYear(true)
  }
}else
  {
  if(name=='principal'){
      setPrincipal(value)
      setIsPrincipal(false)
      
    }
    else if (name == "rate"){
      setRate(value)
      setIsRate(false)
    }
    else{
      setYear(value)
      setIsYear(false)
    }
  }
}
const handleReset=()=>{
  setPrincipal(0)
  setRate(0)
  setYear(0)
  setInterest(0)
  setIsPrincipal(true)
  setIsRate(true)
  setIsYear(true)
}

const calculate=()=>{
  setInterest((principal*rate*year)/100)
}



console.log('principal',principal);
console.log('rate',rate);
console.log('year',year);

  return (
    <div className='d-flex justify-content-center align-items-center' style={{width:'100',height:'100vh'}}>
         <div className= 'bg-light p-5 rounded' style={{width:'500px'}}>
           <h2>Simple Interest App</h2>
           <p>Calculate your simple interest easily</p>

           <div className='mt-5 flex-column rounded shadow bg-warning d-flex justify-content-center align-items-center p-4'>
           <h2 className='fs-1 fw-bolder'>₹ {interest}</h2>
           <p>Total Simple Interest</p>
           </div>       
           
           <form className='mt-5'>
            <div className='mb-3'>
            <TextField id="outlined-basic" name='principal' value={principal || ""} label="₹ Principal amount" className='w-100' variant="outlined"
            onChange={(e)=>{validate(e)}} />
            {(!isPrincipal) && 
             <p className='text-danger'>*Invalid Input</p>}
            </div>
            <div className='mb-3'>
            <TextField id="outlined-basic" name='rate' value={rate || ""} label="Rate Of Interest (p.a)%" className='w-100' variant="outlined" 
            onChange={(e)=>{validate(e)}}/>
            {(!isRate) && <p className='text-danger'>*Invalid Input</p>}  
            </div>
            <div className='mb-3'>
            <TextField id="outlined-basic"  name='year'  value={year || ""} label="Year(yr)" className='w-100' variant="outlined"
            onChange={(e)=>{validate(e)}}/>
            { (!isYear) && <p className='text-danger'>*Invalid Input</p>}
            </div>
            <div className='d-flex d-flex justify-content-between w-100'> 
            <Button variant="contained" color="success" style={{width:'190px',height:'60px'}} onClick={calculate} disabled={(isPrincipal && isRate && isYear)?false:true } >Calculate</Button>
            <Button variant="outlined" style={{width:'190px',height:'60px'}} onClick={handleReset}>Reset</Button>          </div>

           </form>    
          </div>

    </div>

  )
}

export default App
