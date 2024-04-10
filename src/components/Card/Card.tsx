'use client'
import { FC, useState } from 'react'
import s from './Card.module.scss'
import HoverCard from './HoverCard'

interface CardProps {
    img: string
    description: string
    num: string
    hoverNum: string
    hoverDescription: string
}

const Card: FC<CardProps> = ({
    img,
    description,
    num,
    hoverDescription,
    hoverNum,
}) => {
    const [isHovering, setIsHovering] = useState(false)

    const handleMouseOver = () => {
        setIsHovering(true)
    }

    const handleMouseOut = () => {
        setIsHovering(false)
    }
    return (
        <div
            className="relative flex"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            {isHovering && (
                <HoverCard
                    hoverNum={hoverNum}
                    hoverDescription={hoverDescription}
                />
            )}
            <div className={s.container}>
                <img className={s.img} src={img} />

                <h3 className={s.description}>{description}</h3>
                <div className={s.footer}>
                    <p className={s.num}>{num}</p>

                    <p className={s.details}>
                        Подробнее&#x2800;
                        <img src="/icons/detailsArrow.svg" />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card
