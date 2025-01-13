import React from 'react'
import { Josefin_Sans } from 'next/font/google';
import { Lato } from 'next/font/google';
import styles from '/LegendsList.module.css';
import Link from 'next/link';

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const DiscountItem = () => {
  return (
    <div> 
<div className={`${josefinSans.className} bg-heading text-[42px] leading-[49.22px]`}><h3>Discount Item</h3></div>

      {/* main Div */} <div>

      </div>
    </div>
  )
}

export default DiscountItem
