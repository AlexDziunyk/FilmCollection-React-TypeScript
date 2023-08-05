import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';

interface ISkeletonProps {
    cards?: number;
}

function FilmSkeleton({cards}: ISkeletonProps) {
    return (
        Array(cards).fill(0).map((item: number, i: number) =>
            <div key={i} className='film__container'>
                <SkeletonTheme baseColor='#202020' highlightColor='#444'>  
                    <Skeleton height={340}/>
                    <div className='film__info'>
                        <div className='film__rating'>
                            <Skeleton height={20} width={25}/>
                            <Skeleton height={20} width={40}/>
                        </div>
                        <Skeleton className='film__title' height={20}/>
                        <Skeleton style={{marginTop: '25px'}} height={35}/>
                    </div>
                </SkeletonTheme>
            </div>)
    )
}


export default FilmSkeleton;
