// this is all gpt bullshit that only partially works, need to figure this out later


import { useState } from "react";
const Calc1 = () => {
    const [input, setInput] = useState("");
    const [differential, setDifferential] = useState("");
  
    const handleInputChange = (event) => {
      const { value } = event.target;
      setInput(value)
    };
  
    const handleDifferentiation = () => {
        if (!input) return; // Check if input is not empty
        
        // Parse the input equation
        const terms = input.split(/([+-])/); // Split based on '+' or '-' signs
        
        // Initialize variables to store differentiated terms
        let differentialTerms = [];
        
        // Differentiate each term separately
        let operator = '+';
        terms.forEach(term => {
            if (term === '+' || term === '-') {
                operator = term; // Update operator for next term
                return;
            }
            
            const termMatch = term.match(/(-?\d*)x\^?(\d*)/);
            if (!termMatch) return; // If the format is not correct, skip this term
            
            const coefficient = termMatch[1] ? parseInt(termMatch[1]) : 1; // Extract the coefficient, default to 1 if not provided
            const power = termMatch[2] ? parseInt(termMatch[2]) : 1; // Extract the power, default to 1 if not provided
            
            // Apply the power rule of differentiation
            let differentialCoefficient = coefficient * power;
            let differentialPower = power !== 0 ? power - 1 : 0;
            
            // Apply the quotient rule and chain rule if the term contains division
            if (term.includes('/')) {
                const [numerator, denominator] = term.split('/');
                const numeratorMatch = numerator.match(/(-?\d*)x\^?(\d*)/);
                const denominatorMatch = denominator.match(/(-?\d*)x\^?(\d*)/);
                if (numeratorMatch && denominatorMatch) {
                    const numeratorCoefficient = numeratorMatch[1] ? parseInt(numeratorMatch[1]) : 1;
                    const numeratorPower = numeratorMatch[2] ? parseInt(numeratorMatch[2]) : 1;
                    const denominatorCoefficient = denominatorMatch[1] ? parseInt(denominatorMatch[1]) : 1;
                    const denominatorPower = denominatorMatch[2] ? parseInt(denominatorMatch[2]) : 1;
                    
                    // Apply the quotient rule: (u/v)' = (u'v - uv') / v^2
                    differentialCoefficient = (differentialCoefficient * denominatorCoefficient - coefficient * (numeratorPower * denominatorCoefficient)) / Math.pow(denominatorCoefficient, 2);
                    differentialPower = numeratorPower - denominatorPower;
                }
            }
            
            // Apply the chain rule if the term contains functions
            // (For simplicity, let's assume all functions are of the form 'f(x)' and the chain rule is applied accordingly)
            if (term.includes('f(x)')) {
                // Apply the chain rule: (f(g(x)))' = f'(g(x)) * g'(x)
                differentialCoefficient = differentialCoefficient * calculateDerivativeOfInnerFunction();
            }
            
            // Construct the differentiated term
            let differentialTerm;
            if (differentialPower === 0) {
                differentialTerm = differentialCoefficient !== 0 ? differentialCoefficient.toString() : '';
            } else {
                differentialTerm = `${differentialCoefficient}x^${differentialPower}`;
            }
            
            // Add the differentiated term to the list with appropriate operator
            if (differentialTerm !== '') {
                if (operator === '-') {
                    differentialTerms.push(`- ${differentialTerm}`);
                } else {
                    differentialTerms.push(differentialTerm);
                }
            }
        });
        
        // Join the differentiated terms with ' ' and set the result
        setDifferential(differentialTerms.join(' '));
    };
    
  
    return (
    
    <div className="container" >  
    <h2> THIS ONLY WORKS FOR BASIC INPUTS LIKE 2x^2 + 4x RN</h2>
        <form >
          <label>
            y =  
            <input
              type="text"
              name="a"
              onChange={handleInputChange}
              value={input}
            />
          </label>
        </form>
        
        <div/>
        <button onClick={handleDifferentiation}>
          Differentiate
        </button>
        <p>Here is the derivative of y: <br></br>  {differential}</p>
        <br></br>
      </div>
      
    );
  }

  export default Calc1