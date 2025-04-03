import Image from "next/image"


function PaymentsStrip() {
  return (
    <div>
      <p>Guaranteed safe checkout</p>
      <Image
        alt="Guaranteed safe checkout: Visa, MasterCard, Paypal, Amazon"
        src="https://quickstep007.myshopify.com/cdn/shop/files/payments_large_8ba3451a-08df-4db0-925a-f1cf2f34f183.png?v=1703144464"
        width={320}
        height={32}
        className="mt-2"
      />
    </div>
  )
}

export default PaymentsStrip
