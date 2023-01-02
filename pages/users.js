import MainContainer from "../components/MainContainer"
import Link from "next/link"

const Users = ({users}) => {


    return (
        <MainContainer title=' с пользователями'>
            <h1>Страница с пользователями</h1>
            { users.map( user => 
                <li key={user.id} >
                    <Link href={`/users/${user.id}`}>{user.name}</Link>
                </li>
                )}
        </MainContainer>
    )
}

export default Users

export async function getStaticProps(context) {
    const response = await fetch ('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()

    return {
        props: { users }
    }
}