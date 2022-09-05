import Pagination from './Pagination'
import Search from './Search'
import './App.css'
import Stories from './Stories'

const App = () => {
  
  return (
    <>
      <div className='wrap'>
        <h1>News Searh</h1>
        <Search />
        <Stories />
        <Pagination />
      </div>
    </>
  )
}

export default App