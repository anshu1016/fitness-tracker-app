import './App.css';
import toast,{ Toaster } from 'react-hot-toast';
import Header from './components/Header';
import { ErrorPage } from './pages/ErrorPage';
import Exercise from './pages/Exercise';
import Foods from './pages/Foods';
import Goals from './pages/Goals';
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import { useSelector } from 'react-redux';
function App() {
  const error = useSelector((state)=>state?.error)
  if(error){
    toast.error(error?.message ?? "Something went wrong")
  }
  return (
    <div className="App">
      
     <Header/>
     <main>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/exercises" element={<Exercise/>}/>
      <Route path="/goals" element={<Goals/>}/>
      <Route path="/calories-intake" element={<Foods/>}/>
      <Route path='*' element={<ErrorPage/>}/>
     </Routes>

     <Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{
    // Define default options
    className: '',
    duration: 1300,
    style: {
      background: '#111',
      color: '#fff',
      border:'1px solid '
    },

    // Default options for specific types
    success: {
      duration: 1300,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }}
/>
     </main>
      
    </div>
  );
}

export default App;