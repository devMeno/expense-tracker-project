import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import { ArrowUpTrayIcon } from "@heroicons/react/20/solid";


export default function Transaction({ param }) {
     if (param.type === 'income') {
          return <div className='flex my-2 relative' key={param.id}>
               <div className="h-10 w-10 rounded-lg bg-green-200 mt-1">
                    <ArrowDownTrayIcon className="h-6 w-6 text-green-500 m-2" />
               </div>
               <div className="ml-4">
                    <span className="font-bold">{param.first} </span><br />
                    <span className="text-sm">{param.second} | {param.type} </span>
               </div>
               <div className="text-right absolute right-1 h-full"><span className='font-semibold text-green-500'>+{param.amount}€</span><br /><span className="text-sm">{param.date} </span></div>
          </div>
     } else {
          return <div className='flex my-2 relative'>
               <div className="h-10 w-10 rounded-lg bg-red-200 mt-1">
                    <ArrowUpTrayIcon className="h-6 w-6 text-red-500 m-2" />
               </div>
               <div className="ml-4">
                    <span className="font-bold">{param.first} </span><br />
                    <span className="text-sm ">{param.second} | {param.type} </span>
               </div>
               <div className="text-right absolute right-1 h-full"><span className='font-semibold text-red-500'>-{param.amount}€</span><br /><span className="text-sm">{param.date} </span></div>
          </div>
     }
}