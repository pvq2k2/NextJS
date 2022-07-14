import { LayoutProps } from '@/models/layout'
import React from 'react'


const EmptyLayout = ({children}: LayoutProps) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default EmptyLayout