import { useState } from 'react'
import './App.css'
// import { Tabs } from 'flowbite-react';
import Tabs from './components/tabs'


function App() {
    const [amount, setAmount] = useState(0)

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    }

    return (
        <>
            <div className="flex h-screen">
                <div className="w-2/3">
                    <div className="w-10/12 bg-gray-200 justify-center m-auto">
                        <h1 className='font-semibold text-2xl'>My account</h1>
                        <div className="flex">
                            <p>Balance</p>
                            <p className='text-3xl font-bold'>0€</p>
                        </div>
                        <p>History</p>
                        <div className='flex'>
                            <span>Achat de nourriture</span>
                            <span className='font-semibold'>200€</span>
                        </div>


                        {/* <!-- Modal toggle --> */}
                        <button data-modal-target="default-modal" data-modal-toggle="default-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                            Toggle modal
                        </button>

                        {/* <!-- Main modal --> */}
                        <div id="default-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-2/3 md:inset-0 h-[calc(100%-1rem)] max-h-full">
                            <div class="relative p-4 w-full max-w-2xl max-h-full">
                                {/* <!-- Modal content --> */}
                                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                    {/* <!-- Modal header --> */}
                                    <div class="flex items-center justify-center p-4 md:p-5  rounded-t dark:border-gray-600">
                                        <span className='font-medium mt-3'>New transaction</span>
                                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                            </svg>
                                            <span class="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                    {/* <!-- Modal body --> */}
                                    <div class="p-4 md:p-5 space-y-4">
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
                                                <Tabs>
                                                    <button label="Expense" className=''>

                                                        <form class=" mx-auto">
                                                            <input type="number" id="" aria-describedby="helper-text-explanation" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3" placeholder="Amount" onChange={handleAmountChange} />
                                                            <input type="text" id="" aria-describedby="helper-text-explanation" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3" placeholder="Description" />
                                                            <select id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3">
                                                                <option>Category</option>
                                                                <option>United States</option>
                                                                <option>Canada</option>
                                                                <option>France</option>
                                                                <option>Germany</option>
                                                            </select>
                                                            {/* <button type="button" class="text-white w-full bg-black focus:outline-none focus:ring-2 focus:ring-gray-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add transaction</button> */}
                                                        </form>

                                                    </button>
                                                    <div label="Income">

                                                        <form class=" mx-auto">
                                                            <input type="number" id="" aria-describedby="helper-text-explanation" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3" placeholder="Amount" onChange={handleAmountChange} />
                                                            <input type="text" id="" aria-describedby="helper-text-explanation" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3" placeholder="Origin" />
                                                            <input type="text" id="" aria-describedby="helper-text-explanation" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3" placeholder="Object" />
                                                            {/* <button type="button" class="text-white w-full bg-black focus:outline-none focus:ring-2 focus:ring-gray-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add transaction</button> */}
                                                        </form>

                                                    </div>
                                                    <div label="Investment">

                                                        <form class=" mx-auto">
                                                            <input type="number" id="" aria-describedby="helper-text-explanation" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3" placeholder="Amount" onChange={handleAmountChange} />
                                                            <input type="text" id="" aria-describedby="helper-text-explanation" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3" placeholder="Platform" />
                                                            <select id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3">
                                                                <option>Category</option>
                                                                <option>Sport bets</option>
                                                                <option>Trading</option>
                                                                <option>Learning</option>
                                                                <option>Other</option>
                                                            </select>
                                                            {/* <button data-modal-hide="default-modal" type="button" class="text-white w-full bg-black focus:outline-none focus:ring-2 focus:ring-gray-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add transaction</button> */}
                                                        </form>

                                                    </div>
                                                </Tabs>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Modal footer --> */}
                                    <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                        <button data-modal-hide="default-modal" type="button" class="text-white w-full bg-black focus:outline-none focus:ring-2 focus:ring-gray-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add transaction</button>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="text-center">

                        <div className="w-1/2">
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
                            <Tabs>
                                <button label="Expense" className=''>

                                    <form class=" mx-auto">
                                        <input type="number" id="" aria-describedby="helper-text-explanation" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3" placeholder="Amount" onChange={handleAmountChange} />
                                        <input type="text" id="" aria-describedby="helper-text-explanation" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3" placeholder="Description" />
                                        <select id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3">
                                            <option>Category</option>
                                            <option>United States</option>
                                            <option>Canada</option>
                                            <option>France</option>
                                            <option>Germany</option>
                                        </select>
                                        <button type="button" class="text-white w-full bg-black focus:outline-none focus:ring-2 focus:ring-gray-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add transaction</button>
                                    </form>

                                </button>
                                <div label="Income">

                                    <form class=" mx-auto">
                                        <input type="number" id="" aria-describedby="helper-text-explanation" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3" placeholder="Amount" onChange={handleAmountChange} />
                                        <input type="text" id="" aria-describedby="helper-text-explanation" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3" placeholder="Origin" />
                                        <input type="text" id="" aria-describedby="helper-text-explanation" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3" placeholder="Object" />
                                        <button type="button" class="text-white w-full bg-black focus:outline-none focus:ring-2 focus:ring-gray-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add transaction</button>
                                    </form>

                                </div>
                                <div label="Investment">

                                    <form class=" mx-auto">
                                        <input type="number" id="" aria-describedby="helper-text-explanation" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3" placeholder="Amount" onChange={handleAmountChange} />
                                        <input type="text" id="" aria-describedby="helper-text-explanation" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3" placeholder="Platform" />
                                        <select id="countries" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3">
                                            <option>Category</option>
                                            <option>Sport bets</option>
                                            <option>Trading</option>
                                            <option>Learning</option>
                                            <option>Other</option>
                                        </select>
                                        <button type="button" class="text-white w-full bg-black focus:outline-none focus:ring-2 focus:ring-gray-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add transaction</button>
                                    </form>

                                </div>
                            </Tabs>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 bg-blue-200"></div>
            </div>
        </>
    )
}

export default App
