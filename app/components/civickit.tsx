'use client'

export default function Civickit() {

    return (
        <>
            <div className="relative">
                <div className="relative text-center text-(--darkBlue) z-11 mx-auto">
                    <p className="text-1 tracking-wide">Currently Working On</p>
                    <h1 className="text-6xl font-bold">Civickit</h1 >
                    <p className="text-2xl font-semibold">Developer</p>
                </div>

                <div className="relative mx-4 flex flex-col-reverse z-10 justify-center items-center">
                    <div className="justify-self-right text-center my-4">
                        <a target="_blank" href="https://github.com/oss-slu/civickit" className="font-semibold text-(--darkBlue) outline-(--darkBlue) outline-4 rounded-xl bg-(--offWhite) p-4 hover:text-(--lightPink) hover:bg-(--darkBlue)">
                            View on Github
                        </a>
                    </div>
                    <div className="p-4 my-8 w-xs lg:w-md bg-(--offWhite) outline-4 rounded-xl outline-(--lightPink)">
                        <p className="text-xl sm:lg tracking-wide text-left">Civickit is an open source app that allows community members to report civic issues and organize community action to resolve these issues.
                            It's being built with React Native and is currently in developement in collaboration with Open Source with SLU.</p>
                    </div>
                </div>


            </div>
        </>
    )
}