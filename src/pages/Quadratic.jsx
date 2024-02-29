import { useState } from "react";
const Quadratic = () => {
    let root1, root2, real, imaginary;
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [c, setC] = useState("");
    const [rootValue, setRootValue] = useState([]);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      switch (name) {
        case "a":
          setA(value);
          break;
        case "b":
          setB(value);
          break;
        case "c":
          setC(value);
          break;
        default:
          break;
      }
    };
  
    const handleQuadraticSolutions = () => {
      const aVal = parseFloat(a); 
      const bVal = parseFloat(b); 
      const cVal = parseFloat(c); 
  
      let discriminant = bVal * bVal - 4 * aVal * cVal;
  
      if (discriminant > 0) {
        root1 = -bVal + Math.sqrt(discriminant) / (2 * aVal);
        root2 = -bVal + Math.sqrt(discriminant) / (2 * aVal);
        setRootValue([root1, root2]);
      } else if (discriminant == 0) {
        root1 = root2 = -bVal / (2 * aVal);
        setRootValue([root1, root2]);
      } else {
        real = (-bVal / (2 * aVal)).toFixed(10);
        imaginary = (Math.sqrt(-discriminant) / (2 * aVal)).toFixed(10);
        setRootValue([`${real} + ${imaginary}i`, `${real} - ${imaginary}i`]);
      }
    };
  
    return (
    <div className="container" >  
    <h2>Input Coefficients</h2>
      <form >
          <label>
            Enter a 
            <input
              type="number"
              name="a"
              onChange={handleInputChange}
              value={a}
            />
          </label>
        </form>
        <form>
          <label>
            Enter b 
            <input
              type="number"
              name="b"
              onChange={handleInputChange}
              value={b}
            />
          </label>
        </form>
        <form>
          <label>
            Enter c 
            <input
              type="number"
              name="c"
              onChange={handleInputChange}
              value={c}
            />
          </label>
        </form>
        <div/>
        <button onClick={handleQuadraticSolutions}>
          Find the solutions, if any
        </button>
        <p>Here are the roots x coordinates: <br></br>  {rootValue.join(", ")}</p>
      </div>
    );
  }

  export default Quadratic