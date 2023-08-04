import React from 'react'
import { useState } from 'react'
import DateFilter from './DateFilter';
const Filter = () => {
    const [filterVar, setFilterVar] = useState("Date");
  return (
    <div>
        <p> Filter by: </p>
        <select id="period" name="Filter on">
            <option value="Date">Date</option>
            <option value="ISIN">ISIN</option>
            <option value="CUSIP">CUSIP</option>
        </select>
        {/* component rendered based on filterVar state */}
        <DateFilter>

        </DateFilter>
    </div>
  )
}

export default Filter;