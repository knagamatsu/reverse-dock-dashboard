import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import LigandEditor from './components/LigandEditor';
import SequenceEditor from './components/SequenceEditor';
import SimulationViewer from './components/SimulationViewer';
import ResultsTable from './components/ResultsTable';

function App() {
  const [results, setResults] = useState([]);

  const handleSimulate = (sequence, settings) => {
    // Here you would typically call your simulation API
    // For demo purposes, we'll just generate some random results
    const demoResults = [
      { site: 'A:123', energy: -8.5 },
      { site: 'B:45', energy: -7.2 },
      { site: 'C:78', energy: -6.9 },
    ];
    setResults(demoResults);
  };

  return (
    <div className="container mx-auto p-4 space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Ligand Editor</CardTitle>
          </CardHeader>
          <CardContent>
            <LigandEditor />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Docking Simulation</CardTitle>
          </CardHeader>
          <CardContent>
            <SimulationViewer />
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Amino Acid Sequence</CardTitle>
          </CardHeader>
          <CardContent>
            <SequenceEditor onSimulate={handleSimulate} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Results</CardTitle>
          </CardHeader>
          <CardContent>
            <ResultsTable results={results} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;