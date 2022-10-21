import { useState } from 'react';
const raw = require('../../DOCS.txt');

function DocsReader() {
  const [text, setText] = useState();
  fetch(raw)
    .then((response) => response.text())
    .then((textContent) => {
      setText(textContent);
    });
  return text || "Loading...";
}

const About = () => {

  return (
    <div>
      <div className="headings">
        <h2>About</h2>
        <h3>Sivun tarkoitus</h3>
      </div>
      <pre>
        <code style={{ 'width': '40em' }}>{DocsReader()}</code>
      </pre>
      <p><br /><br />
        Authorized by <br />
        <a
          href="https://www.linkedin.com/in/juhahalmu/"
          target="_blank"
          rel="noreferrer"
          data-tooltip="To my LinkedIn page"
          aria-label="to my linkedin page"
        >
          Juha Halmu 2022
        </a></p>
    </div>
  )
}

export default About
