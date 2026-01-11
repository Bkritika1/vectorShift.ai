
import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { ArrowRight } from 'lucide-react';
import './InputNode.css';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace('customInput-', 'input_')
  );
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  return (
    <BaseNode
      id={id}
      title="Input"
      icon={<ArrowRight size={16} />}
      outputs={[{ id: 'value' }]}
    >
      <label className="input-node__label">
        Name
        <input
          className="input-node__input"
          type="text"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
        />
      </label>

      <label className="input-node__label">
        Type
        <select
          className="input-node__select"
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </BaseNode>
  );
};
