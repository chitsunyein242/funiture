import { useParams } from "react-router-dom"

function BlogDetails() {
    const { postId } = useParams();
    return (
        <div className="flex h-screen w-screen items-center justify-center text-2xl font-bold">
            Blog Details : {postId}
        </div>
    )
}

export default BlogDetails
