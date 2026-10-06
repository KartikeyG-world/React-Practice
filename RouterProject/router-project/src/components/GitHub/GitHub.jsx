import { useState, useEffect } from 'react'
function GitHub() {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch('https://api.github.com/users/KartikeyG-world')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                console.log(data)

            })
    }, [])
    return (
        <div className="flex justify-center flex-col gap-4
    items-center h-screen bg-gray-600 text-white text-center 
    text-2xl font-semibold">
            GitHub follower : {data.followers}
            <img src={data.avatar_url} alt="GitHub" width={300} />
            <p className="text-lg">{data.name}</p>
            <p className="text-md">{data.bio}</p>
            <p className="text-sm">{data.location}</p>
            <p className="text-xs">{data.email}</p>

        </div>
    )
}

export default GitHub
