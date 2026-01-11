
import { Brain } from 'lucide-react';
import { BaseNode } from './BaseNode';
import './LLMNode.css';

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      icon={<Brain size={16} />}
      inputs={[
        { id: 'system' },
        { id: 'prompt' },
      ]}
      outputs={[
        { id: 'response' },
      ]}
    >
      <div className="llm-node__content">
        This is a LLM.
      </div>
    </BaseNode>
  );
};
