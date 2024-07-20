import hero from '../assets/hero-image-wr.jpg'
import logo from '../assets/logo.svg'

function Header() {
    return (
        <header>
            <div className="relative">
                <img className='h-48 max-w-full object-cover' src={hero} alt='planet earth' width="1920" height="300" />
                <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src={logo} alt="logo" />
            </div>
        </header>
    )
}

export default Header