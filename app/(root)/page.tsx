import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'

const Home = async () => {
  const loggedIn = await getLoggedInUser();

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-hearder">
          <HeaderBox
            type= "greeting"
            title= "Welcome"
            user= {loggedIn?.name || 'Guest'}
            subtext = "Access and manage your account and transactions efficiently."
           />

          <TotalBalanceBox
            accounts = {[]}
            totalBanks = {1}
            totalCurrentBalance = {3274200.34}
          />
        </header>
      </div>
      
      <RightSidebar
        user = {loggedIn}
        transaction = {[]}
        banks = {[{currentBalance:1234.23},{currentBalance:123.23}]}
      />
    </section>
  )
}

export default Home