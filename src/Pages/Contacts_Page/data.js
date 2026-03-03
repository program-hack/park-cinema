import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';

export const contactsList = [
    {
        name: "Park Bulvar",
        work_time: "10:00-01:00",
        location: "Проспект Нефтчиляр 78, ТЦ Park Bulvar, 4-й этаж."
    },
    {
        name: "Metro Park",
        work_time: "10:00-01:00",
        location: "Улица Тебриз, 44, торгово-развлекательный центр Metro Park, 6-й этаж."
    },
    {
        name: "Flame Towers",
        work_time: "10:00-01:00",
        location: "М. Гусейн мин., 1 A, Комплекс Flame Towers"
    },
    {
        name: "Sevinc Mall",
        work_time: "10:00-01:00",
        location: "Низамийский район, село 8-й километр, улица Тофика Аббасова, 5."
    },
    {
        name: "Shahdag",
        work_time: "10:00-01:00",
        location: "Кусар р., Лаза к., Туристический комплекс Шахдаг"
    },
];

export const bottomMenuList = [
    {
        id: 1,
        title: "Для заказа билетов",
        subMenu: {
            top: {
                icon: <LocalPhoneIcon />,
                name: "+994 12 598 74 14"
            },
            bottom: {
                icon: <LocalPhoneIcon />,
                name: "119"
            },
        }
    },
    {
        id: 2,
        title: "Для размещения рекламы в кинотеатре",
        subMenu: {
            top: {
                icon: <LocalPhoneIcon />,
                name: "+994 70 780 00 23"
            },
            center: {
                icon: <LocalPhoneIcon />,
                name: "+994 50 255 20 23"
            },
            bottom: {
                icon: <MailIcon />,
                name: "uzeyir@parkcinema.az"
            },
        }
    },
    {
        id: 3,
        title: "Для подарков и корпоративных билетов",
        subMenu: {
            top: {
                icon: <LocalPhoneIcon />,
                name: "+994 55 204 27 15"
            },
            bottom: {
                icon: <MailIcon />,
                name: "hakan.h@parkcinema.az"
            },
        }
    },
]