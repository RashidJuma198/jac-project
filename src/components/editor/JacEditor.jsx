import { useState } from 'react';
import Editor from '@monaco-editor/react';
import { executeCode } from '../../api/editor.api';
import ColorSchemePicker from './ColorSchemePicker';

export default function JacEditor() {
  const [code, setCode] = useState(
    'node user { has name; }\nedge knows { has strength; }'
  );
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const runCode = async () => {
    setError('');
    try {
      const res = await executeCode(code);
      setOutput(res.output);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <ColorSchemePicker />
      {error && <div className="error">{error}</div>}

      <Editor
        height="400px"
        language="javascript"
        value={code}
        onChange={setCode}
        options={{ minimap: { enabled: false } }}
      />

      <button onClick={runCode}>Run Code</button>
      <pre>{output}</pre>
    </>
  );
}
