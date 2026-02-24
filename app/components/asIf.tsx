'use client'

export default function AsIf() {

    return (
        <>
            <div className="relative mt-8 md:mt-8 z-10">
                <div className="relative mx-auto text-center text-(--darkBlue) z-11">
                    <p className="text-1 tracking-wide">January 2025 - May 2025</p>
                    <h1 className="text-6xl font-bold">As If!</h1 >
                    <p className="text-2xl font-semibold">Developer</p>
                </div>

                <div className="relative flex mx-10 flex-col z-10 justify-center items-center">

                    <div className="p-4 my-8 w-xs lg:w-md bg-(--offWhite) outline-4 rounded-xl outline-(--lightPurple)">
                        <p className="text-xl sm:lg tracking-wide text-left">As If is a closet organization web app built on React, inspired by the movie Clueless.
                            It allows for users to maintain closets of items alongside descriptions and tags. Users can search for items and filter the tags.
                            They can also group items into outfits, assign those outfits to certain days on the calendar, and view statistics on their most worn outfits and items.</p>
                    </div>



                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-self-right">
                        <a target="_blank" href="https://github.com/GustavoLucca/Clueless" className="font-semibold text-(--darkBlue) outline-(--darkBlue) outline-4 rounded-xl bg-(--offWhite) p-4 hover:text-(--lightPurple) hover:bg-(--darkBlue)">
                            View on Github
                        </a>
                        <a target="_blank" href="Clueless Demo - Narrated by Developer Erin Kelley.mp4" className="font-semibold text-(--darkBlue) outline-(--darkBlue) outline-4 rounded-xl bg-(--offWhite) p-4 hover:text-(--lightPurple) hover:bg-(--darkBlue)">
                            Watch Demo*
                        </a>
                    </div>
                </div>
                <p className="text-1 mt-4 justify-self-center bg-(--offWhite) w-fit p-1 px-2 rounded-xl outline-(--lightPurple) outline-3">
                    *Demo narrated by developer Erin Kelley</p>
            </div>
        </>
    )
}
