'use client'
import { IoMdDownload } from "react-icons/io";

export default function Contact() {

    return (
        <div className="relative z-10 justify-center overflow-b-clip">
            <div className='relative z-12 text-center'>
                <h1 className="text-5xl md:text-6x1 font-bold mt-24">Get in touch!</h1>
                <hr className='w-sm max-w-1/2 border-2 border-(--darkBlue) justify-self-center mt-4' />
            </div>

            <div className="relative flex flex-col justify-self-center max-w-xl w-screen gap-4 mt-4 pb-12 px-12 text-center mx-12 z-10">
                <div className="flex flex-col gap-2 md:flex-row flex-wrap justify-between items-center">
                    <p className="text-2xl font-semibold">Email Me</p>
                    <a target="_blank" href="mailto:Leah.K.Bragg@gmail.com"
                        className="font-semibold text-(--darkBlue) outline-(--lightPink) outline-3 rounded-xl bg-(--offWhite) p-3 hover:text-(--lightPink)">
                        Leah.K.Bragg@gmail.com
                    </a>
                </div>
                <div className="flex flex-col gap-2 md:flex-row flex-wrap justify-between items-center">
                    <p className="text-2xl font-semibold">Find Me on</p>
                    <div className="flex flex-row gap-4">
                        <a target="_blank" href="https://www.linkedin.com/in/leah-bragg-5ba42a1a1/"
                            className="font-semibold text-(--darkBlue) outline-(--lightPurple) outline-3 rounded-xl bg-(--offWhite) p-3 hover:text-(--lightPurple)">
                            LinkedIn
                        </a>
                        <a target="_blank" href="https://github.com/LeahBragg"
                            className="font-semibold text-(--darkBlue) outline-(--lightGreen) outline-3 rounded-xl bg-(--offWhite) p-3 hover:text-(--lightGreen)">
                            GitHub
                        </a>
                    </div>
                </div>

                <div className="flex flex-col gap-2 md:flex-row flex-wrap justify-between items-center">
                    <p className="text-2xl font-semibold">Download my</p>
                    <div className="flex flex-row gap-4">
                        <a target="_blank" href="LeahBraggResume.pdf"
                            className=" flex flex-row items-center gap-1 font-semibold text-(--darkBlue) outline-(--lightPink) outline-3 rounded-xl bg-(--offWhite) p-3 hover:text-(--lightPink)">
                            Resume
                            <IoMdDownload />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col gap-2 md:flex-row flex-wrap justify-between items-center">
                    <p className="text-2xl font-semibold">Like my design work? Find me on</p>
                    <a target="_blank" href="https://www.behance.net/leahbragg/"
                        className="font-semibold text-(--darkBlue) outline-(--lightPurple) outline-3 rounded-xl bg-(--offWhite) p-3 hover:text-(--lightPurple)">
                        Behance
                    </a>
                </div>
            </div>
        </div>
    )
}
