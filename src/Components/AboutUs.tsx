import React from 'react';
import '../Styles/AboutUs.css';
import NavigationPanel from '../Header/NavigationPanel';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@mui/material';

interface ContactPageProps { }

const ContactPage: React.FC<ContactPageProps> = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Form submitted!');
    };

    return (
        <>
            <form onSubmit={handleSubmit} className='contact-page'>
                <h2 style={{ textAlign: "center" }}>Контакты</h2>
                <p>
                    Если у вас есть вопросы или предложения, не стесняйтесь связаться с нами.
                </p>

                <div>
                    <h4>Адрес:</h4>
                    <TextField variant="outlined" label='Улица, Город, Страна' style={{ width: "100%", textAlign: "left", resize: "none", lineHeight: "1.5" }}></TextField>
                </div>

                <div>
                    <h4>Email:</h4>
                    <TextField label='Email' placeholder='info@example.com' style={{ width: "100%", textAlign: "left", resize: "none", lineHeight: "1.5" }}></TextField>
                </div>

                <div>
                    <h4>Телефон:</h4>
                    <TextField label="Телефон" placeholder='+7 (123) 456-7890' style={{ width: "100%", textAlign: "left", resize: "none", lineHeight: "1.5" }}></TextField>
                </div>

                <div>
                    <h4>Форма обратной связи:</h4>
                    <TextField id='callBack' className='callBack' label="Обращение" style={{ height: "50%", width: "100%", textAlign: "left", resize: "none", lineHeight: "1.5" }} placeholder='Введите текст вашего обращения...' ></TextField>
                </div>

                {/* Обычная кнопка для отправки формы */}
                <Button type="submit" style={{ height: "30px" }}>
                    Отправить
                </Button>
            </form>

            <NavigationPanel
                home={<Link to="/" style={{ textDecoration: "none" }}>Главная</Link >}
                map={<Link to="/map" style={{ textDecoration: "none" }}>Карта</Link >}
                about={<Link to="/about" style={{ textDecoration: "none" }}>О нас</Link >}
            />
        </>
    );
};

export default ContactPage;
