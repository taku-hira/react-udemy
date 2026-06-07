import styled from "styled-components"
import { UserCard } from "../organisms/user/UserCard"
import { SearchInput } from "../molecules/SearchInput"

export const Users = () => {

    const users = [...Array(10).keys()].map((val) => {
        return {
            id: "val",
            name: `村松-${val}`,
            image: "https://images.unsplash.com/photo-1554591203-d6433caa8495?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            email: "test@test.com",
            phone: "090-0000-0000",
            company: {
            name: "テスト株式会社"
            },
            website: "https://google.com"
        }
    })
    return (
        <SContainer>
            <h2>ユーザー一覧</h2>
            <SearchInput />
            {users.map((user) => {
                return <UserCard key={user.id} user={user} />
            })}
        </SContainer>
    )
} 

const SContainer = styled.div`
    text-algin: center;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`;

const SUserArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
`