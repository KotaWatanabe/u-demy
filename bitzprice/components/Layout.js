import Head from 'next/head'
import Navbar from '../components/Navbar';

const Layout = (props) => (
    <dir>
        <Head>
            <title>BitzPrice</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/cerulean/bootstrap.min.css"/>
        </Head>
        <Navbar />
        <div className="container">
            {props.children}
        </div>
    </dir>
);

export default Layout;
