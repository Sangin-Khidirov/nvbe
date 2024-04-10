'use client'
import Card from '@/components/Card/Card'
import clsx from 'clsx'
import { FC } from 'react'
import s from './Services.module.scss'
import useHScroll from '@/hook/useHScroll'

const products = [
    {
        img: '/images/services/1.svg',
        num: '0.1',
        description: 'Строительство мостов и туннелей',
    },
    {
        img: '/images/services/2.svg',
        num: '0.3',
        description: 'Устройство теплоизоляции вспученным перлитом',
    },
    {
        img: '/images/services/3.svg',
        num: '0.3',
        description: 'Строительство комплексной системы безопасности',
    },
    {
        img: '/images/services/4.svg',
        num: '0.4',
        description: 'Предпусконаладочные и пуско-наладочные',
    }
]

const Services: FC = () => {
    const [ref, handleScroll] = useHScroll()

    return (
        <div className={s.container}>
            <h1 className="flex justify-end text-[120px] font-bold uppercase text-white pr-[136px]">
                Услуги
            </h1>
            <div
                ref={ref}
                onScroll={handleScroll}
                className={clsx(s.cards, 'hide-scrollbar')}
            >
                {products.map((item) => (
                    <Card
                        key={item.num}
                        img={item.img}
                        num={item.num}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default Services
