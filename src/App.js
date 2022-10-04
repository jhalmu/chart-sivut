import {
  Routes,
  Route
} from "react-router-dom";
//import Footer from './components/layouts/Footer'
import Header from './components/layouts/Header'
import ChartList from './components//Chart-List'
import About from './components/pages/About'
import GithubCorner from "react-github-corner";

const App = () => {
  const customHref = 'https://github.com/jhalmu/chart-sivut'
  return (
    <>
      <GithubCorner
        href={customHref}
        bannerColor="#000"
        octoColor="#fff"
        size={4 + 'em'}
        direction="right"
      />
      <article style={{ marginTop: 4 + 'em' }}>
        <div className="container" data-theme="light">
          <div>
            <Header />
            <Routes>
              <Route path='/' element={
                <main>
                  <ChartList />
                </main>
              }>
              </Route>
              <Route path='/about' element={<About />} />
            </Routes>
          </div>
        </div>
      </article>
    </>
  )
}

export default App