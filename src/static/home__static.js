import { useTranslation } from 'react-i18next';
import { BiMapPin, BiMailSend, BiPhoneCall } from "react-icons/bi";
import img1 from '../assets/banner/1.svg';
import img2 from '../assets/banner/2.svg';

const category_list = [
    {
        id: 0,
        type: "Металлообработка"
    },
    {
        id: 1,
        type: "Деревообработка"
    },
    {
        id: 2,
        type: "Инструментальная оснастка"
    },
    {
        id: 3,
        type: "Измерительный инструмент"
    },
    {
        id: 4,
        type: "Шлифовальные инструменты"
    }
]

export { category_list }

const products = [
    {
        id: 0,
        info: "Твердосплавная радиусная фреза, длинная серия, Артикул №:3014",
        price: "255 000 CУМ - 345 000 CУМ",
    },
    {
        id: 1,
        info: "Твердосплавная радиусная фреза, длинная серия, Артикул №:3014",
        price: "255 000 CУМ - 345 000 CУМ",
    },
    {
        id: 2,
        info: "Твердосплавная радиусная фреза, длинная серия, Артикул №:3014",
        price: "255 000 CУМ - 345 000 CУМ",
    },
    {
        id: 3,
        info: "Твердосплавная радиусная фреза, длинная серия, Артикул №:3014",
        price: "255 000 CУМ - 345 000 CУМ",
    }
]

export { products }

export const FooterTop_info = () => {
  const {t} = useTranslation()
  return  [
    {
      id: 0,
      icon: <BiMapPin />,
      title: t("FooterTop_info_title_1"),
      subtitle: t("FooterTop_info_subtitle"),
    },
    {
      id: 1,
      icon: <BiPhoneCall />,
      title: t("FooterTop_info_title_2"),
      subtitle: "+998 91 186 00 85",
    },
    {
      id: 2,
      icon: <BiMailSend />,
      title: t("FooterTop_info_title_3"),
      subtitle: "erkinjon.hodjaev@gmail.com",
    },
  ];
}

  export const top_categories = [
    {
      id: 0,
      title: "Сверла",
      route: "/sverla",
    },
    {
      id: 1,
      title: "Фрезы",
      route: "/frezi",
    },
    {
      id: 2,
      title: "Метчики",
      route: "/metchiki",
    },
    {
      id: 3,
      title: "Развёртки",
      route: "/razvyortki",
    },
    {
      id: 4,
      title: "Плашки",
      route: "/plashki",
    },
  ];


export const footerLinks = [
    {
      id: 0,
      title_uz: "Бош сахифа",
      title_ru: "Главная",
      link: "/",
    },
    {
      id: 1,
      title_uz: "Ҳамкорлар",
      title_ru: "Партнеры",
      link: "/partners",
    },
    {
      id: 2,
      title_uz: "Биз ҳақимизда",
      title_ru: "О нас",
      link: "/about",
    },
    {
      id: 3,
      title_uz: "Алоқа",
      title_ru: "Контакт",
      link: "/contact",
    }
  ];

 export const rassrochka = [
    {
        img: "https://texnomart.uz/files/global/new-photo/img/shop-advantage/perechilsenie.svg",
        title_uz: "Бўлиб-бўлиб сотиб олиш",
        title_ru: "Покупка в рассрочку",
        info_ru: "Удобная схема онлайн-заказа продукции в MOLD-COMPONENTS.COM",
        info_uz: "MOLD-COMPONENTS да ишлаб чиқариш учун қулай онлайн буюртмалар режаси"
    },
    {
        img: "https://texnomart.uz/files/global/new-photo/img/shop-advantage/warranty.svg",
        title_uz : "Йетказиб бериш бепул",
        title_ru: "Бесплатная доставка",
        info_ru: "Качественные продукты и услуги",
        info_uz: "Сифатли маҳсулотлар ва хизматлар"
    },
    {
        img: "https://texnomart.uz/files/global/new-photo/img/shop-advantage/bonus.svg",
        title_uz: "Бонус тизими",
        title_ru: "Бонусная система",
        info_ru: "Бонусная система",
        info_uz: "Бонус тизими"
    },
    {
        img: "https://texnomart.uz/files/global/new-photo/img/shop-advantage/help.svg",
        title_uz: "Ёрдам!",
        title_ru: "Помощь",
        info_uz: "TSS",
        info_ru: "Частые вопросы"
    }
]

export const products_type = [
  {
      img: img1,
      text: "Смартфоны" 
  },
  {
      img: img2,
      text: "Пылесосы" 
  }
]

export default products_type;