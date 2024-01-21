import React, { useMemo } from 'react'
import DashboardOutlined from '@ant-design/icons/DashboardOutlined'
import UserOutlined from '@ant-design/icons/UserOutlined'
import InboxOutlined from '@ant-design/icons/InboxOutlined'



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
            {
                props.isCollapsed
                ? 'todo'
                : (
                    <div>
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
                        <div className='sb-menu-container'>
                            <div className='sb-menu-title-row'>
                                <span className='sb-menu-title'>
                                    Menu
                                </span>
                            </div>
                            <div className='sb-menu-option-container'>
                                <div className='sb-menu-item'>
                                    <DashboardOutlined/>
                                    <span className='sb-m-item-title'>
                                        Dashboard
                                    </span>
                                </div>
                                <div className='sb-menu-item'>
                                    <UserOutlined/>
                                    <span className='sb-m-item-title'>
                                        Contacts
                                    </span>
                                </div>
                                <div className='sb-menu-item'>
                                    <InboxOutlined/>
                                    <span className='sb-m-item-title'>
                                        Inbox
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            
        </div>
    )
}