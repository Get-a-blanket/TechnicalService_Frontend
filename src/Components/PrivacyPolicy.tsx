import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button, Link } from '@mui/material';

const PrivacyPolicy = () => {
    return (
        <Container maxWidth="md" style={{ marginTop: '20px', marginBottom: '20px' }}>
            <Typography variant="h4" paragraph>
                Политика конфиденциальности
            </Typography>
            <Typography paragraph>
                <strong>1. Обрабатываемые данные</strong>
            </Typography>
            <Typography paragraph>
                <strong>1.1.</strong> Мы не осуществляем сбор ваших персональных данных с использованием Сайта.
            </Typography>
            <Typography paragraph>
                <strong>1.2.</strong> Все данные, собираемые на Сайте, предоставляются и принимаются в обезличенной форме (далее – «Обезличенные данные»).
            </Typography>
            <Typography paragraph>
                <strong>1.3.</strong> Обезличенные данные включают следующие сведения, которые не позволяют вас идентифицировать:
            </Typography>
            <ol>
                <Typography paragraph>
                    <strong>1.3.1. Информацию, которую вы предоставляете о себе самостоятельно с использованием онлайн-форм и программных модулей Сайта, включая имя и номер телефона и/или адрес электронной почты.</strong>
                </Typography>
                <Typography paragraph>
                    <strong>1.3.2. Данные, которые передаются в обезличенном виде в автоматическом режиме в зависимости от настроек используемого вами программного обеспечения.</strong>
                </Typography>
            </ol>
            <Typography paragraph>
                <strong>1.4.</strong> Администрация вправе устанавливать требования к составу Обезличенных данных Пользователя, которые собираются использованием Сайта.
            </Typography>
            <Typography paragraph>
                <strong>1.5.</strong> Если определенная информация не помечена как обязательная, ее предоставление или раскрытие осуществляется Пользователем на свое усмотрение. Одновременно вы даете информированное согласие на доступ неограниченного круга лиц к таким данным. Указанные данные становится общедоступными с момента предоставления и/или раскрытия в иной форме.
            </Typography>
            <Typography paragraph>
                <strong>1.6.</strong> Администрация не осуществляет проверку достоверности предоставляемых данных и наличия у Пользователя необходимого согласия на их обработку в соответствии с настоящей Политикой, полагая, что Пользователь действует добросовестно, осмотрительно и прилагает все необходимые усилия к поддержанию такой информации в актуальном состоянии и получению всех необходимых согласий на ее использование.
            </Typography>
            <Typography paragraph>
                <strong>1.7.</strong> Вы осознаете и принимаете возможность использования на Сайте программного обеспечения третьих лиц, в результате чего такие лица могут получать и передавать указанные в п.1.3 данные в обезличенном виде.
            </Typography>
            <Typography paragraph>
                <strong>1.8.</strong> Состав и условия сбора обезличенных данных с использованием программного обеспечения третьих лиц определяются непосредственно их правообладателями и могут включать:
            </Typography>
            <ul>
                <Typography paragraph>
                    <li>данные браузера (тип, версия, cookie);</li>
                </Typography>
                <Typography paragraph>
                    <li>данные устройства и место его положения;</li>
                </Typography>
                <Typography paragraph>
                    <li>данные операционной системы (тип, версия, разрешение экрана);</li>
                </Typography>
                <Typography paragraph>
                    <li>данные запроса (время, источник перехода, IP-адрес).</li>
                </Typography>
            </ul>
            <Typography paragraph>
                <strong>1.9.</strong> Администрация не несет ответственность за порядок использования Обезличенных данных Пользователя третьими лицами.
            </Typography>
            <Link href='/' underline="none" style={{ textAlign: "center" }}>На главную</Link>
        </Container>
    );
};

export default PrivacyPolicy;
