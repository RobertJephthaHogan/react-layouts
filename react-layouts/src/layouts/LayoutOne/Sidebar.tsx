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
            style={{ // dynamically set sidebar width
                width,
            }}
            className='sidebar'
        >
            <div className='sb-top'>
                <div className='logo'>
                    <div className='logo-square'>
                        <span className='logo-sq-txt'>
                            RL
                        </span>
                    </div>
                    <div className='v-logo-divider-container'>
                        <div className='v-logo-divider'/>
                    </div>
                    <div className='logo-right-container'>
                        <span className='logo-right-text'>
                            React Layouts
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}