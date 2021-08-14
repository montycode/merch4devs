import React from 'react'
import { Helmet } from 'react-helmet'
import { Products } from '@/components'
import initialState from '../initialState'

export const Home = () => {
    return (
        <>
            <Helmet>
                <title>Merch4Devs - Productos</title>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@monty_code"/>
                <meta name="twitter:creator" content="@monty_code"/>
                <meta name="twitter:title" content="Merch4Devs - Los mejores articulos para geeks de IT."/>
                <meta name="twitter:description" content="Merch4Devs"/>
                <meta
                name="twitter:image"
                content="https://montycode.dev/static/MontyCode_X-5bd039a7ae77dcd8c0d5b5e1cb5dffac.png"
                />
                <meta property="og:title" content="Merch4Devs"/>
                <meta property="og:description" content="Merch4Devs"/>
                <meta
                property="og:image"
                content="https://montycode.dev/static/MontyCode_X-5bd039a7ae77dcd8c0d5b5e1cb5dffac.png"
                />
                <meta property="og:url" content="merch4devs.web.app" />
                <meta property="og:site_name" content="Merch4Devs" />
                <meta property="og:locale" content="es_ES" />
                <meta property="og:type" content="article" />
                <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
            </Helmet>
            <Products products={initialState.products} />
        </>
    )
}

