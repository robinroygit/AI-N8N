import { Handle, Position, useReactFlow } from '@xyflow/react'
import React from 'react'
import CustomHandle from './CustomHandle'
import { IoMdCloseCircleOutline } from 'react-icons/io'

const PAYMENT_PROVIDERS_IMAGE_MAP = {
    St:"https://img.icons8.com/?size=100&id=18980&format=png&color=000000",
    Gp:"https://img.icons8.com/?size=100&id=am4ltuIYDpQ5&format=png&color=000000",
    Ap:"https://img.icons8.com/?size=100&id=61469&format=png&color=000000",
    Am:"https://img.icons8.com/?size=100&id=2nt5XhjL7jBK&format=png&color=000000"
}
const PaymentProvider = (data) => {
    const {setNodes} = useReactFlow()
  

  return (
    <div className='border rounded-2xl flex gap-2 px-1 bg-white items-center '>
        {/* <span className='text-green-400'>{PAYMENT_PROVIDERS_IMAGE_MAP[data.data.code]}</span> */}
        <img src={PAYMENT_PROVIDERS_IMAGE_MAP[data.data.code]} alt="" width={20} />
        <span>{data.data.name}</span>
         <span className=" text-red-500 rounded-full text-sm " onClick={()=>setNodes(prev=>prev.filter(node=>node.id!==data.id))} ><IoMdCloseCircleOutline /></span>
              <CustomHandle type="target" position={Position.Left}/>
    </div>
  )
}

export default PaymentProvider