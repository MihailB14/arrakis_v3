import React from 'react'
import {useState} from 'react'
const ISINFilter = () => {
  //need to actually call for isins
  const isins = ["ISIN1", "ISIN2", "ISIN3"]
  const[chosenIsin, setChosenIsin] = useState(isins[0])
  
  const handleIsinChange = (event) => {
      setChosenIsin(event.target.value)
  }
  return (
  <div>
      <p>Isin Filter</p>
      <select id="isins"onChange={handleIsinChange}>
          {isins.map(isin =>
          <option value={isin}>{isin}</option>
          )}
      </select>
  </div>

  
)

}

export default ISINFilter