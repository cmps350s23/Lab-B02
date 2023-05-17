'use client'
import React from 'react'
import Link from 'next/link'
import SignInOut from './SignInOut'

export default function NavBar() {

    // get the session object and check if the user is logged in
    // add singout button 
    //also hide the nav bar if the user is not logged in

    return (
        <>
            <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                <div class="container-fluid">
                    <a class="navbar-brand" href="javascript:void(0)">Alpha Bank</a>
                    <ul class="navbar-nav me-auto">
                        <li>Alpha Bank</li>
                        <li className='nav-item'><Link href="/" className='nav-link'>Home</Link></li>
                        <li className='nav-item'><Link href="/accounts/trans" className='nav-link'>Add Transaction</Link></li>
                        <li className='nav-item'><Link href="/accounts/report" className='nav-link'>Summary Reports</Link></li>
                    </ul>
                    <SignInOut />
                </div>
            </nav>
        </>)
}
