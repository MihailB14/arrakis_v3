import React from 'react'
import {useState} from 'react'
const CUSIPFilter = () => {
  //need to actually call for cusips
  const cusips = ["CUSIP1", "CUSIP2", "CUSIP3"]
  const[chosenCusip, setChosenCusip] = useState(cusips[0])
  
  const handleCusipChange = (event) => {
      setChosenCusip(event.target.value)
  }
  return (
  <div>
      <p>Cusip Filter</p>
      <select id="cusips"onChange={handleCusipChange}>
          {cusips.map(cusip =>
          <option value={cusip}>{cusip}</option>
          )}
      </select>
  </div>

  
)

}

export default CUSIPFilter