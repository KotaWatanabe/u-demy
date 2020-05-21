import React from 'react'
import Layout from '../components/Layout'
import styles from '../components/products.module.css'

const products = () => {
    return (
        <Layout>
            <div className={styles.page}>
                <h1>This is our products page!</h1>
                <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing   elit. Perferendis nemo quo debitis voluptate. Laudantium  recusandae aliquam, neque perferendis dolorem voluptatibus   delectus sequi modi cum voluptates?</p>
            </div>
        </Layout>
    )
}

export default products
