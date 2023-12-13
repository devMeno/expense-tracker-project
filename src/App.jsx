import { useContext, useState } from 'react'
import './App.css'
// import { Tabs } from 'flowbite-react';
import Tabs from './components/tabs'
import { addTransaction } from './components/methods'
import { getHistory } from './components/methods'
import { v4 as uuidv4 } from 'uuid'
import { useRef } from 'react'
import { TypeContext } from './components/typeContext'


function App() {
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState("");
    const [firstAttribute, setFirstAttribute] = useState("");
    const [secondAttribute, setSecondAttribute] = useState("");
    const [type, setType] = useState('Expense');
    const ref = useRef(null);
    const context = useContext(TypeContext);

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    }

    const handleDateChange = (e) => {
        setDate(e.target.value);
    }

    const handleFirstAttributeChange = (e) => {
        setFirstAttribute(e.target.value);
    }

    const handleSecondAttributeChange = (e) => {
        setSecondAttribute(e.target.value);
    }

    const transaction = {
        id: crypto.randomUUID(),
        type: crypto.randomUUID(),
        date: date,
        amount: amount,
        first: firstAttribute,
        second: secondAttribute
    }

    return (
        <>
            <div className="flex h-screen">
                <div className="w-3/5">
                    <div className="w-8/12  justify-center m-auto">
                        <h1 className='font-semibold text-2xl my-4'>My account</h1>
                        <div className="flex">
                            <p>Balance</p>
                            <p className='text-3xl font-bold'>0€</p>
                        </div>
                        <p className='font-semibold mb-3'>History</p>
                        <div className='flex my-2 relative'>
                            <img src="https://fakeimg.pl/600x400" alt="" className="w-12 h-12 rounded-lg" />
                            <div className="ml-4">
                                <span className="font-bold">Title</span><br />
                                <span>Autor</span>
                            </div>
                            <div className="text-right absolute right-3 h-full"><span className='font-semibold text-green-500'>+220€</span><br /><span>date</span></div>
                        </div>
                        <div className='flex my-2 relative'>
                            <img src="https://fakeimg.pl/600x400" alt="" className="w-12 h-12 rounded-lg" />
                            <div className="ml-4">
                                <span className="font-bold">Title</span><br />
                                <span>Autor</span>
                            </div>
                            <div className="text-right absolute right-3 h-full"><span className='font-semibold text-red-500'>-90€</span><br /><span>date</span></div>
                        </div>
                        <div className='flex my-2 relative'>
                            <img src="https://fakeimg.pl/600x400" alt="" className="w-12 h-12 rounded-lg" />
                            <div className="ml-4">
                                <span className="font-bold">Title</span><br />
                                <span>Autor</span>
                            </div>
                            <div className="text-right absolute right-3 h-full"><span className='font-semibold text-green-500'>+220€</span><br /><span>date</span></div>
                        </div>


                        {/* <!-- Modal toggle --> */}
                        <button data-modal-target="default-modal" data-modal-toggle="default-modal" className="text-white w-full bg-black focus:outline-none focus:ring-2 focus:ring-gray-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={console.log(context)}>
                            Add transaction
                        </button>

                        {/* <!-- Main modal --> */}
                        <div id="default-modal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-2/3 md:inset-0 h-[calc(100%-1rem)] max-h-full">
                            <div className="relative p-4 w-full max-w-2xl max-h-full">
                                {/* <!-- Modal content --> */}
                                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                    {/* <!-- Modal header --> */}
                                    <div className="flex items-center justify-between p-4  md:p-1  rounded-t dark:border-gray-600">
                                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                            </svg>
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                    {/* <!-- Modal body --> */}
                                    <div className="p-4 md:p-5 space-y-4 ">
                                        <div className="text-center">

                                            <div className="w-full">
                                                {/* <Tabs aria-label="Pills" style="pills" className='' color='primary'>
        <Tabs.Item active title="Tab 1" className='text-blue-500'>
            <p className="text-sm text-blue-500 dark:text-gray-400">Content 1</p>
        </Tabs.Item>
        <Tabs.Item title="Tab 2">
            <p className="text-sm text-gray-500 dark:text-gray-400">Content 2</p>
        </Tabs.Item>
        <Tabs.Item title="Tab 3">
            <p className="text-sm text-gray-500 dark:text-gray-400">Content 3</p>
        </Tabs.Item>
    </Tabs> */}
                                                <span className='font-medium mt-3'>New transaction</span>
                                                <h1 className='text-6xl font-bold my-4'>{amount}<span className='text-4xl'>€</span> </h1>
                                                <input type="date" id="" aria-describedby="helper-text-explanation" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3" onChange={handleDateChange} />
                                                <Tabs>
                                                    <button label="Expense" className='' onClick={() => {
                                                        setType('income');
                                                        console.log(type)
                                                    }}>

                                                        <form className=" mx-auto">
                                                            <input type="number" id="" aria-describedby="helper-text-explanation" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3" placeholder="Amount" onChange={handleAmountChange} />
                                                            <input type="text" id="" aria-describedby="helper-text-explanation" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3" placeholder="Description" onChange={handleFirstAttributeChange} />
                                                            <select id="countries" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3" onChange={handleSecondAttributeChange}>
                                                                <option>Category</option>
                                                                <option>Family</option>
                                                                <option>Job</option>
                                                                <option>Religion</option>
                                                                <option>Entertainment</option>
                                                            </select>
                                                            {/* <button type="button" className="text-white w-full bg-black focus:outline-none focus:ring-2 focus:ring-gray-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add transaction</button> */}
                                                        </form>

                                                    </button>
                                                    <button label="Income" onClick={() => {
                                                        setType('income');
                                                        console.log(type)
                                                    }}>

                                                        <form className=" mx-auto">
                                                            <input type="number" id="" aria-describedby="helper-text-explanation" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3" placeholder="Amount" onChange={handleAmountChange} />
                                                            <input type="text" id="" aria-describedby="helper-text-explanation" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3" placeholder="Origin" onChange={handleFirstAttributeChange} />
                                                            <input type="text" id="" aria-describedby="helper-text-explanation" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3" placeholder="Object" onChange={handleSecondAttributeChange} />
                                                            {/* <button type="button" className="text-white w-full bg-black focus:outline-none focus:ring-2 focus:ring-gray-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add transaction</button> */}
                                                        </form>

                                                    </button>
                                                    <div label="Investment">

                                                        <form className=" mx-auto">
                                                            <input type="number" id="" aria-describedby="helper-text-explanation" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3" placeholder="Amount" onChange={handleAmountChange} />
                                                            <input type="text" id="" aria-describedby="helper-text-explanation" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3" placeholder="Platform" onChange={handleFirstAttributeChange} />
                                                            <select id="countries" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3" onChange={handleSecondAttributeChange}>
                                                                <option>Category</option>
                                                                <option>Sport bets</option>
                                                                <option>Trading</option>
                                                                <option>Learning</option>
                                                                <option>Other</option>
                                                            </select>
                                                            {/* <button data-modal-hide="default-modal" type="button" className="text-white w-full bg-black focus:outline-none focus:ring-2 focus:ring-gray-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add transaction</button> */}
                                                        </form>

                                                    </div>
                                                </Tabs>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Modal footer --> */}
                                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                        <button data-modal-hide="default-modal" type="button" className="text-white w-full bg-black focus:outline-none focus:ring-2 focus:ring-gray-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add transaction</button>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="text-center">

                        {/* <div className="w-1/2">
                            <Tabs aria-label="Pills" style="pills" className='' color='primary'>
                                <Tabs.Item active title="Tab 1" className='text-blue-500'>
                                    <p className="text-sm text-blue-500 dark:text-gray-400">Content 1</p>
                                </Tabs.Item>
                                <Tabs.Item title="Tab 2">
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Content 2</p>
                                </Tabs.Item>
                                <Tabs.Item title="Tab 3">
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Content 3</p>
                                </Tabs.Item>
                            </Tabs>
                            <span className='font-medium mt-3'>New transaction</span>
                            <h1 className='text-6xl font-bold my-4'>{amount}<span className='text-4xl'>€</span> </h1>
                            <Tabs>
                                <button label="Expense" className=''>

                                    <form className=" mx-auto">
                                        <input type="number" id="" aria-describedby="helper-text-explanation" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3" placeholder="Amount" onChange={handleAmountChange} />
                                        <input type="text" id="" aria-describedby="helper-text-explanation" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3" placeholder="Description" />
                                        <select id="countries" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3">
                                            <option>Category</option>
                                            <option>United States</option>
                                            <option>Canada</option>
                                            <option>France</option>
                                            <option>Germany</option>
                                        </select>
                                        <button type="button" className="text-white w-full bg-black focus:outline-none focus:ring-2 focus:ring-gray-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add transaction</button>
                                    </form>

                                </button>
                                <div label="Income">

                                    <form className=" mx-auto">
                                        <input type="number" id="" aria-describedby="helper-text-explanation" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3" placeholder="Amount" onChange={handleAmountChange} />
                                        <input type="text" id="" aria-describedby="helper-text-explanation" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3" placeholder="Origin" />
                                        <input type="text" id="" aria-describedby="helper-text-explanation" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3" placeholder="Object" />
                                        <button type="button" className="text-white w-full bg-black focus:outline-none focus:ring-2 focus:ring-gray-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add transaction</button>
                                    </form>

                                </div>
                                <div label="Investment">

                                    <form className=" mx-auto">
                                        <input type="number" id="" aria-describedby="helper-text-explanation" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3" placeholder="Amount" onChange={handleAmountChange} />
                                        <input type="text" id="" aria-describedby="helper-text-explanation" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3" placeholder="Platform" />
                                        <select id="countries" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3">
                                            <option>Category</option>
                                            <option>Sport bets</option>
                                            <option>Trading</option>
                                            <option>Learning</option>
                                            <option>Other</option>
                                        </select>
                                        <button type="button" className="text-white w-full bg-black focus:outline-none focus:ring-2 focus:ring-gray-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add transaction</button>
                                    </form>

                                </div>
                            </Tabs>
</div> */}
                    </div>
                </div>
                <div className="w-2/5 bg-blue-200"></div>
            </div>
        </>
    )
}

export default App
