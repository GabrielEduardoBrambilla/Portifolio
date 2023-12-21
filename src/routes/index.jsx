import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Landing } from '../pages/landing'
// import { CreateDish } from '../pages/createDish'
// import { EditDish } from '../pages/editDish'
// import { DisplayDish } from '../pages/displayDish'
// import { Order } from '../pages/order'
// import { SuccessfulPayment } from '../pages/successfulPayment'
// import { Favorites } from '../pages/favorites'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
    </BrowserRouter>
  )
}