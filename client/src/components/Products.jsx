import React from 'react'
import {useQuery} from 'react-query'
import { getProducts } from './getData'
import { MyCard } from './MyCard'

export const Products=({setSelProduct})=> {

  const {data,status}=useQuery('product',getProducts)

  status=='success' && console.log(data.data)
  
  return (
    <div className="cards">
        {status=='success' && data.data.map(obj=>
            <MyCard{...obj}setSelProduct={setSelProduct}/>
          )}  
    </div>
  )
}
