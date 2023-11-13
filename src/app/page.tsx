import { FiHome } from 'react-icons/fi';
import HeadlinesDashboard from './common/headlines-dashboard';
import SpendsDashboard from './common/spends-dashboard';

export default function Home() {
  return (
    <main className='flex min-w-full min-h-screen flex-col bg-zinc-100 '>
      <div className='flex min-w-screen flex-row items-center p-10 z-20'>
        <div
          className='flex min-w-3 bg-transparent p-4 rounded-lg'
          style={{
            textShadow: '1px 0px 10px #CCCCCC',
          }}
        >
          <FiHome
            style={{
              color: '#FFFFFF',
              fontSize: '18px',
              margin: '5px',
            }}
          />
          <span className='text-xl text-white'>Homestead</span>
        </div>
      </div>
      <div className='flex max-h-screen  flex-col p-10'>
        <video
          id='background-video'
          autoPlay
          muted
          loop
          style={{
            height: '100vh',
            width: '100vw',
            objectFit: 'cover',
            position: 'fixed',
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
          }}
        >
          <source src='/mountains.mp4' type='video/mp4' />
        </video>

        <div className='grid grid-cols-12 grid-flow-row-dense gap-3'>

          {/* Spends Dashboard Widget */}
          <div className='grid col-span-2 col-start-3 z-20 max-h-screen bg-gradient-to-r from-blue-400 to-blue-600 via-blue-500 rounded-xl overflow-scroll'>
            <div className='h-100'>
              <SpendsDashboard />
            </div>
          </div>

          {/* News Widget */}
          <div className='grid col-span-6 z-20 max-h-screen backdrop-blur-lg  bg-black/10 rounded-xl overflow-scroll'>
            <div className='h-100'>
              <HeadlinesDashboard />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
