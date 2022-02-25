import React from "react";
import Axios from "axios";
import { useEffect, useState } from "react";
import p2p from '../assest/p2p.svg';
const Cryptotable = () => {
    const [crypto, setCrypto] = useState([]);
    const [search, setSearch] = useState("");
 
    useEffect(()=>{
        Axios.get(`https://api.coinstats.app/public/v1/coins?skip=0&limit=100¤cy=INR`
        ).then((res) => {
          setCrypto(res.data.coins);
        });
    }, []);
   
return (
    <>
    <section className="home">
        <div className="container">
        <div className="">
       
           <div className="row pt-5">
           <div className="col-lg-8 pt-5 pb-5 text-white">
                <h1 className="text-white pt-5">Crypto Coin Market</h1>
                <p>Powered by Elephant, with Deep Liquidity, Low Fees and Best Execution Prices</p>
               </div>
               <div className="col-lg-4  pb-5">
             <img src={p2p} alt=""/>
               </div>
               </div>
           </div>
           </div>
     </section>
           <section className="cryptotable">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-12 text-center text-white">
                <h1 className="mt-5 mb-5">All Cryptocurrencies Table</h1>
                <div className=" pb-5">
                  <input type="text"
                   placeholder="Search..."
                   onChange ={(e) => {
                       setSearch(e.target.value);
                   }}
               />
               </div>
               <div class="table-responsive">
            <table class="table table-bordered  table-striped table-hover">
  <thead class="table-ligh"t>
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Pair</th>
      <th scope="col">Price</th>

      <th scope="col">24H Change </th>
      
      <th scope="col">Price in BTC </th>
      <th scope="col">MarketCap</th>
      
      <th scope="col">24H Volume</th>
     
    </tr>
  </thead>
  <tbody>
  {crypto
    .filter((val) => {
        return val.name.toLowerCase().includes(search.toLowerCase());
    })
  
  .map((val, id) =>{
  return (
   <>
    <tr>
    <th scope="row">{id}</th>
    <td className="logo d-flex justify-content-center">
     <a href={val.websiteUrl}>
     <img className="mx-2" src={val.icon} alt="logo" width="30px" />
     </a> <p>{val.name}</p> </td>
      <td>${val.price.toFixed(2)}</td>
           {val.priceChange1d < 0 ? (
    <td className="red">{val.priceChange1d}%</td>
      ) :(<td className="green">{val.priceChange1d}%</td>
      )}
     
     <td>{val.priceBtc}</td>
	<td>₹{val.marketCap}</td>
    <td>{val.volume}</td>
    <td>
    <a className="btn-white">Trade</a></td>
   
    </tr>
     </>
  );
})}
  </tbody>
      </table>
   
                </div>
            </div>
           </div>
        </div>
    </section>
    </>
   
);
};
export default Cryptotable;

