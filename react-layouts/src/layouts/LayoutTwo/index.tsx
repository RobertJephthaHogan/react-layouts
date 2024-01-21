import React from 'react'
import { Outlet } from 'react-router-dom'



export default function LayoutTwo() {

    return (
        <div>
            Layout Two
            <Outlet/>
        </div>
    )
}