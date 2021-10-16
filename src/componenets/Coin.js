import React from 'react';
//css
import styles from './Coin.module.css'

const Coin = (props) => {

const { name, image, price, symbol, marketCap, priceChange } = props;

    return (

        <div className={styles.container}>
            <img className={styles.image} src={image} alt="image"/>
            <span className={styles.name} > {name} </span>
            <span className={styles.symbol} > {symbol.toUpperCase()} </span>
            <span className={styles.currentPrice} > $ {price.toLocaleString()} </span>
            <span className={priceChange > 0 ? styles.greenPrice : styles.redPrice} > {priceChange.toFixed(2)} </span>
            <span className={styles.marketCap} > $ {marketCap.toLocaleString()} </span>
        </div>
    );
};

export default Coin; 