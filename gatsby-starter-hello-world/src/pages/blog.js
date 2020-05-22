import React from 'react'
import Layout from '../components/Layout'
import styles from '../components/blog.module.css'

const blog = () => {
    return (
        <Layout>
            <div className={styles.page}>
                <h1>This is our blog page</h1>
                <p className={styles.text}>Lorem ipsum dolor sit amet   consectetur adipisicing elit. Illum praesentium modi  doloremque minus sequi voluptatum laboriosam sapiente eos    incidunt. Commodi harum vitae voluptate porro magni.</p>
            </div>

        </Layout>
    )
}

export default blog
