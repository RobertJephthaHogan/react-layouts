import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import './styles.css'
import Header from './Header'


export default function LayoutOne() {

    const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false)

    const toggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed)
    }

    return (
        <div className='layout'>
            <Sidebar
                isCollapsed={sidebarCollapsed}
            />
            <div className='layout-content-area'>
                <Header
                    toggleSidebar={toggleSidebar}
                    isCollapsed={sidebarCollapsed}
                />
                <div className='layout-outlet'>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}