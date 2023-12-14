import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import { ArrowUpTrayIcon } from "@heroicons/react/20/solid";


export default function Transaction({ param }) {
     if (param.type === 'income') {
          return <div className='flex my-2 relative' key={param.id}>
               <ArrowDownTrayIcon className="h-10 w-10 text-black m-2" />
               <div className="ml-4">
                    <span className="font-bold">{param.first} </span><br />
                    <span>{param.second} </span>
               </div>
               <div className="text-right absolute right-3 h-full"><span className='font-semibold text-green-500'>+{param.amount}€</span><br /><span>{param.date} </span></div>
          </div>
     } else {
          return <div className='flex my-2 relative'>
               <ArrowUpTrayIcon className="h-10 w-10 text-black m-2" />
               <div className="ml-4">
                    <span className="font-bold">{param.first} </span><br />
                    <span>{param.second} </span>
               </div>
               <div className="text-right absolute right-3 h-full"><span className='font-semibold text-red-500'>-{param.amount}€</span><br /><span>{param.date} </span></div>
          </div>
     }
}