import React from 'react'
import {useState, useEffect} from 'react'
import BondList from '../components/BondList'
import Filter from '../components/Filter';
import {getAllBonds} from '../services/bond-service'

const Dashboard = () => {

    const [bondsFromAPI, setBondsFromAPI] = useState([])
    const [showDetails, setDetails] = useState(false)
    const [bondFunction, setBondFunction] = useState(getAllBonds())
    const GetBondsFromAPI = ()=> {
        useEffect(() => {
            bondFunction
            .then(res => {
                setBondsFromAPI(res.data);
                  console.log(res.data);
            })
            .catch(err => {
                setBondsFromAPI([]);
                console.log(err);
            })
           
          }, [])}
    GetBondsFromAPI();
        // useEffect(() => {
        //     GetBondsFromAPI()
        // }, [bondFunction])
        // figure out how to add this effect 
        
  return (
    <div className="dash">
       <div className = "Header">

       </div>
       <div className = "Filters">
         <Filter></Filter>
       </div>
       <div className = "Content">
       <BondList bonds={bondsFromAPI}>
       </BondList>
       </div>
       </div>
  )
}

export default Dashboard