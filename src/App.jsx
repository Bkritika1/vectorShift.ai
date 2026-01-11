import PipelineUI from './canvas/PipelineUI.jsx';
import { PipelineToolbar } from './toolbar/PipelineToolbar.jsx';

function App() {
  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      {/* <SubmitButton /> */}
    </div>
  );
}

export default App;
