import Footer from "@/components/footer"
import Navbar from "@/components/home/navbar/navbar"
import AccountForms from "@/components/login/account-forms"
import PageHeader from "@/components/page-header"

function AccountPage() {
  return (
    <>
      <Navbar hasCategoryMenu={false} />
      <PageHeader route="Account" />
      <main className="stick-cont">
        <AccountForms />
      </main>
      <Footer />
    </>
  )
}

export default AccountPage
