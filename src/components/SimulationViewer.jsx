import React, { useEffect, useRef } from 'react';

function SimulationViewer() {
  const viewerRef = useRef(null);

  useEffect(() => {
    if (viewerRef.current && window.$3Dmol) {
      const viewer = window.$3Dmol.createViewer(viewerRef.current, {
        backgroundColor: 'white',
      });

      // 原子座標を含むPDBファイルのURLに変更
      const pdbUri = 'https://files.rcsb.org/download/1CRN.pdb';

      fetch(pdbUri)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.text();
        })
        .then((pdbData) => {
          console.log('PDB Data:', pdbData);

          // モデルを追加
          viewer.addModel(pdbData, 'pdb');
          viewer.setStyle({}, { cartoon: { colorscheme: 'rainbow' } });
          viewer.zoomTo();
          viewer.render();
        })
        .catch((error) => {
          console.error('Error fetching PDB file:', error);
        });
    }
  }, []);

  return (
    <div
      ref={viewerRef}
      style={{ height: '400px', width: '100%', position: 'relative' }}
    >
      <div>Loading 3D viewer...</div>
    </div>
  );
}

export default SimulationViewer;
