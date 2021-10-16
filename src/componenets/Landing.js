import React,{ useEffect,useState } from 'react';
//api
import { getCoin } from '../services/api.js';
//components
import Loader from './Loader.js';
import Coin from './Coin.js';
//css
import styles from './Landing.module.css'


const Landing = () => {

   const [coins ,setCoins] = useState([]);
   const [search ,setSearch] = useState("");

    useEffect(()=>{
        const fetchApi = async() => {
        const data = await getCoin();
        console.log(data);
        setCoins(data)
        }

        fetchApi()
        } ,[])

        const searchHandler = event => {
            setSearch(event.target.value)
        }

        const searchedCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase())) //tooye data begard ye filter bezan oon chizi ke search kardim tooye name data ha bud return kon
        

    return (
        <>
            <input className={styles.input} type="text" placeholder="Search" value={search} onChange={searchHandler}/> 
        
            {
                coins.length ?

                <div className={styles.coinContainer}>

                     {searchedCoins.map(coin =><Coin
                        key={coin.id}
                        name={coin.name}
                        image={coin.image}
                        symbol={coin.symbol}
                        price={coin.current_price}
                        marketCap={coin.market_cap}
                        priceChange={coin.price_change_percentage_24h}
                     /> ) }
                     
                </div> :
                <Loader/>
            }
        </>
    );
};

export default Landing;