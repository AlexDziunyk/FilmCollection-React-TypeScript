import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';

function CarouselSkeleton() {
  return (
    <SkeletonTheme baseColor='#202020' highlightColor='#444'>
        <Skeleton style={{maxHeight: '50em', minHeight: '30em', padding: '9% 0'}}/>
    </SkeletonTheme>
  )
}

export default CarouselSkeleton;
