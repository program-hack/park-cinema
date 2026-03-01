import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

export const footerList = {
    left: [
        "Кинотеатры", "Акции", "FAQ"
    ],
    center: [
        "Профиль", "Контакты", "Правовые Условия",
    ],
    right: [
        <AiFillInstagram />, <FaFacebook />, <FaYoutube />,
        <FaTelegram />, <FaTiktok />
    ]
}