import Card from '@/components/Card/Card'
import HeaderLogo from './components/HeaderLogo/HeaderLogo'
import HeaderSections from './components/HeaderSections/HeaderSections'
import Products from './components/Products/Products'
import Services from './components/Services/Services'

export default function HomePage() {
    return (
        <div>
            <HeaderLogo />
            <img
                src="/images/mainImg.svg"
                className="sticky top-0 -z-0 h-full w-full"
            />
            <HeaderSections />
          
            <div className="top-0 flex w-full">
                <Products />
            </div>
            <div className="top-0 flex w-full">
                <Services />
            </div>
          
        </div>
    )
}
