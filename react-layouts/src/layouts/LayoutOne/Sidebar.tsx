import React, { useMemo } from 'react'



interface SidebarProps {
    isCollapsed?: boolean
}

export default function Sidebar(props: SidebarProps) {

    const width = useMemo(() => {
        // Logic to determine the width based on isCollapsed
        if (props.isCollapsed) {
          return '70px'; // return collapsed width
        } else {
          return '250px'; // return full width
        }
    }, [props.isCollapsed]);

    return (
        <div
            style={{
                width,
                backgroundColor: "#000",
                color: "#fff"
            }}
        >
            Sidebar
        </div>
    )
}