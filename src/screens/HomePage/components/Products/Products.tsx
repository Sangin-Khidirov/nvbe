'use client'
import Card from '@/components/Card/Card'
import useHScroll from '@/hook/useHScroll'
import clsx from 'clsx'
import { FC } from 'react'
import s from './Products.module.scss'

const products = [
    {
        img: '/images/products/0.1.svg',
        num: '0.1',
        description: 'Отдел запорная арматура',
        hoverDescription:
            'АО «НВБ Энергия» является официальным дистрибьютором производителей запорно-регулирующей арматуры Bray и WENZHOU COOSAI VALVE CO',
    },
    {
        img: '/images/products/0.2.svg',
        num: '0.3',
        description: 'Отдел по металлоконструкциям и изделиям по чертежам',
        hoverDescription:
            'АО «НВБ Энергия» имеет 2 производственные площадки, расположенные в городах Челябинск и Минск.',
    },
    {
        img: '/images/products/0.3.svg',
        num: '0.3',
        description: 'Отдел по услугам нанесение АКЗ и ОГЗ',
        hoverDescription:
            'В 2017 была открыта производственная площадкав г. Воронеж европейского уровня, где наши специалисты производят работы по нанесению антикоррозионных и огнезащитных составов на железобетонные и металлические конструкции, выполняют работы по теплоизоляции трубопроводов, технологических узлов и прочего оборудования.',
    },
    {
        img: '/images/products/0.4.svg',
        num: '0.4',
        description: 'Отдел по емкостям и резервуарам',
        hoverDescription:
            'АО «НВБ Энергия» имеет 2 производственные площадки, находящиеся в городах Челябинск и Краснодар.',
    },
]

const Products: FC = () => {
    const [ref, handleScroll] = useHScroll()

    return (
        <div className={s.container}>
            <h1 className="pl-[140px] text-[120px] font-bold uppercase text-white">
                Продукция
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
                        hoverDescription={item.hoverDescription}
                        hoverNum={item.num}
                    />
                ))}
            </div>
        </div>
    )
}

export default Products
