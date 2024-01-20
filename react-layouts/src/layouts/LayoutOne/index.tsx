import React from 'react'
import { Outlet } from 'react-router-dom'



export default function LayoutOne() {

    return (
        <div>
            Layout One
            <Outlet/>
        </div>
    )
}