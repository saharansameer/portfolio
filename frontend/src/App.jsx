import { TextGenerate, Lamp } from './components/index';
import {Link} from 'react-router-dom';

function App() {
  return (
    <>
      <div className='h-screen p-5 flex flex-col'>
        <Lamp/>
        <div className='flex flex-col items-center'>
          <h2 className='font-bold text-2xl mb-5'>Reach out me at</h2>
          <div className='flex flex-row gap-5'>
            <Link to="mailto:hello@sameer.im">
              <img src="/email.png" alt="Mail: hello@sameer.im" width="50px" title="hello@sameer.im"
              className='hover:w-14 hover:shadow-lg hover:shadow-amber-300 rounded-full transition-all ease-linear' />
            </Link>
            
            <Link to="https://x.com/txsameer">
              <img src="/xtwitter.png" alt="twitter/x" width="50px" 
              className='hover:w-14 hover:shadow-lg hover:shadow-amber-300 rounded-full transition-all ease-linear' />
            </Link>

            <Link to="https://github.com/saharansameer">
              <img src="/github.png" alt="github" width="50px" 
              className='hover:w-14 hover:shadow-lg hover:shadow-amber-300 rounded-full transition-all ease-linear' />
            </Link>

            <Link to="https://wa.me/917597940794">
              <img src="/wa.png" alt="whatsapp" width="50px" 
              className='hover:w-14 hover:shadow-lg hover:shadow-amber-300 rounded-3xl transition-all ease-linear' />
            </Link>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
