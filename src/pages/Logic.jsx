import { useState } from "react"

const Logic = () => {
    const [input, setInput] = useState("");
    const [result,setResult] = useState("");
  
    const handleInputChange = (event) => {
      const { value } = event.target;
      setInput(value)
    };

    const handleLogic = () =>{
        setResult(input)
    }

    return(
    <div className="container">
        <h2> Squished Logic says this is coming soon, call 1-800-273-8255 if ur really struggling without this</h2>
        <img src = "https://www.usmagazine.com/wp-content/uploads/2019/10/Logic-Welcomes-Baby-Boy-With-Brittany-Noell-After-Rapping-Announcement.jpg?w=1200&quality=40&strip=all" style={{width: "30vw", height: "30vh"}}></img>
        <form>
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
      <button onClick={ handleLogic }>
        Evaluate 
      </button>
      <h3> Result: { result }</h3>

    </div>
    )
}

export default Logic