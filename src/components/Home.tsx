
function Home() {
    return (
        <div className="select-none bg-gray-900 flex flex-row items-center justify-center min-h-screen">
            <main className="bg-gray-800 flex flex-col items-center justify-center w-9/12 pt-4 pb-4">
                <h2 className="text-4xl md:text-6xl text-white pt-6 tracking-wide transition-all hover:scale-110">Hi, I am Vila.</h2>

                <img className="m-6 filter saturate-25 w-48 h-48 ring-4 ring-white transition-all transform opacity-75 hover:scale-110 hover:opacity-100" src="./avatar.JPG" />

                <div className="flex flex-row pt-2">
                    <a className="pl-4 transition-transform transform hover:scale-125" href="https://github.com/vt92i" target="_blank" rel="noopener noreferrer">
                        <img className="w-8" src="./github.png" />
                    </a>
                    <a className="pl-4 transition-transform transform hover:scale-125" href="https://twitter.com/wtsrz4" target="_blank" rel="noopener noreferrer">
                        <img className="w-8" src="./twitter.png" />
                    </a>
                </div>

                <footer className="flex flex-col items-center pt-4">
                    <span className="text-sm font-light text-white">
                        Hosted on
                        <a className="text-gray-100 font-bold opacity-75 transition-opacity hover:opacity-100" href="https://github.com/" target="_blank" rel="noopener noreferrer"> Github </a>
                    </span>
                    <span>❤️</span>
                </footer>
            </main>
        </div>
    )
}

export default Home
