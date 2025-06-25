
export const initialNodes = [
  { id: '1', position: { x: 10, y: 10 }, data: { amount: 10 }, type:"paymentInit" },
  { id: '2', position: { x: -200, y: 0 }, data: { }, type:"paymentProviderSelector" },
  // { id: '3', position: { x: 50, y: 50 }, data: { }, type:"paymentProvider" },
  
  // { id: '4', position: { x: 100, y: 100 }, data: { label: 'hi' } },
  // { id: '5', position: { x: 100, y: 300 }, data: { label: 'hey' } },
];
 
export const initialEdges = [{ id: 'e1-2', source: '4', target: '5', animated:true,type: 'customEdge'}];
