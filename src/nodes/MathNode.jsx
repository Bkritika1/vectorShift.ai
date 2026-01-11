

import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { Calculator } from 'lucide-react';
import './MathNode.css';

export const MathNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || 'add');
  const [input1, setInput1] = useState(data?.input1 || 0);
  const [input2, setInput2] = useState(data?.input2 || 0);

  const computeResult = () => {
    const a = Number(input1) || 0;
    const b = Number(input2) || 0;
    switch (operation) {
      case 'add': return a + b;
      case 'subtract': return a - b;
      case 'multiply': return a * b;
      case 'divide': return b !== 0 ? a / b : '∞';
      default: return 0;
    }
  };

  return (
    <BaseNode
      id={id}
      title="Math"
      icon={<Calculator size={16} />}
      inputs={[{ id: 'input1' }, { id: 'input2' }]}
      outputs={[{ id: 'result' }]}
    >
      <label className="math-node__label">
        Operation
        <select
          className="math-node__select"
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="add">Add</option>
          <option value="subtract">Subtract</option>
          <option value="multiply">Multiply</option>
          <option value="divide">Divide</option>
        </select>
      </label>

      <input
        className="math-node__input"
        type="number"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      />

      <input
        className="math-node__input"
        type="number"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      />

      <div className="math-node__result">
        Result: {computeResult()}
      </div>
    </BaseNode>
  );
};
