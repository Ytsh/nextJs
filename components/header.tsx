import Link from 'next/link'
import '../styles/header.css'

export default function Header(){

    return(
        <div className="header">
            <a href="#default" className="logo">CompanyLogo</a>
            <div className="header-right">
                <Link href = "/cart"> cart </Link>

                <a className="active" href="#home">Home</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </div>
    )
}