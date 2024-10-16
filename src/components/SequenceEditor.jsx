import React, { useState } from 'react';
import { Button } from "@/components/ui/button"

const defaultSequence = 'VLSAADKANVKAAWGKVGGQAGAHGAEALERMFLGFPTTKTYFPHFNLSHGSDQVKAHGQKVADALTKAVGHLDDLPGALSALSDLHAHKLRVDPVNFKLLSHCLLVTLAAHHPDDFNPSVHASLDKFLANVSTVLTSKYR';

function SequenceEditor({ onSimulate }) {
  const [sequence, setSequence] = useState(defaultSequence);
  const [settings, setSettings] = useState({
    temperature: 300,
    iterations: 1000,
  });

  const handleSimulate = () => {
    onSimulate(sequence, settings);
  };

  return (
    <div className="space-y-4">
      <textarea
        value={sequence}
        onChange={(e) => setSequence(e.target.value)}
        placeholder="Enter amino acid sequence"
        rows={10}
        className="w-full p-2 border rounded"
      />
      <div className="flex space-x-4">
        <label className="flex flex-col">
          Temperature (K):
          <input
            type="number"
            value={settings.temperature}
            onChange={(e) => setSettings({ ...settings, temperature: Number(e.target.value) })}
            className="p-1 border rounded"
          />
        </label>
        <label className="flex flex-col">
          Iterations:
          <input
            type="number"
            value={settings.iterations}
            onChange={(e) => setSettings({ ...settings, iterations: Number(e.target.value) })}
            className="p-1 border rounded"
          />
        </label>
      </div>
      <Button onClick={handleSimulate}>Run Simulation</Button>
    </div>
  );
}

export default SequenceEditor;