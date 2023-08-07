import React from 'react'
import BondList from '../components/BondList'
import Filter from '../components/Filter';

const Dashboard = () => {
  return (
    <div className="dash">
       <div className = "Header">

       </div>
       <div className = "Filters">
         <Filter></Filter>
       </div>
       <div className = "Content">
       <BondList>
       </BondList>
       </div>
       </div>
  )
}

export default Dashboard