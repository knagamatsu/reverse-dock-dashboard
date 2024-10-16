import React, { useState } from 'react';
import { Editor } from 'ketcher-react';
import { StandaloneStructServiceProvider } from 'ketcher-standalone';
import { Button } from "@/components/ui/button"

const structServiceProvider = new StandaloneStructServiceProvider();

function LigandEditor() {
  const [ketcher, setKetcher] = useState(null);
  const [smiles, setSmiles] = useState('');

  const handleInit = (ketcherInstance) => {
    setKetcher(ketcherInstance);
  };

  const handleGetSmiles = async () => {
    if (ketcher) {
      try {
        const smilesString = await ketcher.getSmiles();
        setSmiles(smilesString);
      } catch (error) {
        console.error('Error getting SMILES:', error);
      }
    }
  };

  return (
    <div className="space-y-4">
      <div style={{ width: '100%', height: '400px' }}>
        <Editor
          staticResourcesUrl={import.meta.env.BASE_URL}
          structServiceProvider={structServiceProvider}
          onInit={handleInit}
        />
      </div>
      <Button onClick={handleGetSmiles}>Get SMILES</Button>
      {smiles && <p className="mt-2">SMILES: {smiles}</p>}
    </div>
  );
}

export default LigandEditor;