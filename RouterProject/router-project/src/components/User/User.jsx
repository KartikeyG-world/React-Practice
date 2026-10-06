import { useParams } from "react-router-dom"
function User() {
    const { userId } = useParams()
    return (
        <div style={
            {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.5rem"
            }
        }>
            User : {userId}
        </div>
    )
}

export default User
