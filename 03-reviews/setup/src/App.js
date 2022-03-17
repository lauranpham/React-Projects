import React from 'react';
import Review from './Review';
import { FaEdit } from "react-icons/fa";
function App() {
  return <main>
    <section className="container">
      <div className="title">
        <h2>our reviews<FaEdit/></h2>
        <div className="underline"></div>
      </div>
      <Review/>
    </section>
  </main>
}

export default App;
