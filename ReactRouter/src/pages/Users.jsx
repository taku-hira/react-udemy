import { useParams, Link } from 'react-router-dom'

export const Users = () => {
    return (
        <div>
            <h1>Users</h1>
            <ul>
                <li><Link to="/users/1">User 1</Link></li>
                <li><Link to="/users/2">User 2</Link></li>
                <li><Link to="/users/3">User 3</Link></li>
            </ul>
        </div>
    )
}

export const UserDetail = () => {
    const { userId } = useParams()
    return (
        <div>
            <h1>User Detail</h1>
            <p>User ID: {userId}</p>
        </div>
    )
}
