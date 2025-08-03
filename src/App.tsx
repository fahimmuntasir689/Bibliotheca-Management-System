
import { Link, Outlet } from 'react-router'
import './App.css'
import './index.css'
import { ModeToggle } from './components/ui/mode-toggle'

function App() {

  return (
    <>
      <div className='border max-w-6xl m-auto'>
        <div className='flex justify-between'>
          <Link to='/'>
            <h1 className='font-bold text-3xl'>BiblioTheca</h1>
          </Link>
          <div className='flex gap-10'>
            <Link to='/books'>All Books</Link>
            <Link to='/create-book'>Add Books</Link>
            <Link to='/borrow-summary'>Borrow Summary</Link>
          </div>
          <ModeToggle></ModeToggle>
        </div>
        {/* <h1 className='text-4xl font-light'>Welcome to Library Management System</h1> */}
        <Outlet></Outlet>

      </div>
      <footer className='border bg-blue-50'>
        <h1 className='text-blue-500 text-3xl'>It is Footer</h1>
      </footer>
    </>

  )
}

export default App
