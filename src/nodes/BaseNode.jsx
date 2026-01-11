


// import { Handle, Position } from 'reactflow';
// import './BaseNode.css';

// export const BaseNode = ({
//   id,
//   title,
//   icon,
//   inputs = [],
//   outputs = [],
//   children,
//   className = '',
// }) => {
//   return (
//     <div className={`base-node ${className}`}>
//       {/* HEADER */}
//       <div className="base-node__header">
//         {icon}
//         <span>{title}</span>
//       </div>

//       {/* BODY */}
//       <div className="base-node__body">
//         {children}
//       </div>

//       {/* INPUT HANDLES */}
//       {inputs.map((input, index) => (
//         <Handle
//           key={input.id}
//           type="target"
//           position={Position.Left}
//           id={input.id}
//           className="base-node__handle base-node__handle--input"
//           style={{
//             top: `${((index + 1) * 100) / (inputs.length + 1)}%`,
//           }}
//         />
//       ))}

//       {/* OUTPUT HANDLES */}
//       {outputs.map((output, index) => (
//         <Handle
//           key={output.id}
//           type="source"
//           position={Position.Right}
//           id={output.id}
//           className="base-node__handle base-node__handle--output"
//           style={{
//             top: `${((index + 1) * 100) / (outputs.length + 1)}%`,
//           }}
//         />
//       ))}
//     </div>
//   );
// };


import { Handle, Position } from 'reactflow';
import './BaseNode.css';

export const BaseNode = ({
  id,
  title,
  icon,
  inputs = [],
  outputs = [],
  children,
  className = '',
}) => {
  return (
    <div className={`base-node ${className}`}>
      {/* HEADER */}
      <div className="base-node__header">
        {icon}
        <span>{title}</span>
      </div>
      {/* BODY */}
      <div className="base-node__body">
        {children}
      </div>
      {/* INPUT HANDLES */}
      {inputs.map((input, index) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={input.id}
          className="base-node__handle base-node__handle--input"
          style={{
            top: `${((index + 1) * 100) / (inputs.length + 1)}%`,
          }}
        />
      ))}
      {/* OUTPUT HANDLES */}
      {outputs.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={output.id}
          className="base-node__handle base-node__handle--output"
          style={{
            top: `${((index + 1) * 100) / (outputs.length + 1)}%`,
          }}
        />
      ))}
    </div>
  );
};