import React, { useState } from "react";
import {Bar} from 'react-chartjs-2';
import {Fragment} from 'react'
import {ButtonGroup, Button, DropdownButton, Dropdown} from 'react-bootstrap'
import {Alert} from 'react'
import { Link } from "react-router-dom";

const coffee_us = {
    labels: ['2011', '2014', '2015',
             '2016', '2019'],
    datasets: [
      {
        label: 'U.S. Organic Coffee Production (lbs)',
        backgroundColor: 'rgba(135, 64, 49, 0.2)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [309657, 325634, 494729, 552160, 600834]
      }
    ]
  }

const cows = {
    labels: ['January', 'February', 'March',
             'April', 'May'],
    datasets: [
      {
        label: 'Cow Population',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [57, 90, 34, 59, 56]
      }
    ]
}

const braeburn_apple_sales_dollar = {
  labels: ['2011', '2015', '2016',
           '2019'],
  datasets: [
    {
      label: 'U.S. Organic Braeburn Apple Sales in Dollars',
      backgroundColor: 'rgba(255,42,34,100)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [3030883, 4945828, 2958797, 4483085]
    }
  ]
}

const fuji_apple_sales_dollar = {
  labels: ['2011', '2014', '2015','2016',
           '2019'],
  datasets: [
    {
      label: 'U.S. Organic Fuji Apple Sales in Dollars',
      backgroundColor: 'rgba(255,144,151,100)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [24909726, 54590048, 79814035, 66188838, 84771410]
    }
  ]
}

const honeycrisp_apple_sales_dollar = {
  labels: ['2011', '2014', '2015','2016',
           '2019'],
  datasets: [
    {
      label: 'U.S. Organic Fuji Apple Sales in Dollars',
      backgroundColor: 'rgba(255,186,129,100)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [15750708, 26305089, 37545008, 44326698, 110633712]
    }
  ]
}

const honey_prod_lbs = {
    labels: ['2020', '2019', '2018',
             '2017', '2016', '2015', 
             '2014', '2013', '2012', 
             '2011', '2010'],
    datasets: [
      {
        label: 'US Honey Production in Pounds',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [147594000, 156922000, 154008000,
               149025000, 162246000, 156705000, 
               178310000, 149550000, 142296000, 
               148357000 ]
      }
    ]
}

const chickens = {
  labels: ['2002', '2007'],
  datasets: [
    {
      label: 'Chicken Production (Heads)',
      backgroundColor: 'rgba(233, 212, 96, 1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [879758, 1032546]
    }
  ]
}

const chickenInventory = {
labels: ['1997', '2002', '2007', '2012', '2017'],
  datasets: [
    {
      label: 'Chicken Inventory (By End of December)',
      backgroundColor: 'rgba(247, 202, 24, 1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [111988, 202902, 2128, 3375, 12753]
    }
  ]
}

const roosterInventory = {
labels: ['2012', '2017'],
  datasets: [
    {
      label: 'Rooster Inventory (By End of December)',
      backgroundColor: 'rgba(244, 208, 63, 1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [1876, 3914]
    }
  ]
}

const DataPage = () => {
    const [curState, setCurState] = useState(coffee_us)



    return (
        <Fragment>
            <div>
                <h3>DATA PAGE</h3>
            </div>
            <div>
                    {/* <button>Data</button> */}
                    {/* <button>Contact Us</button> */}
                    <Link to="/data">Data</Link>&nbsp;
                    <Link to="/contact">Contact Us</Link>&nbsp;
                    <Link to="/">Home</Link>&nbsp;
                    <Link to="/faq">FAQ</Link>
                    {/* <button>Home</button>
                    <button>FAQ</button> */}
            </div>
            
    <ButtonGroup>
          <DropdownButton id="dropdown-basic-button" title="Coffee">
            <Dropdown.Item onClick={() => setCurState(coffee_us)}> U.S Coffee Production</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>

          <DropdownButton id="dropdown-basic-button" title="Cows">
            <Dropdown.Item onClick={() => setCurState(cows)}> Cow population</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>

          <DropdownButton id="dropdown-basic-button" title="Apples">
            <Dropdown.Item onClick={() => setCurState(braeburn_apple_sales_dollar)}> U.S. Organic Braeburn Apple Sales in Dollars</Dropdown.Item>
            <Dropdown.Item onClick={() => setCurState(fuji_apple_sales_dollar)}> U.S. Organic Fuji Apple Sales in Dollars </Dropdown.Item>
            <Dropdown.Item onClick={() => setCurState(honeycrisp_apple_sales_dollar)}> U.S. Organic Honeycrisp Apple Sales in Dollars </Dropdown.Item>
          </DropdownButton>
          <DropdownButton id="dropdown-basic-button" title="Honey">
            <Dropdown.Item onClick={() => setCurState(honey_prod_lbs)}> Honey Production Lbs</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Honey Production Lbs per Colony</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Colony Loss per Year</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Colony Growth per Year</Dropdown.Item>
          </DropdownButton>

          <DropdownButton id="dropdown-basic-button" title="Chickens">
            <Dropdown.Item onClick={() => setCurState(chickens)}> Chicken Population</Dropdown.Item>
            <Dropdown.Item onClick={() => setCurState(chickenInventory)}> Chicken Inventory</Dropdown.Item>
            <Dropdown.Item onClick={() => setCurState(roosterInventory)}> Rooster Inventory</Dropdown.Item>
          </DropdownButton>

      </ButtonGroup> 


            <Bar
                data={curState}
                options={{
                    title:{
                        display:true,
                        text:'Average Rainfall per month',
                        fontSize:20
                    },
                    legend:{
                        display:true,
                        position:'right'
                    }
                }}
            />
            
        </Fragment>
        
    );
}

export default DataPage;
