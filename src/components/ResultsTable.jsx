import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const sampleResults = [
  { site: 'A:123', energy: -8.5 },
  { site: 'B:45', energy: -7.2 },
  { site: 'C:78', energy: -6.9 },
  { site: 'D:210', energy: -9.1 },
  { site: 'E:156', energy: -7.8 },
];

function ResultsTable({ results }) {
  const displayResults = results.length > 0 ? results : sampleResults;

  return (
    <Table>
      <TableCaption>Docking Simulation Results</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Site</TableHead>
          <TableHead>Energy (kcal/mol)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {displayResults.map((result, index) => (
          <TableRow key={index}>
            <TableCell>{result.site}</TableCell>
            <TableCell>{result.energy.toFixed(2)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ResultsTable;