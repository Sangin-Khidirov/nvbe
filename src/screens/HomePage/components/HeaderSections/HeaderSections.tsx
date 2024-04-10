import Link from 'next/link'
import { FC } from 'react'
import s from './HeaderSections.module.scss'

const HeaderSections: FC = () => {
    const sections = [
        { name: 'О компании', link: '/about' },
        { name: 'Продукция', link: '/products' },
        { name: 'Услуги', link: '/services' },
        { name: 'География', link: '/geography' },
        { name: 'Документы', link: '/documents' },
        { name: 'Контакты', link: '/contacts' },
    ]

    return (
        <nav className={s.container}>
            <div>
                <ul className={s.wrapper}>
                    {sections.map(({name, link}) => (
                        <>
                            <li key={name} >
                                <Link href={link} >
                                    {name}
                                </Link>
                            </li>
                            <hr className={s.hr} />
                        </>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default HeaderSections
