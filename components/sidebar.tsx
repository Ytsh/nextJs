import Link from 'next/link'
import '../styles/sidebar.css'

export default function Sidebar(){
    return(
    <div className ="sidebar">
        <Link href = "/"> Home </Link>
        <Link href = "/about"> About Us </Link>
      </div>
      )
}