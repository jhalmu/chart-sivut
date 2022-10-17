
const About = () => {
  return (
    <div>
      <div className="headings">
        <h2>About</h2>
        <h3>Sivun tarkoitus</h3>
      </div>
      <p>Sivun tarkoitus on esitellä ChartJS:n moduuleita mitä on valmiina datan kanssa.</p>
      <p>Tarkoituksena olisi, että oikeanlaisen datan tullessa json-muodossa, se löytäisi oikean
        graafin ja näyttäytyisi halutusti.
      </p>

      <p style={{ 'display': 'none' }}>

        <code style={{ 'width': '25em' }}>
          "@testing-library/jest-dom": "^5.16.5",
          "@testing-library/react": "^13.4.0",
          "@testing-library/user-event": "^13.5.0",
          "chart.js": "^3.9.1",
          "react": "^18.2.0",
          "react-chartjs-2": "^4.3.1",
          "react-dom": "^18.2.0",
          "react-github-corner": "^2.5.0",
          "react-icons": "^4.4.0",
          "react-router": "^6.4.1",
          "react-router-dom": "^6.4.1",
          "react-scripts": "^5.0.1",
          "recharts": "^2.1.14",
          "source-map-explorer": "^2.5.3",
          "web-vitals": "^2.1.4"
        </code>
      </p>
      Authorized by <br />
      <a
        href="https://www.linkedin.com/in/juhahalmu/"
        target="_blank"
        rel="noreferrer"
        data-tooltip="To my LinkedIn page"
        aria-label="to my linkedin page"
      >
        Juha Halmu 2022
      </a>
    </div >
  )
}

export default About
