import { LayoutProps } from '@/models/layout'
import React from 'react'


const AdminLayout = ({children}: LayoutProps) => {
  return (
    <>
    <div>Header Admin</div>
    {children}
    </>
  )
}

export default AdminLayout