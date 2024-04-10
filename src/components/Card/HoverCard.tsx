import Link from 'next/link'
import { FC } from 'react'
import s from './HoverCard.module.scss'

interface HoverCardProps {
    hoverDescription: string
    hoverNum: string
}

const HoverCard: FC<HoverCardProps> = ({hoverDescription, hoverNum}) => {
    return (
        <Link href="/">
            <div className={s.container}>
                <h2 className={s.title}>{hoverNum}</h2>
                <h3 className={s.description}>{hoverDescription}</h3>
            </div>
        </Link>
    )
}

export default HoverCard
