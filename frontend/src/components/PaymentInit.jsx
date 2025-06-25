// import {NodeProps} from "@xyflow/react"
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdCloseCircleOutline } from "react-icons/io";

import { Handle, Position, useReactFlow } from "@xyflow/react"
import CustomHandle from "./CustomHandle";

const PaymentInit = (data) => {

  const {setNodes} = useReactFlow()

  return (
    <div className="border rounded-xl bg-amber-500 w-20 h-10 flex items-center justify-center text-white font-black flex-col relative">
      <div>
    <div>
      ${data.data.amount}
    </div>
    <div className="w-fit h-fit absolute bottom-0 right-0 p-0.5 ">
      <span className=" text-red-500 rounded-full text-sm " onClick={()=>setNodes(prev=>prev.filter(node=>node.id!==data.id))} ><IoMdCloseCircleOutline/></span>
    </div>
      </div>
      <CustomHandle type="source" position={Position.Bottom}/>
    </div>
  )
}

export default PaymentInit