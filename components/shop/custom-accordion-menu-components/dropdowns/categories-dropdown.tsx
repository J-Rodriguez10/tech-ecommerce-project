import Link from "next/link"

function CategoriesDropdown() {
  const linkStyles = "my-[0.5rem]";
  
  return (
    <div className="flex flex-col">
      <Link className={linkStyles} href="/">Accessories (9)</Link>
      <Link className={linkStyles} href="/">Apple (8)</Link>
      <Link className={linkStyles} href="/">Home page (0)</Link>
      <Link className={linkStyles} href="/">Honor (9)</Link>
      <Link className={linkStyles} href="/">Hot Details (9)</Link>
    </div>
  )
}

export default CategoriesDropdown
