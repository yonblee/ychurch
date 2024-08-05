import ErrorComp from '@components/error.comp'
import HomePage from '@pages/home.page'
import SignupPage from '@pages/signup.pages'
import SummaryPage from '@pages/summary.pages'
import React from 'react'
import { createBrowserRouter, Routes, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'

export default function IRoutes() {
    const router = createBrowserRouter(
        createRoutesFromElements(
                    <Route path='/' element={<HomePage />} errorElement={<ErrorComp />}>
                        <Route path='summary' element={<SummaryPage />} />
                        <Route path='signup' element={<SignupPage />} />
                    </Route>
        )
    )
    return <RouterProvider router={router} />;
}


<Router>
<Routes>
  <Route path="/" element={<HomePage />} errorElement={<ErrorPage />}>
    <Route path="summary" element={<SummaryPage />} />
  </Route>
    <Route path="signup" element={<SignupPage />} />
</Routes>
</Router>