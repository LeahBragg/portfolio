'use client'
import { useState } from 'react'
import {
    Dialog,
    DialogPanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const projects = [
    { name: 'Civickit', description: '', href: '#Civickit' },
    { name: 'Saltify', description: '', href: '#Saltify' },
    { name: 'As-If!', description: '', href: '#AsIf' },
    { name: 'Pixel Art Maker', description: '', href: '#Pixel' },
    { name: 'Wordle Clone', description: '', href: '#Wordle' },
    { name: 'Escape the Maze', description: '', href: '#Escape' },
]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 bg-(--darkBlue) text-(--offWhite) text-5x1 z-100">
            <nav className="sticky lg:mx-20 sm:mx-4 flex flex-row items-center justify-between p-4 lg:px-8 z-10">
                <div className="">
                    <a href="#Home" className="">
                        <span className="sr-only">Leah Bragg</span>
                        <img src={"LB.svg"} className='h-5' />
                    </a>
                </div>

                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5  cursor-pointer inline-flex items-center justify-center rounded-md p-2.5"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>

                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <a href="#Contact" className=" font-semibold hover:text-(--lightPurple)">
                        Contact
                    </a>
                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 font-semibold z-10 focus:outline-hidden hover:text-(--lightGreen)">
                            Projects
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none" />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="absolute rounded-b-xl outline-4 outline-(--darkBlue) top-6 z-7 mt-3 w-40 -translate-x-1 drop-shadow-xl overflow-wrap bg-(--lightPink) text-(--darkBlue) transition data-closed:-translate-y-2 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                        >
                            <div className="p-2">
                                {projects.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group text-lg rounded-md relative flex items-center p-2 hover:outline-(--darkBlue) hover:outline-3 hover:bg-(--offWhite)">

                                        <div className="flex-auto">
                                            <a href={item.href} className="block font-semibold">
                                                {item.name}
                                            </a>
                                            <p className="">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </PopoverPanel>
                    </Popover>
                </PopoverGroup>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed right-0 z-101" />

                <DialogPanel transition className="fixed outline-4 outline-(--darkBlue) inset-y-0 right-0 z-50 w-full overflow-y-auto bg-(--lightPink) p-6 sm:max-w-sm sm:ring-1 z-101
                    transition data-closed:translate-x-2 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in">
                    <div className="flex items-center justify-end">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 p-2.5"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-8 rounded-xl m-1 hover:outline-(--darkBlue) hover:outline-3 hover:text-(--lightPink) hover:bg-(--darkBlue) text-(--darkBlue)" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-(--darkBlue) divide-y-3">
                            <div className="space-y-2 py-6">
                                {[...projects].map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block rounded-xl py-2 pr-3 pl-6 text-lg font-semibold text-(--darkBlue) hover:outline-(--darkBlue) hover:outline-3 hover:bg-(--offWhite)"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="space-y-2 py-6">
                                <a
                                    href="#Contact"
                                    className="block rounded-xl py-2 pr-3 pl-6 text-xl font-semibold text-(--darkBlue) hover:outline-(--darkBlue) hover:outline-3  hover:bg-(--lightGreen)"
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
