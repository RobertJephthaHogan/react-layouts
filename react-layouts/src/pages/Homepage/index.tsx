import React from 'react'
import './styles.css'
import { useNavigate } from 'react-router-dom'


export default function Homepage() {

    const navigate = useNavigate()

    return (
        <div className='homepage'>
            <div className='hp-landing'>
                <div className='hp-landing-content'>
                    <div className='hpl-top-row'>
                        <div className='hpl-chip'>
                            <span>
                                Welcome To React Layouts
                            </span>
                        </div>
                    </div>
                    <div className='hpl-hero-text-row'>
                        <span className='hpl-hero-text'>
                            Stop re-writing the same layouts repeatedly.
                        </span>
                    </div>
                    <div className='hpl-sub-text-row'>
                        <div className='hpl-sub-text-container'>
                            <span className='hpl-sub-text'>
                                After getting tired of writing the same / similar layouts for multiple applications, I decided to 
                                create this application to house pre-built and formatted layouts to use for bootstrapping future 
                                applications. 
                            </span>
                        </div>
                    </div>
                    <div className='hpl-button-row'>
                        <button 
                            className='hpl-btn'
                            onClick={() => navigate('/layout-one/dashboard')}
                        >
                            <span className='hpl-btn-text'>
                                Layout One
                            </span>
                        </button>
                        <button 
                            className='hpl-btn'
                            onClick={() => navigate('/layout-two/dashboard')}
                        >
                            <span className='hpl-btn-text'>
                                Layout Two
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='homepage-body'>
                Homepage
            </div>
        </div>
    )
}