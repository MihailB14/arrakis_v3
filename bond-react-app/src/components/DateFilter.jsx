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

    const handleSubmit = (event) => {
        console.log(currentDate, periodVar)
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
        <button onClick = {handleSubmit}> Search </button>
        {/* button's onclick sends get request */}
    </div>
  )
}

export default DateFilter