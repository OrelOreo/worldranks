import TCountry from "../types/TCountry"

type TProps = {
  countries: TCountry[];
}


function CountryArray({ countries }: TProps) {
  console.log("🚀 ~ CountryArray ~ country:", countries)

  const headersTable = ['Flag', 'Name', 'Population', 'Area (km²)']

  return (

    <div className="relative overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="text-xs text-[#6C727F]">
          <tr>
            {headersTable.map((header, index) => (
              <th key={index}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        {/* className="px-6 py-4"
className="px-6 py-4"
className="px-6 py-4"
className="px-6 py-4" */}
        <tbody className="text-white whitespace-nowrap font-medium text-sm">
          {countries.map((country, index) => (
            <tr key={index}>
              <td className="py-4">
                <img src={country.flags.png} alt={country.name.common} className="w-10 h-8 object-cover rounded-md" />
              </td>
              <td className="py-4">
                {country.name.common}
              </td>
              <td className="py-4">
                {country.population}
              </td>
              <td className="py-4">
                {country.area}
              </td>
            </tr>
          ))}
          {/* <tr>
            <td className="px-6 py-4">
              Apple MacBook Pro 17"
            </td>
            <td className="px-6 py-4">
              Silver
            </td>
            <td className="px-6 py-4">
              Laptop
            </td>
            <td className="px-6 py-4">
              $2999
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  )
}
export default CountryArray