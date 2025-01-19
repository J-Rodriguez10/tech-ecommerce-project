function BrandDropdown() {
  const links = [
    "hatil (1)",
    "navana (1)",
    "nike (2)",
    "otobi (3)",
    "watch (7)"
  ]

  return (
    <div className="">
      <ul className="">
        {links.map(link => (
          <li key={link} className="my-4 flex items-center gap-2">
            <input
              type="checkbox"
              id={link}
              className="!checked:bg-red-600 h-4 w-4 rounded border-gray-300 text-blue-600 checked:border-blue-600 focus:ring-blue-500"
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

export default BrandDropdown
