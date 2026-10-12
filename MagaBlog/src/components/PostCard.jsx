import appwriteServices from '../appwrite/config'
import { Link } from 'react-router-dom'
function PostCard({
    $id,
    title,
    featuredImage,
}) {
    return (
        <Link to={`/post/${$id}`} className='w-full'>
            <div className='bg-white rounded-lg shadow-md overflow-hidden'>
                <img src={appwriteServices.getFilePreviewUrl(featuredImage)}
                    alt={title} className='w-full h-48 object-cover' />
                <div className='p-4'>
                    <h3 className='text-lg font-semibold'>{title}</h3>
                </div>
            </div>
        </Link>
    )
}

export default PostCard
