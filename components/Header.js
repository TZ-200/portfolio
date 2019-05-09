import Link from 'next/link'
import styled from 'styled-components'
import Nav from './Nav'
import Router from 'next/router'
import Nprogress from 'nprogress'

Router.onRouteChangeStart = () => {
    Nprogress.start()
}
Router.onRouteChangeComplete = () => {
    Nprogress.done()
}
Router.onRouteChangeError = () => {
    Nprogress.done()
}




const Header = () => (
    <div>
        <div className="bar">
        </div>
        <div className="sub-bar">
        </div>
    </div>
)

export default Header