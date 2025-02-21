import Footer from "@/components/footer"
import Navbar from "@/components/home/navbar/navbar"
import PageHeader from "@/components/page-header"
import WishlistDisplay from "@/components/wishlist/wishlist-display"

function WishlistPage() {
  return (
    <>
      <Navbar hasCategoryMenu={false} />
      <PageHeader route="Wishlist" />
      <section className="stick-cont">
        <WishlistDisplay />
      </section>
      <Footer />
    </>
  )
}

export default WishlistPage
