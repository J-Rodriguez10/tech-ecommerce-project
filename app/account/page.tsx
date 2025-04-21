import Footer from "@/components/footer"
import Navbar from "@/components/home/navbar/navbar"
import AccountContent from "@/components/login/account-content"
import PageHeader from "@/components/page-header"

function AccountPage() {
  return (
    <>
      <Navbar hasCategoryMenu={false} />
      <PageHeader route="Account" />
      <main className="stick-cont">
        <AccountContent />
      </main>
      <Footer />
    </>
  )
}

export default AccountPage
