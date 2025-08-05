
import { Link, Outlet } from 'react-router'
import './App.css'
import './index.css'
import { ModeToggle } from './components/ui/mode-toggle'

function App() {

  return (
    <div className=''>

      <div className='max-w-6xl m-auto pt-5'>
        <div className='flex justify-between items-center mb-12'>
          <Link to='/'>
            <h1 className='font-bold text-3xl font-mono'>BiblioTheca</h1>
          </Link>
          <div className='flex gap-10 text-shadow-violet-400 font-medium'>
            <Link to='/books'>All Books</Link>
            <Link to='/create-book'>Add Books</Link>
            <Link to='/borrow-summary'>Borrow Summary</Link>
          </div>
          <ModeToggle></ModeToggle>
        </div>
        <div className='min-h-screen'>
          <Outlet></Outlet>
        </div>
      </div>
      <footer className='border bg-gray-400 p-14'>
        <h1 className='text-black text-sm font-medium text-center'>© BiblioTheca ~ A Library Management Application</h1>
      </footer>
    </div>

  )
}

export default App
