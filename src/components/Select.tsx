function Select() {

    const sortOptions = [
        { value: "population", label: "Population" },
        { value: "name", label: "Alphabetical Name" },
        { value: "area", label: "Area (km²)" }]

    return (
        <div className="max-w-full my-4">
            <label htmlFor="sort" className="block mb-2 text-sm font-medium text-[#6C727F]">Sort by</label>
            <select id="sort" className="border border-[#6C727F] text-sm rounded-lg block w-full p-2.5 bg-[#1B1D1F] text-white">
                {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}
export default Select