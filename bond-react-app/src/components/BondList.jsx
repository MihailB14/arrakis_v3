import React from 'react'
import {useState, useEffect} from 'react'
import {getAllBonds} from '../services/bond-service'

const BondList = () => {
    const [bondsFromAPI, setBondsFromAPI] = useState([])
    const [showDetails, setDetails] = useState(false)
    // const [query, setQuery] = useState(getAllBonds())
    // let f = getAllBonds().then(res => setAllBonds(res.data));
   
    
    // let res = getAllBonds().then((result) => console.log(result));
    
      const GetBondsFromAPI = ()=> {
            useEffect(() => {
                getAllBonds()
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

    return(
        <div>
            {bondsFromAPI.map(bond =>
                <div>
                    <p>ISIN: {bond.isin}</p>
                    <p>CUSIP: {bond.cusip}</p>      
                    <p>Issuer: {bond.issuer_name}</p>   
                    <p>Maturity Date: {bond.bond_maturity_date}</p>
                    <p>Status: {bond.bond_status}</p>
                    <button onClick={() => setDetails(!showDetails)}> Show Details</button>
                    {showDetails &&
                    <div>
                    <p>Unit Price: {bond.unit_price}</p>
                    <p>Coupon Percent: {bond.coupon_percent}</p>
                    <p>Currency: {bond.bond_currency} </p>
                    <p>Face Value: {bond.face_value}</p>
                    <p>Type: {bond.type}</p>
                    </div>
                    }
                    {/* For some reason the show details thing doesn't produce a consistent 
                    result for each bond, sometimes the new information is at the bottom
                    and sometimes it's at the top */}
                </div>
                )
            }
                

        </div>
    )  
}

export default BondList


    // useEffect(()=>{
    //             getBondsFromAPI();}, 
    //                     []
    // );
    // const getBondsFromAPI = ()=>{
    //     getAllBonds()
    //       .then(res => {
    //               setAllBonds(res.data);
    //               console.log(allBonds);
    //       })
    //         .catch(err => {
    //                   setAllBonds([]);
    //                         console.log(err);
    //         })
           
    //       }
    // }