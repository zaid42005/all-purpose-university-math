import { useState } from 'react';


function reducedRowEchelonForm(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let lead = 0;
  for (let r = 0; r < rows; r++) {
    if (cols <= lead) {
      return;
    }
    let i = r;
    while (matrix[i][lead] === 0) {
      i++;
      if (rows === i) {
        i = r;
        lead++;
        if (cols === lead) {
          return;
        }
      }
    }
    let tmp = matrix[i];
    matrix[i] = matrix[r];
    matrix[r] = tmp;
    let val = matrix[r][lead];
    for (let j = 0; j < cols; j++) {
      matrix[r][j] /= val;
    }
    for (let i = 0; i < rows; i++) {
      if (i === r) continue;
      val = matrix[i][lead];
      for (let j = 0; j < cols; j++) {
        matrix[i][j] -= val * matrix[r][j];
      }
    }
    lead++;
  }
  return matrix;
}

const MatrixCalculator = () => {
  const [numRows, setNumRows] = useState(3);
  const [numCols, setNumCols] = useState(3);
  const [matrix, setMatrix] = useState(Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => 0)));
  const [resultMatrix, setResultMatrix] = useState([]);

  const handleCalculate = () => {
    const result = reducedRowEchelonForm(matrix.map(row => [...row])); 
    setResultMatrix(result || []); 
  };

  const handleCellChange = (e, rowIndex, colIndex) => {
    const newValue = parseFloat(e.target.value);
    const updatedMatrix = matrix.map((row, i) =>
      i === rowIndex ? row.map((cell, j) => (j === colIndex ? newValue : cell)) : row
    );
    setMatrix(updatedMatrix);
  };


  const handleRowChange = (e) => {
    const newNumRows = parseInt(e.target.value);
    setNumRows(newNumRows);
    setMatrix(Array.from({ length: newNumRows }, () => Array.from({ length: numCols }, () => 0)));
  };

  const handleColChange = (e) => {
    const newNumCols = parseInt(e.target.value);
    setNumCols(newNumCols);
    setMatrix(Array.from({ length: numRows }, () => Array.from({ length: newNumCols }, () => 0)));
  };

  return (
    <div className='container'>
      
      <div>
        <label>Number of Rows:</label>
        <input type="number" value={numRows} onChange={handleRowChange} />
        <label>Number of Columns:</label>
        <input type="number" value={numCols} onChange={handleColChange} />
      </div>

    
      <div>
        <h2>Input Matrix</h2>
        <table>
          <tbody>
            {matrix.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <td key={colIndex}>
                    <input
                      type="number"
                      value={cell}
                      onChange={(e) => handleCellChange(e, rowIndex, colIndex)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
      <button onClick={handleCalculate}>Calculate RREF</button>

  
      <div>
        <h2>Result Matrix (RREF)</h2>
        <table>
          <tbody>
            {resultMatrix.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <td key={colIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MatrixCalculator;
