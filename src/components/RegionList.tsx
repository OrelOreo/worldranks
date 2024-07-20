function RegionList() {

    const regions = [
        { value: 'americas', label: 'Americas' },
        { value: 'antarctic', label: 'Antarctic' },
        { value: 'africa', label: 'Africa' },
        { value: 'asia', label: 'Asia' },
        { value: 'europe', label: 'Europe' },
        { value: 'oceania', label: 'Oceania' },
    ]

    return (
        <div className="my-4">
            <span className="block mb-2 text-sm font-medium text-[#6C727F]">Region</span>
            <div className="max-w-full flex flex-wrap justify-between">
                {regions.map(region => (
                    <button key={region.value} type="button" className="text-white bg-[#282B30] hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-300 font-medium rounded-xl text-sm px-5 py-2.5 me-2 mb-2">{region.label}</button>
                ))}
            </div>
        </div>
    )
}
export default RegionList