import React from 'react'
import MenuOutlined from '@ant-design/icons/MenuOutlined'
import MenuFoldOutlined from '@ant-design/icons/MenuFoldOutlined'
import MenuUnfoldOutlined from '@ant-design/icons/MenuUnfoldOutlined'



interface HeaderProps {
    toggleSidebar: Function
    isCollapsed: boolean

}

export default function Header(props: HeaderProps) {

    return (
        <div className='header'>
            <div className='header-left'>
                <div 
                    className='sidebar-toggle'
                    onClick={() => props.toggleSidebar()}
                >
                    {
                        props.isCollapsed
                        ? <MenuUnfoldOutlined/>
                        : <MenuFoldOutlined/>
                    }
                </div>
            </div>
            <div className='header-right'>
                <MenuOutlined
                    className='header-menu-btn'
                    
                />
            </div>
        </div>
    )
}