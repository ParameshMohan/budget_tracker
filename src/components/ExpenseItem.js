import React from 'react';
import {TiDelete} from 'react-icons/ti';
import { useState } from 'react';

const ExpenseItem =(props) =>{
    const [bg,setBg]=useState('blue')
    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {props.name}
            <div>
                <span className='badge badge-primary badge-pill mr-3 margin-span'
                  style={{ backgroundColor: bg  }}>
                    ${props.cost}
                    </span>
                    <TiDelete size='1.5em'></TiDelete>
              
            </div>

        </li>
    )
}
export default ExpenseItem;