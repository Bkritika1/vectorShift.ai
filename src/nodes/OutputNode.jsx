

import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { ArrowRight } from 'lucide-react';
import './OutputNode.css';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace('customOutput-', 'output_')
  );
  const [outputType, setOutputType] = useState(
    data?.outputType || 'Text'
  );

  return (
    <BaseNode
      id={id}
      title="Output"
      icon={<ArrowRight size={16} />}
      inputs={[{ id: 'value' }]}
    >
      <label className="output-node__label">
        Name
        <input
          className="output-node__input"
          type="text"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
        />
      </label>

      <label className="output-node__label">
        Type
        <select
          className="output-node__select"
          value={outputType}
          onChange={(e) => setOutputType(e.target.value)}
        >
          <option value="Text">Text</option>
          <option value="Image">Image</option>
        </select>
      </label>
    </BaseNode>
  );
};
