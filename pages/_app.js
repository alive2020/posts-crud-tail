import '../styles/globals.css';
// import 'tailwindcss/tailwindcss';
import '../dist/output.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
