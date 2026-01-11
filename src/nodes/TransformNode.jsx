
import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { Shuffle } from 'lucide-react';
import './TransformNode.css';

export const TransformNode = ({ id, data }) => {
  const [type, setType] = useState(
    data?.transformType || 'uppercase'
  );

  return (
    <BaseNode
      id={id}
      title="Transform"
      icon={<Shuffle size={16} />}
      inputs={[{ id: 'input' }]}
      outputs={[{ id: 'output' }]}
    >
      <label className="transform-node__label">
        Type
        <select
          className="transform-node__select"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="uppercase">Uppercase</option>
          <option value="lowercase">Lowercase</option>
          <option value="trim">Trim</option>
          <option value="reverse">Reverse</option>
        </select>
      </label>
    </BaseNode>
  );
};
