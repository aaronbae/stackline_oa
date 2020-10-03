import React from 'react';
import {useState} from 'react';
import { useSelector } from 'react-redux';
import { selectCurrProduct } from '../redux/productSlice';
import './table.css';

export default function Table(props) {
  const product = useSelector(selectCurrProduct);
  const [sortBy, setSortBy] = useState("weekEnding");

  const dateFormatter = date => {
    let temp = date.split("-");
    temp = temp.slice(1,3).concat([temp.slice(0,1)[0].substring(2,)]);
    return temp.join("-")
  }

  const dollarFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  });

  const sort_sales = sales=>{
    let sales_copy = [...sales]
    return sales_copy.sort((a,b)=>{
      if( a[sortBy] === b[sortBy]){
        return 0;
      } else if( a[sortBy] > b[sortBy]){
        return 1
      } 
      return -1
    })
  }
  const CustomTH = props =>{
    return (
      <th className="customTH" onClick={()=>setSortBy(props.attribute)}>
        {props.display}
        <img src="/arrow.svg" alt="Arrow Icon"/>
      </th>
    )
  }

  return (
    <div className={props.className + " product-table-container"}>
      <table className="product-table-table">
        <thead>
          <tr>
            <CustomTH attribute="weekEnding" display="WEEK ENDING"/>
            <CustomTH attribute="retailSales"  display="RETAIL SALES"/>
            <CustomTH attribute="wholesaleSales"  display="WHOLESALE SALES"/>
            <CustomTH attribute="unitsSold"  display="UNITS SOLD"/>
            <CustomTH attribute="retailerMargin"  display="RETAILER MARGIN"/>
          </tr>
        </thead>
        <tbody>
          {product.sales && sort_sales(product.sales).map((item, index)=>
            <tr key={index}>
              <td>{dateFormatter(item.weekEnding)}</td>
              <td>{dollarFormatter.format(item.retailSales)}</td>
              <td>{dollarFormatter.format(item.wholesaleSales)}</td>
              <td>{item.unitsSold}</td>
              <td>{dollarFormatter.format(item.retailerMargin)}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>  
  )
}