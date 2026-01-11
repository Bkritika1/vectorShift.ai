
import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { Timer } from 'lucide-react';
import './TimerNode.css';

export const TimerNode = ({ id, data }) => {
  const [delay, setDelay] = useState(data?.delay || 1000);

  return (
    <BaseNode
      id={id}
      title="Timer"
      icon={<Timer size={16} />}
      inputs={[{ id: 'trigger' }]}
      outputs={[{ id: 'output' }]}
    >
      <label className="timer-node__label">
        Delay (ms)
        <input
          className="timer-node__input"
          type="number"
          value={delay}
          onChange={(e) => setDelay(e.target.value)}
        />
      </label>
    </BaseNode>
  );
};
