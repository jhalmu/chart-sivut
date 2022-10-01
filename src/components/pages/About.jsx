import React from 'react'

const About = () => {
  return (
    <div>
      <div className="headings">
        <h2>About</h2>
        <h3>What we have been eaten so far</h3>
      </div>
      <p>
        <ul>
          <li>React-create-app and:</li>
          <li>"chart.js": "^3.9.1",</li>
          <li>"react": "^18.2.0",</li>
          <li>"react-chartjs-2": "^4.3.1",</li>
          <li>"react-dom": "^18.2.0",</li>
          <li>"react-github-corner": "^2.5.0",</li>
          <li>"react-icons": "^4.4.0",</li>
          <li>"react-router": "^6.4.1",</li>
          <li>"react-router-dom": "^6.4.1"</li>
        </ul>
        <ul>
          <li>
            Made by{' '}
            <a
              href="https://www.linkedin.com/in/juhahalmu/"
              target="_blank"
              rel="noreferrer"
              data-tooltip="To my LinkedIn page"
              aria-label="to my linkedin page"
            >
              Juha Halmu 2022
            </a>
          </li>
        </ul>
      </p>
    </div>
  )
}

export default About
