import { Background, Controls, MiniMap, ReactFlow,useNodesState,useEdgesState, addEdge } from '@xyflow/react'
import Sidebar from './components/sidebar'
import '@xyflow/react/dist/style.css';
import { useCallback } from 'react';
import { initialEdges, initialNodes } from './constants/workflow.constants';
import PaymentInit from './components/paymentInit';
import PaymentProviderSelector from './components/PaymentProviderSelector';
import PaymentProvider from './components/PaymentProvider';
import CustomEdge from './components/CustomEdge';

 
const nodeTypes = {
  "paymentInit":PaymentInit,
  "paymentProviderSelector":PaymentProviderSelector,
  "paymentProvider":PaymentProvider
}

const edgeTypes = {
  "customEdge":CustomEdge
}

const App = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback((connection)=>{
      const edge = {...connection, animated:true, id:`${edges.length} + 1`, type: 'customEdge'}
      setEdges((prevEdges)=>addEdge(edge,prevEdges))
    },[])

  return (
    <div className='bg-zinc-900 w-screen h-screen flex justify-between '>
      <Sidebar/>
      <div className='w-[90vw] h-[90vh] m-10 border-red-500  '>
        <ReactFlow
         nodes={nodes}
         edges={edges}
         onNodesChange={onNodesChange}
         onEdgesChange={onEdgesChange}
         onConnect={onConnect}
         nodeTypes={nodeTypes}
         edgeTypes={edgeTypes}
         fitView
          >
          <Controls/>
          <Background/>
          {/* <MiniMap/> */}
          </ReactFlow>

      </div>
      <div className='border-r-amber-600 p-10'>
      </div>
    </div>
  )
}

export default App