import { useReactFlow } from '@xyflow/react'
import React from 'react'

const PAYMENT_PROVIDERS = [
    {code:"St",name:"Stripe"},
    {code:"Gp",name:"Google Pay"},
    {code:"Ap",name:"Apple Pay"},
    {code:"Am",name:"Amazon Pay"},
]

const PaymentProviderSelector = (data) => {

      const {setNodes} = useReactFlow()
    

    const onProvider =(code,name)=>{
        const location = Math.random()*200;
        
        setNodes(prev=>[...prev,{id:`${prev.length}+1`, data:{code:code,name:name}, type:"paymentProvider",position:{x:location, y:location}}])
    }

  return (
    <div className=' bg-amber-200 border text-xs p-1 rounded-2xl'>
        <div className='flex flex-col items-center justify-center divide-y-2'>
        {PAYMENT_PROVIDERS.map((provider,index)=>
            <span key={index} onClick={()=>onProvider(provider.code,provider.name)}>{provider.name}</span>
        )}
        </div>
    </div>
  )
}

export default PaymentProviderSelector