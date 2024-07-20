function CheckBoxStatus() {
    return (
        <div className="my-4">
            <span className="block mb-2 text-sm font-medium text-[#6C727F]">Status</span>
            <div className="flex items-center mb-4">
                <input id="united-nations" type="checkbox" value="united-nations" className="w-4 h-4 text-[#4E80EE] bg-transparent border-gray-300 focus:ring-2" />
                <label htmlFor="united-nations" className="ms-2 text-sm font-medium text-white">Member of the United Nations</label>
            </div>
            <div className="flex items-center mb-4">
                <input id="independent" type="checkbox" value="independent" className="w-4 h-4 text-[#4E80EE] bg-transparent border-gray-300 focus:ring-2" />
                <label htmlFor="independent" className="ms-2 text-sm font-medium text-white">Independent</label>
            </div>
        </div>


    )
}
export default CheckBoxStatus