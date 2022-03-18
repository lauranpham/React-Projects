import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading ] = useState(true);
  const [jobs, setJobs] = useState(url);
  const [index, setIndex] = useState(0);
  
  const fetchJobs = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setJobs(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchJobs()
  }, []);

  if (loading) {
    return <section className="section loading">
      <h1>loading...</h1>
    </section>
  }

  const {company, dates, duties, title} = jobs[index];
  return <section className="section">
    <div className="title">
      <h2>experience</h2>
      <div className="underline"></div>
    </div>
    <div className="jobs-center">
      {/* btn container */}
      {/* job info */}
      <article className="job-info">
        <h2>{title}</h2>
        <h4>{company}</h4>
        <p className="job-date">{dates}</p>
        {duties.map((duty, index) => {
          return <div className="job-desc">
            <FaAngleDoubleRight className="jobicon"></FaAngleDoubleRight>
            <p>{duty}</p>

          </div>
        })}
      </article>
    </div>
  </section>
}

export default App
