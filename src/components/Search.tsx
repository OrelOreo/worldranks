function Search() {
    return (
        <div className="max-w-sm">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm border-none rounded-xl bg-[#282B30] placeholder-gray-400 text-[#6C727F]" placeholder="Search by Name, Region, Subregion" />
            </div>
        </div>

    )
}
export default Search