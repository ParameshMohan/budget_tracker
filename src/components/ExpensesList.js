import React,{ useContext,useState ,useEffect} from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpensesList = () =>{

    const { expenses } =useContext(AppContext);
 const [search, setSearch] = useState('')
const [exp,setExp]=useState(expenses || [] )
useEffect(() => {
    setExp(expenses);
}, [expenses]);

useEffect(() =>{
    if(search ===''){
        setExp(expenses); 
    }
   
},[search])
 const handleSearch =(event) => {
    setSearch(event.target.value)
   const a = exp.filter(i =>{
        return   i.name.toLowerCase().includes(event.target.value)
    } ) 

       console.log("a",a)
       setExp(a)
  
 }
    return(
        <ul className='list-group'>

<input
        id='search'
        type='text'
 
        // onChange={(event) => {
        //     // setSearch(event.target.value)
        //     handleSearch(event.target.value) }}
        onChange={handleSearch}
        >
        
        </input>
            {exp.map((expense) =>(
                <ExpenseItem 
                id={expense.id} 
                name={expense.name} 
                cost={expense.cost}/>
            ))}
        </ul>
    )
}

export default ExpensesList ;