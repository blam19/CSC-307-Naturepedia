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

          <DropdownButton id="dropdown-basic-button" title="Honey">
            <Dropdown.Item onClick={() => setCurState(honey_prod_lbs)}> Honey Production Lbs</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Honey Production Lbs per Colony</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Colony Loss per Year</Dropdown.Item>
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
