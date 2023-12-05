import { useState } from 'react'
import './App.css'
import { Tabs } from 'flowbite-react';
import { CustomFlowbiteTheme } from 'flowbite-react';


function App() {
    const [count, setCount] = useState(0)

    const customTheme = new CustomFlowbiteTheme({
        button: {
            color: {
                primary: 'bg-red-500 hover:bg-red-600',
            },
        },
    })


    return (
        <>
            <div className="flex h-screen">
                <div className="w-2/3">
                    {/* <div className="w-10/12 bg-gray-200 justify-center m-auto">
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
                        <button className='w-2/3 m-auto justify-center bg-blue-500 h-6'>Add a transaction</button>
                    </div> */}
                    <div className="text-center">
                        <span>New transaction</span>
                        <h1>200€</h1>
                        <div className="w-1/2">
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
                            <Flowbite theme={{ customTheme }}>
                                <Button color="primary">Click me</Button>
                            </Flowbite>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 bg-blue-200"></div>
            </div>
        </>
    )
}

export default App
