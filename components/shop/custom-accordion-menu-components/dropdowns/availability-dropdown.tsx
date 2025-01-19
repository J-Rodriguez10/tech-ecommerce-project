function AvailabilityDropdown() {
  const links = ["In Stock (14)", "Out of stock (12)"]

  return (
    <div className="">
      <ul className="">
        {links.map(link => (
          <li key={link} className="flex items-center my-4 gap-2 ">
            <input
              type="checkbox"
              id={link}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 checked:border-blue-600 !checked:bg-red-600 focus:ring-blue-500"
            />

            <label htmlFor={link} className="cursor-pointer text-darkGray">
              {link}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AvailabilityDropdown
