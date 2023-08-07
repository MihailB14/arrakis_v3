import React from 'react'
import { useState } from 'react'
import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css"

const DateFilter = () => {
    const [periodVar, setPeriodVar] = useState("DateRange");
    const [currentDate, setCurrentDate] = useState(new Date());

    const handlePeriodChange = (event) => {
        setPeriodVar(event.target.value);
    }


  return (
    <div>
        {/* dropdown for period of search */}
        <select id="period" name="Search Period" onChange={handlePeriodChange}>
            <option value="DateRange">+/- 5 days</option> 
            <option value="Today">Today</option>
            <option value="Recent">Last 5 days</option>
        </select>

        <DatePicker selected={currentDate} onChange={(date) => setCurrentDate(date)} />
    </div>
  )
}

export default DateFilter