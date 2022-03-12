import React from 'react';
import { useEffect, useState } from 'react'

export default function ApiGitHub() {
    const [itens, setItens] = useState([])
    useEffect(() => {
        async function fetchMyAPI() {
            let response = await fetch(`https://api.github.com/users`)
            const usuariosDaAPI = await response.json()
            setItens(usuariosDaAPI)

        }

        fetchMyAPI()
    }, [])// aqui fica as dependencias []
    //toda vez que o valor da dependia mudar o useEffect sera executado novamente.

    return (
        <div className="App">
            <table style={{ border: "1px solid" }}>
                <th>login</th>
                <th>id</th>
                <th>node_id</th>
                {itens.map(item => {

                    return <tr style={{ border: "1px solid" }}>
                        <td style={{ border: "1px solid" }}>{item.login}</td>
                        <td style={{ border: "1px solid" }}>{item.id}</td>
                        <td style={{ border: "1px solid" }}>{item.node_id}</td>
                        <td><img width={"100"} height={"100"} src={item.avatar_url} /></td>
                        <td style={{ border: "1px solid" }}>{item.gravatar_id}</td>
                        <td style={{ border: "1px solid" }}>{item.url}</td>
                        <td style={{ border: "1px solid" }}>{item.html_url}</td>
                        <td style={{ border: "1px solid" }}>{item.followers_url}</td>
                        <td style={{ border: "1px solid" }}>{item.following_url}</td>
                        <td style={{ border: "1px solid" }}>{item.gists_url}</td>
                        <td style={{ border: "1px solid" }}>{item.starred_url}</td>
                        <td style={{ border: "1px solid" }}>{item.subscriptions_url}</td>
                        <td style={{ border: "1px solid" }}>{item.organizations_url}</td>
                        <td style={{ border: "1px solid" }}>{item.repos_url}</td>
                        <td style={{ border: "1px solid" }}>{item.events_url}</td>
                        <td style={{ border: "1px solid" }}>{item.received_events_url}</td>
                        <td style={{ border: "1px solid" }}>{item.type}</td>
                        <td style={{ border: "1px solid" }}>{item.site_admin}</td>
                    </tr>
                })}
            </table>
        </div>
    )
}

