import Link from 'next/link'
import { FC } from 'react'
import s from './HeaderLogo.module.scss'

const HeaderLogo: FC = () => {
    return (
        <nav className={s.container}>
            <div className={s.wrapper}>
                <Link
                    href="#"
                    className="flex items-center space-x-3 pb-[23px] rtl:space-x-reverse"
                >
                    <img
                        src="/icons/logo.svg"
                        alt="НВБ Эненргия-лого"
                        className="h-[76px]"
                    />
                </Link>
            </div>
        </nav>
    )
}

export default HeaderLogo
