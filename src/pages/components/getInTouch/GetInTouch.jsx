import { Link } from "react-router-dom";

export default function GetInTouch() {
    return (
        <Link className="GetInTouch" to="./contact/"><img src="../public/GetIcon.svg" alt="" />Get in touch</Link>
    )
}