import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { sampleProducts } from "./data";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>TS Amazone</header>
      <main>
        <ul>
          {sampleProducts.map((product) => (
            <li key={product.slug}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h2>{product.name}</h2>
              <h3>${product.price}</h3>
            </li>
          ))}
        </ul>
      </main>
      <footer>All rights reserved</footer>
    </>
  );
}

export default App;
