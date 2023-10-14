import weviews1 from '@/public/projectImages/weviews1.png'
import weviews2 from '@/public/projectImages/weviews2.png'
import weviews3 from '@/public/projectImages/weviews3.png'
import weviews4 from '@/public/projectImages/weviews4.png'
import { StaticImageData } from 'next/image'


const projectImages: {
  [key: string] : StaticImageData[]
} = {
  'weviews': [weviews1, weviews2, weviews3, weviews4]
}


export default projectImages