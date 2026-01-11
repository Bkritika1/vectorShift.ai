

import { BaseNode } from './BaseNode';
import './ConditionalNode.css';

export const ConditionalNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Conditional"
      inputs={[{ id: 'condition' }]}
      outputs={[
        { id: 'true' },
        { id: 'false' },
      ]}
    >
      <p className="conditional-node__text">
        Routes based on condition
      </p>
    </BaseNode>
  );
};
