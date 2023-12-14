export default function Transaction({ param }) {
     if (param.type === 'income') {
          return <div className='flex my-2 relative'>
               <img src="https://fakeimg.pl/600x400" alt="" className="w-12 h-12 rounded-lg" />
               <div className="ml-4">
                    <span className="font-bold">{param.first} </span><br />
                    <span>{param.second} </span>
               </div>
               <div className="text-right absolute right-3 h-full"><span className='font-semibold text-green-500'>+{param.amount}€</span><br /><span>{param.date} </span></div>
          </div>
     } else {
          return <div className='flex my-2 relative'>
               <img src="https://fakeimg.pl/600x400" alt="" className="w-12 h-12 rounded-lg" />
               <div className="ml-4">
                    <span className="font-bold">{param.first} </span><br />
                    <span>{param.second} </span>
               </div>
               <div className="text-right absolute right-3 h-full"><span className='font-semibold text-red-500'>-{param.amount}€</span><br /><span>{param.date} </span></div>
          </div>
     }
}