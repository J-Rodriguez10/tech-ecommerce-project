import Button from "../button"
import TableItem from "./table-item"

/**
 * Component for displaying an inventory table with product details.
 */

function InventoryTableDisplay() {
  const tableHeaderStyles = "border uppercase py-4 font-[400]"

  return (
    <section className="mb-[8rem] mt-[6rem] overflow-x-auto border-b-[1px] border-[#dfdfdf] pb-8">
      <table className="min-w-full border-collapse border border-gray-300">
        {/* Table Header */}
        <thead className="m:hidden">
          <tr>
            <th className={tableHeaderStyles}>Product</th>
            <th className={tableHeaderStyles}>Price</th>
            <th className={tableHeaderStyles}>Quantity</th>
            <th className={tableHeaderStyles}>Total</th>
            <th className={tableHeaderStyles}>Action</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          <TableItem />
          <TableItem />
          <TableItem />
        </tbody>
      </table>

      {/* Action Buttons */}
      <div className="mt-8 flex w-full flex-wrap items-center justify-end gap-2 m:justify-center">
        <Button className="min-w-[200px]">Update Cart</Button>
        <Button className="min-w-[250px]">Continue Shopping</Button>
        <Button>Clear Cart</Button>
      </div>
    </section>
  )
}

export default InventoryTableDisplay
