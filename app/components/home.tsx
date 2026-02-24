'use client'

export default function Home() {

    return (
        <div className="relative mx-12 md:mx-24 justify-self-center max-w-4xl py-32 sm:py-48 lg:py-56 z-11">
            <div className="text-center">
                <img src={'Logo.svg'} alt='Leah Bragg, devloper + designer' />

                <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-x-6 gap-y-4">
                    <a
                        href="#Contact"
                        className="rounded-xl bg-(--lightGreen) font-bold outline-3 outline-(--darkBlue) px-3.5 py-2.5 text-lg text-(--darkBlue) shadow-xs hover:bg-(--darkBlue) hover:text-(--lightGreen) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Get in touch
                    </a>
                    <a
                        href="#Projects"
                        className="rounded-xl bg-(--lightPurple) font-bold outline-3 outline-(--darkBlue) px-3.5 py-2.5 text-lg text-(--darkBlue) shadow-xs hover:bg-(--darkBlue) hover:text-(--lightPurple) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        See my work
                    </a>
                </div>
            </div>
        </div>
    )
}
