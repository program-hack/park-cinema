import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

export const footerList = {
    left: [
        {
            title: "Кинотеатры",
            link: "/cinemas"
        },
        {
            title: "Акции",
            link: "/campaigns",
        },
        {
            title: "FAQ",
            link: "/faq",
        }
    ],
    center: [
        {
            title: "Профиль",
            link: "/profile"
        },
        {
            title: "Контакты",
            link: "/contacts"
        },
        {
            title: "Правовые Условия",
            link: "/terms-conditions"
        },
    ],
    right: [
        {
            icon: <AiFillInstagram />,
            link: "https://www.instagram.com/parkcinema/"
        },
        {
            icon: <FaFacebook />,
            link: "https://www.facebook.com/ParkCinema"
        },
        {
            icon: <FaYoutube />,
            link: "https://www.youtube.com/@ParkCinemaAzerbaijan"
        },
        {
            icon: <FaTelegram />,
            link: "https://t.me/parkcinemaofficial"
        },
        {
            icon: <FaTiktok />,
            link: "https://www.tiktok.com/@parkcinema.az?_t=ZS-8u4JT5RcwdE&_r=1"
        },
    ]
}