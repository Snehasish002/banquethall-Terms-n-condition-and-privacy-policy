import React from 'react';
import './TermCondition.css';

const termsData = [
  {
    title: "Term One",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, magni nihil reiciendis praesentium non ullam! Et recusandae porro incidunt saepe, repellat consectetur quibusdam, iste, totam delectus ex atque necessitatibus laudantium? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, magni nihil reiciendis praesentium non ullam! Et recusandae porro incidunt saepe, repellat consectetur quibusdam, iste, totam delectus ex atque necessitatibus laudantium?",
  },
  {
    title: "Term Two",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, magni nihil reiciendis praesentium non ullam! Et recusandae porro incidunt saepe, repellat consectetur quibusdam, iste, totam delectus ex atque necessitatibus laudantium?",
  },
  {
    title: "Term Three",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, magni nihil reiciendis praesentium non ullam! Et recusandae porro incidunt saepe, repellat consectetur quibusdam, iste, totam delectus ex atque necessitatibus laudantium?",
  },
  
];




const TermCondition = () => {
  return (
    <div className='main'>
        <div className="header">
            <h1>Terms and conditions</h1>
        </div>
        <div className='underline'/>
        <div className='terms-container'>
          {termsData.map((term, index) => (
            <div key={index} className='term-section'>
              <h2>{term.title}</h2>
              <p className='term-text'>{term.description}</p>

            </div>
          ))}
        </div>
        
    </div>
  )
}

export default TermCondition