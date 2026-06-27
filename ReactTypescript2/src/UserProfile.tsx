import type { VFC } from "react"
import type { User } from "./types/user"

type Props = {
    user: User
}


export const UserProfile: VFC<Props> = (props) => {
    const { user } = props;
    return (
        <dl>
            <dt>名前</dt>
            <dd>{ user.name }</dd>
            <dt>趣味</dt>
            <dd>{ user.hobbies?.join(" / ") }</dd>
        </dl>
    )
}