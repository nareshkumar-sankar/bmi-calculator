import { useState } from 'react'
import './App.css'

function App() {
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [bmi, setBMI] = useState(null)
  const [bmistatus, setBmiStatus] = useState("")
  const [error, setError] = useState("")

  const calculateBMI = () => {
    const isValidHeight=/^\d+$/.test(height)
    const isValidWeight=/^\d+$/.test(weight)
    if (isValidHeight && isValidWeight) {
      setError("")
      const h = height / 100
      const bmiValue = weight / (h * h)
      setBMI(bmiValue.toFixed(2))
      if (bmiValue < 18.5) {
        setBmiStatus("Under Weight")
      }
      else if(bmiValue>=18.5 && bmiValue<24.9){
        setBmiStatus("Normal Weight")
      }
      else if(bmiValue>=25 && bmiValue<29.9){
        setBmiStatus("Over Weight")
      }
      else{
        setBmiStatus("Obese")
      }
    }
    else {
      setBMI(null)
      setBmiStatus("")
      setError("Please Enter Valid Numeric Values for Height And Weight.")
    }
  }

  const clearAll=()=>{
    setHeight("")
    setWeight("")
    setBmiStatus("")
    setBMI(null)
    setError("")
  }
    return (
      <>
        <div className='bmi-calculator'>
          <div className="box"></div>
          <div className="data">
            <h1>bmi claculator</h1>
            {error!==null&&<p className='error'>{error}</p>}
            <div className="input-container">
              <label htmlFor="height">Height(cm)</label>
              <input type="text" id='height' value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>
            <div className="input-container">
              <label htmlFor="weight">weight(kg)</label>
              <input type="text" id='weight' value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <button onClick={calculateBMI}>Calculate BMI</button>
            <button id="clear" onClick={clearAll}>Clear All</button>
            {bmi!==null && (<div className="result">
              <p>Your BMI is : {bmi}</p>
              <p>Status: {bmistatus}.</p>
            </div>)}
          </div>
        </div>
      </>
    )
  }

  export default App
