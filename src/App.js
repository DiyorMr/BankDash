import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Error from './pages/Error'
import Dashboard from './pages/dashboard/Dashboard'
import Transactions from './pages/transac/Transactions'
import Accounts from './pages/accounts/Accounts'
import Investments from './pages/invest/Investments'
import CreditCards from './pages/credit/CreditCards'
import Loans from './pages/loans/Loans'
import Services from './pages/servic/Services'
import Setting from './pages/settin/Setting'


const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/account" element={<Accounts />} />
          <Route path="/invest" element={<Investments />} />
          <Route path="/credit" element={<CreditCards />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/services" element={<Services />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
