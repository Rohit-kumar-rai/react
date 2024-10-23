import { useState, useEffect } from "react";
import "./App.css";
export default function App() {
  const [search, setSearch] = useState("keyword");
  const [count, setCount] = useState(0);
  let url = `https://newsapi.org/v2/everything?q=${search}&apiKey=47abb090594248b4a31f20a1f68b0b32`;
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const fecthUrl = await fetch(url);
      const fetchedData = await fecthUrl.json();
      setData(fetchedData.articles);
    };
    fetchData();
  }, [count]);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <input type="text" onChange={handleChange} value={search} />
      <button onClick={handleClick}>search</button>
      <div className="container">
        {data.map((data) => {
          return (
            <div className="card" key={data.url}>
              <h2>{data.title}</h2>
              <a href={data.url}>
                <img src={data.urlToImage}></img>
              </a>

              <h3>{data.description}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
}
