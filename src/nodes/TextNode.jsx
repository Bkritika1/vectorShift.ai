
import { useState, useEffect, useRef } from 'react';
import { BaseNode } from './BaseNode';
import { Type } from 'lucide-react';
import './TextNode.css';

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);

  const textareaRef = useRef(null);

  useEffect(() => {
    if (!textareaRef.current) return;
    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height =
      textareaRef.current.scrollHeight + 'px';
  }, [text]);

  useEffect(() => {
    if (data) {
      data.text = text;
    }
  }, [text, data]);

  useEffect(() => {
    const regex = /\{\{\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*\}\}/g;
    const found = [...text.matchAll(regex)].map((m) => m[1]);
    setVariables([...new Set(found)]);
  }, [text]);

  return (
    <BaseNode
      id={id}
      title="Text"
      icon={<Type size={14} />}
      inputs={variables.map((v) => ({ id: v }))}
      outputs={[{ id: 'out' }]}
      className="text-node"
    >
      <textarea
        ref={textareaRef}
        className="text-node__textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text with {{variables}}"
      />
    </BaseNode>
  );
};
