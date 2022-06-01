import {createContext, useContext, useState, useMemo} from 'react';

 const OrderDetails = createContext();

 // create custom hook to check whether we are inside a provider
 function useOrderDetails(){
     const context = useContext(OrderDetails);

     if(!context){
         throw new Error("useOrderDetails must be used within an OrderDetailsProvider");
     }
     return context;
 }


 function OrderDetailsProvider(props){
  const [optionCounts, setOptionCounts] = useState({
      scoops: new Map(),
      toppings: new Map(),
  });

     const value = useMemo(()=> {
function updateItemCount(itemName, newItemCount, optionType){
const newOptionCounts = {...optionCounts}

// update option count for this item with the new value
const optionCountsMap = optionCounts[optionType];
}

            // getter: object containing option counts for scoops & toppings, subtotals & totals
     // setter: updateOptionCount
         return [{...optionCounts}]
     }, []);
return <OrderDetails.Provider value={} {...props} />
 }