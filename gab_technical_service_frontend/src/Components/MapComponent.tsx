import { YMaps, Map } from '@pbe/react-yandex-maps';
import NavigationPanel from '../Header/NavigationPanel';
import { Link } from 'react-router-dom';
import "../Styles/MapComponent.css"
import Footer from './Footer';
import '../Styles/Footer.css';

const MapComponent = () => (
    <>
        <div style={{ height: '100vh', width: "80%", display: 'flex', flexDirection: 'column' }}>
            <YMaps query={{ apikey: "c8efdf97-cb56-4062-ac67-2f5c7b9305fe" }}>
                <Map style={{ width: "125%", height: "100vh", display: 'flex', flexDirection: 'column', flex: "1" }} defaultState={{ center: [58.0106, 56.2294], zoom: 15 }} />
            </YMaps>
            <NavigationPanel
                home={<Link to="/" className='navigation-panel-home' style={{ textDecoration: "none" }}>Главная</Link >}
                map={<Link to="/map" className='navigation-panel-map' style={{ textDecoration: "none" }}>Карта</Link >}
                about={<Link to="/about" className='navigation-panel-about' style={{ textDecoration: "none" }}>О нас</Link >}
            />
        </div>
        <Footer />
    </>);
export default MapComponent;
