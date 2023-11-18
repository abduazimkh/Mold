import classes from "./About.module.scss";
import { Container } from "../../utils/Utils";
import about from "../../assets/images/about.jpg"

const About = () => {
  return (
    <div className={classes.about__wrapper}>
      <Container>
        <div className={classes.about__item}>
          <h1>О нас</h1>
          <p>Здравствуйте!</p>
          <p>
            Сообщаем Вам, что в Намангане открылся магазин по инструментам для
            изготовлению и применению специальных пресс-форм! Мы доставим вам
            все необходимое под заказ и по низкой цене.
          </p>
          <img src={about} alt="about products picture" />
          <h3>Основные виды нашей продукции:</h3>
          <ul>
            <li>Металлообрабатывающие инструменты (Оправки, фрезы, сверла и т.д).</li>
            <li>Комплектующие для пластиковых пресс-форм и штампов (Летники, толкатели, пружины и т.д.).</li>
            <li>Измерительные инструменты (Штангенциркули, микрометры и т.д.)</li>
            <li>Инструменты для полировки металла (Оборудование и материалы для полировки).</li>
            <li>Масла для пресс-форм (разделение пресс-форм, очистка пресс-форм, защита от ржавчины и т. д.)</li>
            <li>Оборудование для обработки металлов эрозией (Электроэрозионные проволочно-вырезные и копировально-прошивные станки).</li>
            <li>Оборудование для обработки металла под управлением ЧПУ (обрабатывающий центр с ЧПУ по металлу)</li>
            <li>Оборудование для литья пластиковых изделий (Термопластавтоматы)</li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default About;
