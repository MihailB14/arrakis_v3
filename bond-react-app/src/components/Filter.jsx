import React from 'react'
import {useState, useEffect} from 'react'
import DateFilter from './DateFilter';
import CUSIPFilter from './CUSIPFilter';
import ISINFilter from './ISINFilter';
import ClientFilter from './ClientFilter';
const Filter = () => {
    const [filterVar, setFilterVar] = useState("Date");
    const [filterComp, setFilterComp] = useState(<DateFilter />)
    useEffect(() => {
      switch (filterVar) {
        case "Date":
          setFilterComp(<DateFilter />)
          break;
        case "ISIN":
          setFilterComp(<ISINFilter />)
          break;
        case "CUSIP":
          setFilterComp(<CUSIPFilter />)
          break;
        case "Client":
          setFilterComp(<ClientFilter />)
          break;
        default:
          break;
      }
    }, [filterVar])

  const handleFilterChange = (event)=> {
    setFilterVar(event.target.value)
  }

  
  return (

    <div>
        <p> Filter by: </p>
        <select id="period" name="Filter on" defaultValue="Date" onChange = {handleFilterChange}>
            <option value="Date">Date</option>
            <option value="ISIN">ISIN</option>
            <option value="CUSIP">CUSIP</option>
            <option value="Client">Client </option>
        </select>
        {filterComp}
        <button>Search</button>
        {/* button's onclick sends get request */}
        
    </div>
  )
}

export default Filter;

//  const [selectedItem, setSelectedItem] = useState("Counter")
  //  const handleChange = (e) => {
  //   setSelectedItem(e.target.value)
  //   }
  //   return (
  //     <div className="App">
  //       <p>You have selected {selectedItem}</p>
  //       <select name='item-selected' value={selectedItem} onChange={handleChange}>
  //         <option value="Counter">Counter</option>
  //         <option value="useEffect">useEffect</option>      
  //       </select>    
  //     </div>
  //   );
                                        