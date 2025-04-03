
function Availability({ stock }: { stock: number }) {
  return (
    <p>
      Availability:{" "}
      <span className="font-[500] text-darkOrange">
        {stock} in stock
      </span>
    </p>
  );
}

export default Availability;