import React from "react";
import {
  Route, Routes
} from "react-router-dom";
//import Footer from './components/layouts/Footer'
import GithubCorner from "react-github-corner";
import ChartList from './components/chartjs/Chart-List';
import Header from './components/layouts/Header';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from "./components/pages/NotFound";
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
                  <Home />
                </main>
              }>
              </Route>
              <Route path='/chartjs' element={<ChartList />} />
              <Route path='/about' element={<About />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </article>
    </>
  )
}

export default App