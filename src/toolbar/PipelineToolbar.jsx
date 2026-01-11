// toolbar.js

// import { DraggableNode } from './draggableNode';

// export const PipelineToolbar = () => {

//     return (
//         <div style={{ padding: '10px' }}>
//             <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
//                 <DraggableNode type='customInput' label='Input' />
//                 <DraggableNode type='llm' label='LLM' />
//                 <DraggableNode type='customOutput' label='Output' />
//                 <DraggableNode type='text' label='Text' />
//             </div>
//         </div>
//     );
// };


// toolbar.js

// import { DraggableNode } from './draggableNode';
// import { NODE_ICONS } from './nodeIcons';

// const Icon = NODE_ICONS.customInput;
// export const PipelineToolbar = () => {
//   return (
//     <div style={{ padding: '10px' }}>
//       <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
//         {/* Original Nodes */}
//         <DraggableNode type='customInput'  label={
//     <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
//       <Icon size={16} /> Input
//     </span>
//   } />
//         <DraggableNode type='llm'  label={
//     <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
//       <Icon size={16} /> LLm
//     </span>
//   } />
//         <DraggableNode type='customOutput' label='Output' />
//         <DraggableNode type='text' label='Text' />
        
//         {/* New Nodes */}
//         <DraggableNode type='math' label='Math' />
//         <DraggableNode type='filter' label='Filter' />
//         <DraggableNode type='timer' label='Timer' />
//         <DraggableNode type='conditional' label='Conditional' />
//         <DraggableNode type='transform' label='Transform' />
//       </div>
//     </div>
//   );
// };

// toolbar.js

// import { DraggableNode } from './DraggableNode';
// import { NODE_ICONS } from './nodeIcons';

// export const PipelineToolbar = () => {
//   const renderNode = (type, label) => {
//     const Icon = NODE_ICONS[type];

//     return (
//       <DraggableNode
//         key={type}
//         type={type}
//         label={
//           <span
//             style={{
//               display: 'flex',
//               alignItems: 'center',
//               gap: 6,
//               fontSize: 13,
//               fontWeight: 500,
//               flexDirection:'column',
//             }}
//           >
//             {Icon && <Icon size={16} />}
//             {label}
//           </span>
//         }
//       />
//     );
//   };

//   return (
//     <div style={{ padding: '10px',display:'flex',justifyContent:'center' }}>
//       <div
//         style={{
//           marginTop: '20px',
//           display: 'flex',
//           flexWrap: 'wrap',
//           gap: '10px',
//           backgroundColor:'grey',
//           padding:'20px',
//           borderRadius:'10px',

//         }}
//       >
//         {/* Original Nodes */}
//         {renderNode('customInput', 'Input')}
//         {renderNode('llm', 'LLM')}
//         {renderNode('customOutput', 'Output')}
//         {renderNode('text', 'Text')}

//         {/* New Nodes */}
//         {renderNode('math', 'Math')}
//         {renderNode('filter', 'Filter')}
//         {renderNode('timer', 'Timer')}
//         {renderNode('conditional', 'Conditional')}
//         {renderNode('transform', 'Transform')}
//       </div>
//     </div>
//   );
// };

import { DraggableNode } from './draggableNode';
import { NODE_ICONS } from '../toolbar/nodeIcons';
import './PipelineToolbar.css';

export const PipelineToolbar = () => {
  const renderNode = (type, label) => {
    const Icon = NODE_ICONS[type];

    return (
      <DraggableNode
        key={type}
        type={type}
        label={
          <div className="toolbar-node-label">
            {Icon && <Icon size={16} />}
            <span>{label}</span>
          </div>
        }
      />
    );
  };

  return (
    <div className="pipeline-toolbar">
      <div className="pipeline-toolbar__container">
        {renderNode('customInput', 'Input')}
        {renderNode('llm', 'LLM')}
        {renderNode('customOutput', 'Output')}
        {renderNode('text', 'Text')}

        {renderNode('math', 'Math')}
        {renderNode('filter', 'Filter')}
        {renderNode('timer', 'Timer')}
        {renderNode('conditional', 'Conditional')}
        {renderNode('transform', 'Transform')}
      </div>
    </div>
  );
};
