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
        backgroundColor: 'rgba(76, 25, 25, 1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [309657, 325634, 494729, 552160, 600834]
      }
    ]
  }
const coffee_CA = {
    labels: ['2011', '2013', '2015',
             '2016', '2019'],
    datasets: [
      {
        label: 'California Organic Coffee Production (lbs)',
        backgroundColor: 'rgba(76, 25, 25, 1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [30957, 25634, 44729, 52160, 65834]
      }
    ]
  }

const coffee_PR = {
    labels: ['2011', '2012', '2014',
             '2016', '2019'],
    datasets: [
      {
        label: 'Puerto Rico Organic Coffee Production (lbs)',
        backgroundColor: 'rgba(76, 25, 25, 1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [130957, 125634, 144729, 152160, 165834]
      }
    ]
  }

const milk_CA = {
    labels: ['2012', '2015', '2017'],
    datasets: [
      {
        label: 'California Annual Milk Sales ($)',
        backgroundColor: 'rgba(255,255, 255,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [6482565000, 6644530000, 6944530000]
      }
    ]
}

const milk_HI = {
  labels: ['2012', '2015', '2017'],
  datasets: [
    {
      label: 'Hawaii Annual Milk Sales ($)',
      backgroundColor: 'rgba(255,255, 255,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [44265000, 54450000, 64530000]
    }
  ]
}

const milk_NY = {
  labels: ['2012', '2015', '2017'],
  datasets: [
    {
      label: 'New York Annual Milk Sales ($)',
      backgroundColor: 'rgba(255,255, 255,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [2402110000, 2402110000, 2524680000]
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
            <Dropdown.Item onClick={() => setCurState(coffee_CA)}> California Coffee Production</Dropdown.Item>
            <Dropdown.Item onClick={() => setCurState(coffee_PR)}> Puerto Rico Coffee Production</Dropdown.Item>
          </DropdownButton>

          <DropdownButton id="dropdown-basic-button" title="Honey">
            <Dropdown.Item onClick={() => setCurState(honey_prod_lbs)}> US Honey Production (lbs)</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>

      <DropdownButton id="dropdown-basic-button" title="Milk">
            <Dropdown.Item onClick={() => setCurState(milk_CA)}> California Annual Milk Sales ($)</Dropdown.Item>
            <Dropdown.Item onClick={() => setCurState(milk_HI)}> Hawaii Annual Milk Sales ($)</Dropdown.Item>
            <Dropdown.Item onClick={() => setCurState(milk_NY)}> New York Annual Milk Sales ($)</Dropdown.Item>
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