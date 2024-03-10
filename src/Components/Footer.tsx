import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Button, Link as Linking } from '@mui/material';
interface FooterProps {

}

const Footer: React.FC<FooterProps> = () => {
    const contactInfo = {
        phone: '+7 (123) 456-7890',
        email: 'info@example.com',
        address: 'Улица, Город, Страна',
    };

    const socialLinks = [
        { name: 'Facebook', url: 'https://www.facebook.com' },
        { name: 'Twitter', url: 'https://www.twitter.com' },
        { name: 'Instagram', url: 'https://www.instagram.com' },
    ];

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Контакты</h3>
                    <p style={{ marginBottom: "10px", marginTop: "0px" }}>Телефон: {contactInfo.phone}</p>
                    <p style={{ marginBottom: "10px", marginTop: "0px" }}>Email: {contactInfo.email}</p>
                    <p style={{ marginBottom: "10px", marginTop: "0px" }}>Адрес: {contactInfo.address}</p>
                </div>

                <div className="footer-section">
                    <h3>Социальные сети</h3>
                    <ul>
                        {socialLinks.map((link) => (
                            <li key={link.name} style={{ marginBottom: "10px" }}>
                                <Linking underline='hover' href={link.url} target="_blank" rel="noopener noreferrer">
                                    {link.name}
                                </Linking>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Подписка</h3>
                    <p>Подпишитесь, чтобы быть в курсе новостей и акций:</p>
                    <form>
                        <Input type="email" placeholder="Ваш Email" />
                        <Button size="small" variant="contained" type="submit">Подписаться</Button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 Get A Blanket. Все права защищены.</p>
                <Linking underline="hover" href="/privacy-policy">Политика конфиденциальности</Linking>
            </div>
        </footer>
    );
};

export default Footer;
