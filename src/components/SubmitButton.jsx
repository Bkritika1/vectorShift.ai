

// SubmitButton.jsx
import './SubmitButton.css';

export const SubmitButton = ({ nodes, edges }) => {
  const handleSubmit = async () => {
    if (!nodes?.length) {
      alert('Please add at least one node');
      return;
    }

    try {
      const res = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nodes: nodes.map((n) => ({ id: n.id })),
          edges: edges.map((e) => ({
            source: e.source,
            target: e.target,
          })),
        }),
      });

      const result = await res.json();

      alert(
        `Pipeline Summary
------------------
Nodes: ${result.num_nodes}
Edges: ${result.num_edges}
Is DAG: ${result.is_dag ? 'Yes ✅' : 'No ❌'}`
      );
    } catch (error) {
      alert('Backend not running ❌');
      console.error(error);
    }
  };

  return (
    <div className="submit-button__wrapper">
      <button
        className="submit-button"
        onClick={handleSubmit}
        type="button"
      >
        Submit Pipeline
      </button>
    </div>
  );
};
