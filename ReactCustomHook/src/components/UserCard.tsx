import type { FC } from "react"
import type { UserProfile } from "../types/userProfile"


type Props = {
    user: UserProfile;
}



export const UserCard: FC<Props> = (props) => {
    const { user } = props;

    const style = {
        border: "solid 1px #ccc",
        borderRadius: "8px",
        paddng: "0 16px",
        margin: "8px"
    }
    return (
        <div style={style}>
            <dl>
                <dt>名前</dt>
                <dd>{user.name}</dd>
                <dt>メール</dt>
                <dt>{user.email}</dt>
                <dd>住所</dd>
                <dt>{user.address}</dt>
            </dl>
        </div>
    )
}