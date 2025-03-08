import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    // data fetching using axios from express server
    axios.get("http://localhost:5000/health").then((res) => {
      setApiData(res.data);
    });

    axios
      .post("http://localhost:5000/submit-answers", {
        name: "John Doe",
        email: "dXK6o@example.com",
        answers: [1, 2, 3, 4, 5],
      })
      .then((res) => {});

    // data fetching using axios
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res.data);
      setApiData(res.data);
    });
  }, []);

  return (
    <div>
      <h1>heading</h1>

      {/* rendering data once data fetched */}
      <p>
        {apiData
          ? apiData.map((item) => {
              return <li>{item.title}</li>;
            })
          : "loading"}
        {/* //loading state when fetching data         */}
      </p>
    </div>
  );
}

export default App;
