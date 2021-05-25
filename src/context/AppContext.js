import { createContext,useReducer } from 'react';

const AppReducer=(state,action) =>{
    switch(action.type){
        default:
            return state;
    }
}
const initialState = {
    budget: 1000,
    expenses: [
        { id: 12, name:'shopping', cost:40 },
        { id: 13, name:'holiday', cost:400 },
        { id: 14, name:'car service', cost:50 },
    ],
};

export const AppContext = createContext();

export const AppProvider =(props) =>{
const [state,dispatch]=useReducer(AppReducer,initialState);

// appProcider will have a value prop , this value will take any value to our components connecting to app provider
//props.children is the any compoents wrapped inside AppProvider
//since Appprovider is wrapped, we nee dto connect each comp to context and display the differemt data that we need
return (<AppContext.Provider
value={{
    budget: state.budget,
    expenses: state.expenses,
    dispatch
}}
>
    {props.children} 

</AppContext.Provider>)

}