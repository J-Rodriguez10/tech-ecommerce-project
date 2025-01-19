function PageHeader() {
  return (
    <div className="h-[160px] w-screen bg-bgGray text-darkGray">
      <div className="shop-cont flex flex-col justify-center gap-[4px] h-full">
        <h2 className="text-[2.9rem] font-[500]">Products</h2>
        <p>
          Home /<span className="text-lightTextGray"> Products</span>
        </p>
      </div>
    </div>
  )
}

export default PageHeader
