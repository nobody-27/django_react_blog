import { Helmet } from 'react-helmet';
import Navbar from 'components/Navbar';

const Layout = ({ title, content, childern }) => (
    <>
    <Helmet>
        <title>{title}</title>
        <meta name='description' content={content} />
    </Helmet>
    <Navbar />
        <div className="container mt-5">
            {childern}
        </div>
    </>
);

export default Layout;
