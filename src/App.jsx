import { styled } from '@mui/system'
import React, { useEffect, useState } from 'react'
const App = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {  
        const getUsers = async () => {  
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/photos?_limit=10',
            )
            const result = await response.json()
            setUsers(result)
        }
        getUsers()
    }, [])
    return (
        <Container >
            {users.map((item) => {
                return <MainDiv>  <div><h1>{item.ulbumId}</h1>  <Main><p> {item.title}</p><div><img style={{width:40, height:40}}  src={item.thumbnailUrl}/> {item.id}</div> </Main> <div>  <img style={{width:150}} src={item.url}/></div></div></MainDiv>
            })}
        </Container>
    )
}
export default App
const MainDiv = styled('div')`
background-color:aqua;
margin-top: 10px;
text-align:center;
width: 200px;
`
const Container = styled('div')`
display:flex;
justify-content: space-between;
flex-wrap:wrap;
width: 700px;
`
const Main = styled ('div')`
display:flex;
justify-content: space-between;`