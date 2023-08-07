import React from 'react'
import { useState,useEffect, useContext} from 'react'
import DatePicker from 'react-datepicker'
import {Context} from '../QueryContext'
import "react-datepicker/dist/react-datepicker.css"

import {dateRange, getAllBonds} from '../services/bond-service'

const DateFilter = () => {
    const [periodVar, setPeriodVar] = useState("DateRange");
    const [currentDate, setCurrentDate] = useState(new Date());
    const {queryFunction, setQueryFunction} = useContext(Context);
    useEffect(() => {
        if (periodVar == "DateRange") {
            // console.log("hi")
            setQueryFunction(dateRange('2020-05-14'))
            console.log("date range")
        }
        else {
            setQueryFunction(getAllBonds())
            console.log("all")
        }
        //else if today, else past5days
    }, [periodVar, setQueryFunction])
    
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