import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const products = () => {
    return (
        <Layout>
            <h1>This is our products page!</h1>
            <Link to="/">Home</Link>
        </Layout>
    )
}

export default products
