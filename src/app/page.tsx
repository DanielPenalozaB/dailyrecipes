import { Navbar } from '@/components';
import Image from 'next/image';

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="flex justify-between border-b border-gray-300 px-52">
                <div className="flex w-full items-center justify-between">
                    <ul className="flex">
                        <li
                            className="cursor-pointer border-b border-rose-500 px-4 py-2 text-rose-500"
                            title="All"
                        >
                            All
                        </li>
                        <li
                            className="cursor-pointer border-b border-white px-4 py-2 text-gray-500 hover:border-rose-500 hover:text-rose-500"
                            title="Specials"
                        >
                            Specials
                        </li>
                        <li
                            className="cursor-pointer border-b border-white px-4 py-2 text-gray-500 hover:border-rose-500 hover:text-rose-500"
                            title="Lunch"
                        >
                            Lunch
                        </li>
                        <li
                            className="cursor-pointer border-b border-white px-4 py-2 text-gray-500 hover:border-rose-500 hover:text-rose-500"
                            title="Dinner"
                        >
                            Dinner
                        </li>
                        <li
                            className="cursor-pointer border-b border-white px-4 py-2 text-gray-500 hover:border-rose-500 hover:text-rose-500"
                            title="Snacks"
                        >
                            Snacks
                        </li>
                        <li
                            className="cursor-pointer border-b border-white px-4 py-2 text-gray-500 hover:border-rose-500 hover:text-rose-500"
                            title="Breakfasts"
                        >
                            Breakfasts
                        </li>
                        <li
                            className="cursor-pointer border-b border-white px-4 py-2 text-gray-500 hover:border-rose-500 hover:text-rose-500"
                            title="Drinks"
                        >
                            Drinks
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-4">
                    <div className='h-1/2 w-[1px] bg-gray-300' />
                    <button
                        type="button"
                        className="flex items-center gap-2 fill-gray-700 px-2 py-1 text-sm text-gray-700 hover:fill-gray-500 hover:text-gray-600"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="Layer_1"
                            viewBox="0 0 24 24"
                            className="h-5"
                        >
                            <path d="m22.942 6.837-2.182-2.183.947-.947a1 1 0 1 0 -1.414-1.414l-.947.947-2.183-2.182a3.7 3.7 0 0 0 -5.105 0 3.609 3.609 0 0 0 0 5.106l2.182 2.182-5.894 5.894-2.183-2.182a3.7 3.7 0 0 0 -5.105 0 3.609 3.609 0 0 0 0 5.106l2.182 2.182-.947.947a1 1 0 1 0 1.414 1.414l.947-.947 2.183 2.182a3.609 3.609 0 0 0 5.105 0 3.608 3.608 0 0 0 0-5.105l-2.182-2.182 5.9-5.895 2.182 2.182a3.609 3.609 0 0 0 5.105 0 3.608 3.608 0 0 0 0-5.105zm-11.942 13.553a1.6 1.6 0 0 1 -.472 1.138 1.647 1.647 0 0 1 -2.277 0l-5.779-5.779a1.61 1.61 0 1 1 2.277-2.277l5.779 5.779a1.6 1.6 0 0 1 .472 1.139zm10.528-9.862a1.647 1.647 0 0 1 -2.277 0l-5.779-5.779a1.61 1.61 0 1 1 2.277-2.277l5.779 5.779a1.609 1.609 0 0 1 0 2.277z" />
                        </svg>
                        Dietary
                    </button>
                    <button
                        type="button"
                        className="flex items-center gap-2 fill-gray-700 px-2 py-1 text-sm text-gray-700 hover:fill-gray-500 hover:text-gray-600"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="Layer_1"
                            data-name="Layer 1"
                            viewBox="0 0 24 24"
                            className="h-5"
                        >
                            <path d="M13,0h-2c-2.206,0-4,1.794-4,4V20c0,2.206,1.794,4,4,4h2c2.206,0,4-1.794,4-4V4c0-2.206-1.794-4-4-4Zm0,22h-2c-1.103,0-2-.897-2-2V4c0-1.103,.897-2,2-2h2c1.103,0,2,.897,2,2v1h-2c-.553,0-1,.447-1,1s.447,1,1,1h2v2h-2c-.553,0-1,.447-1,1s.447,1,1,1h2v2h-2c-.553,0-1,.447-1,1s.447,1,1,1h2v2h-2c-.553,0-1,.447-1,1s.447,1,1,1h2v1c0,1.103-.897,2-2,2Z" />
                        </svg>
                        Calories
                    </button>
                    <div className="flex gap-1 text-sm">
                        <span className="whitespace-nowrap text-gray-500">
                            Sort by:
                        </span>
                        <button className="flex cursor-pointer gap-1 fill-gray-800 text-gray-800 hover:fill-gray-600 hover:text-gray-600">
                            <span className="font-semibold">Recommended</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                id="Outline"
                                viewBox="0 0 24 24"
                                className="h-5"
                            >
                                <path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z" />
                            </svg>
                        </button>
                    </div>
                    <div className='flex gap-2'>
                        <button type="button" title="List" className='rotate-90 fill-gray-600 hover:fill-gray-500'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                id="Layer_1"
                                data-name="Layer 1"
                                viewBox="0 0 24 24"
                                className="h-5"
                            >
                                <path d="m2,1v22c0,.552-.447,1-1,1s-1-.448-1-1V1C0,.448.447,0,1,0s1,.448,1,1ZM15,0c-.553,0-1,.448-1,1v22c0,.552.447,1,1,1s1-.448,1-1V1c0-.552-.447-1-1-1Zm-7,0c-.553,0-1,.448-1,1v22c0,.552.447,1,1,1s1-.448,1-1V1c0-.552-.447-1-1-1Z" />
                            </svg>
                        </button>
                        <button type="button" title="Cards" className='fill-gray-600 hover:fill-gray-500'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                id="Capa_1"
                                x="0px"
                                y="0px"
                                viewBox="0 0 512 512"
                                className="h-5"
                            >
                                <g>
                                    <path d="M85.333,0h64c47.128,0,85.333,38.205,85.333,85.333v64c0,47.128-38.205,85.333-85.333,85.333h-64   C38.205,234.667,0,196.462,0,149.333v-64C0,38.205,38.205,0,85.333,0z" />
                                    <path d="M362.667,0h64C473.795,0,512,38.205,512,85.333v64c0,47.128-38.205,85.333-85.333,85.333h-64   c-47.128,0-85.333-38.205-85.333-85.333v-64C277.333,38.205,315.538,0,362.667,0z" />
                                    <path d="M85.333,277.333h64c47.128,0,85.333,38.205,85.333,85.333v64c0,47.128-38.205,85.333-85.333,85.333h-64   C38.205,512,0,473.795,0,426.667v-64C0,315.538,38.205,277.333,85.333,277.333z" />
                                    <path d="M362.667,277.333h64c47.128,0,85.333,38.205,85.333,85.333v64C512,473.795,473.795,512,426.667,512h-64   c-47.128,0-85.333-38.205-85.333-85.333v-64C277.333,315.538,315.538,277.333,362.667,277.333z" />
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
