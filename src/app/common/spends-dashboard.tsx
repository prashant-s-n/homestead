'use client';

export type Article = {
  id: string;
  title: string;
  author: string;
  urlToImage: string;
  description: string;
  url: string;
};

function SpendsDashboard() {
  return (
    <div className='grid grid-flow-row max-w-full overflow-hidden'>
      <div className='grid items-center p-4 gap-1 spacing-1'>
        <span className='text-white text-xl p-0'>Spends</span>
        <span className='text-zinc-200 text-xs p-0'>by Homestead Finance</span>
      </div>

      <div className='grid p-2 gap-1'>
        <div className='stats grid grid-flow-row stats bg-transparent text-white'>
          <div className='stat bg-transparent'>
            <div className='stat-title text-white'>
                            Upcoming SIP
              <span className='text-xs text-zinc-200 py-1 block'>
                                Mirae Asset Tax Saver Fund
              </span>
            </div>
            <div className='stat-value'>
                            ₹15,000
            </div>
            <div className='stat-actions'>
              <button className='btn btn-sm glass text-white'>Add funds</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpendsDashboard;
