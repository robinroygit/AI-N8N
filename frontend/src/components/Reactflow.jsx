
import React, { useCallback, useEffect, useState } from 'react';

import  {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
} from '@xyflow/react';
import '../src/index.css';
 
import '@xyflow/react/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1User Input' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2User Input' } },
];
const initialEdges = [];

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [name, setName] = useState('My Workflow');
  const [workflowId, setWorkflowId] = useState('');
  const [savedWorkflows, setSavedWorkflows] = useState([]);
  const [userQuery, setUserQuery] = useState('');
  const [executionResult, setExecutionResult] = useState(null);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  const addNode = (type) => {
    const id = (nodes.length + 1).toString();
    const newNode = {
      id,
      type: 'default',
      position: { x: Math.random() * 300, y: Math.random() * 300 },
      data: { label: type },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const saveWorkflow = async () => {
    const response = await fetch('http://localhost:8000/workflows', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, nodes, edges }),
    });
    const data = await response.json();
    setWorkflowId(data.workflow_id);
    alert(`Saved with ID: ${data.workflow_id}`);
  };

  const fetchWorkflows = async () => {
    try {
      const res = await fetch('http://localhost:8000/workflows');
      const data = await res.json();
      if (Array.isArray(data)) {
        setSavedWorkflows(data);
      } else {
        setSavedWorkflows([]);
      }
    } catch (err) {
      console.error('Failed to fetch workflows:', err);
      setSavedWorkflows([]);
    }
  };

  const executeWorkflow = async () => {
    if (!workflowId || !userQuery) return;
    const res = await fetch(`http://localhost:8000/workflows/${workflowId}/execute`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_query: userQuery }),
    });
    const result = await res.json();
    setExecutionResult(result);
  };

  useEffect(() => {
    // fetchWorkflows();
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }} className="w-full h-screen">
      <div style={{display:"flex",flexWrap:"wrap",gap:"4px"}} className="flex flex-wrap gap-2 p-2 items-center">
        <input
        style={{border:"2px solid red"}}
          className="border p-1"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Workflow Name"
        />
        <button className="border px-3 py-1 rounded" onClick={() => addNode('classify')}>Add Classify</button>
        <button className="border px-3 py-1 rounded" onClick={() => addNode('codegen')}>Add CodeGen</button>
        <button className="border px-3 py-1 rounded" onClick={() => addNode('validate')}>Add Validate</button>
        <button className="border px-3 py-1 rounded" onClick={() => addNode('general')}>Add General</button>
        <button className="border px-3 py-1 rounded" onClick={saveWorkflow}>Save Workflow</button>
        <select onChange={(e) => setWorkflowId(e.target.value)} value={workflowId} className="border p-1">
          <option value="">Select Workflow</option>
          {Array.isArray(savedWorkflows) && savedWorkflows.map((wf) => (
            <option key={wf.id} value={wf.id}>{wf.name}</option>
          ))}
        </select>
        <input
          className="border p-1"
          placeholder="Enter user query"
          value={userQuery}
          onChange={(e) => setUserQuery(e.target.value)}
        />
        <button className="border px-3 py-1 rounded" onClick={executeWorkflow}>Execute</button>
      </div>


      {/* <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <MiniMap />
        <Controls />
      </ReactFlow> */}
        <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
      {executionResult && (
        <div className="p-4 bg-gray-100 mt-4 text-sm">
          <pre>{JSON.stringify(executionResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
