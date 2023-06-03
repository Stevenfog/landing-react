import './assets/scss/bootstrap.scss'
import React from 'react'
import Footer from '../src/component/Footer'
import Headers from '../src/component/Header'
import Hero from '../src/component/Hero'
import Special from '../src/component/Special'
import landingPageJson from '../src/json/landingPage.json'

export default function LandingPage() {
    return (
        <>
            <Headers />
            <Hero />
            <Special data={landingPageJson.special} />
            <Footer />
        </>
    )
}