


import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { Filter } from 'lucide-react';
import './FilterNode.css';

export const FilterNode = ({ id, data }) => {
  const [condition, setCondition] = useState(
    data?.condition || 'contains'
  );

  return (
    <BaseNode
      id={id}
      title="Filter"
      icon={<Filter size={16} />}
      inputs={[{ id: 'input' }]}
      outputs={[{ id: 'output' }]}
    >
      <label className="filter-node__label">
        Condition
        <select
          className="filter-node__select"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
        >
          <option value="contains">Contains</option>
          <option value="equals">Equals</option>
          <option value="startsWith">Starts With</option>
          <option value="endsWith">Ends With</option>
        </select>
      </label>
    </BaseNode>
  );
};
