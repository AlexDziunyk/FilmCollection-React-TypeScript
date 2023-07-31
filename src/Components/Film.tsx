import '../styles/Film.css';
import { motion } from "framer-motion"

interface IFilmProps {
    title?: string;
    img?: string;
}

export default function Film({title, img}: IFilmProps) {
    
    return (
        <motion.div className='film'>
           <img className='film__img' src={img ? img : 'https://www.osvnews.com/wp-content/uploads/2023/02/Film-photo-via-Canva-Pro.png'} alt='filmImage'></img>
           <p className='film__title'>{title}</p>
        </motion.div>
    )
}



