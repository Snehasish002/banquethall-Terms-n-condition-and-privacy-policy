import React from 'react'
import './PrivacyPolicy.css'


const privacyData = [
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

const PrivacyPolicy = () => {
  return (
    <div className='main'>
        <div className="header">
            <h1>Privacy & Policy</h1>
        </div>
        <div className='underline'/>
        <div className='privacy-container'>
          {privacyData.map((privacy, index) => (
            <div key={index} className='privacy-section'>
              <h2>{privacy.title}</h2>
              <p className='privacy-text'>{privacy.description}</p>

            </div>
          ))}
        </div>
        
    </div>
  )
}

export default PrivacyPolicy