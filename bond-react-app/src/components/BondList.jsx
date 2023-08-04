import React from 'react'
import {useState, useEffect} from 'react'
import {getAllBonds} from '../services/bond-service'

const BondList = () => {
    const [bondsFromAPI, setBondsFromAPI] = useState([])
    // const [query, setQuery] = useState(getAllBonds())
    // let f = getAllBonds().then(res => setAllBonds(res.data));
    
    
    // let res = getAllBonds().then((result) => console.log(result));
    
      const GetBondsFromAPI = ()=> {
            useEffect(() => {
                getAllBonds()
                .then(res => {
                    setBondsFromAPI(res.data);
                    //   console.log(res.data);
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
                    <p>Status: {bond.status}</p>
                </div>
                )
            }
                {/* // Add extra fields for expanded detail 
    // <p>Unit Price: {props.info.unit_price}</p>
    // <p>Coupon Percent: {props.info.coupon_percent}</p>
    // <p>Currency: {props.info.bond_currency} </p>
    // <p>Face Value: {props.info.face_value}</p>
    // <p>Type: {props.info.type}</p>> */}

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