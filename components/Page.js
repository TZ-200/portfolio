import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import Header from './Header'
import Meta from './Meta'

const StyledPage = styled.div`
    background: white;
    color: ${props => props.theme.black};
`

// themeにアクセスするときは以下のmax-widthのようにする
const Inner = styled.div`
    /* background-color: #ccc; */
`

// injectGlobalはThemeProviderの外にあるので${props => props.theme.black}みたいなのはできない
injectGlobal`
    @font-face {
        font-family: 'radnika_next';
        src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
        font-weight: normal;
        font-style: normal; 
    }
    html {
        box-sizing: border-box;
        font-size: 10px;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
        font-family: 'radnika_next';    
    }
    a {
        text-decoration: none;
    }
`

class Page extends Component {
    render() {
        return (
                <StyledPage>
                    <Meta/>
                    <Header />
                    <Inner>{this.props.children}</Inner>
                </StyledPage>
        );
    }
}

export default Page;