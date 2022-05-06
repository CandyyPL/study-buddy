import { Routes, Route, Navigate } from 'react-router-dom'
import MainTemplate from 'components/Templates/MainTemplate/MainTemplate'
import Dashboard from 'views/Dashboard/Dashboard'

const Authenticated = () => {
  return (
    <MainTemplate>
      <Routes>
        <Route path='/' element={<Navigate to='/dashboard' />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path=':id' element={<Dashboard />} />
        </Route>
      </Routes>
    </MainTemplate>
  )
}

export default Authenticated
