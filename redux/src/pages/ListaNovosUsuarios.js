
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectors } from '../selectors/todo'





const ListaNovosUsuarios = () => {

    
   // const dispatch = useDispatch()
  const ola = useSelector(selectors.getTasks)//redux n precisa alterar


  const [tabela, setTabela] = useState([])
  useEffect(() => {  
    setTabela(ola)
  }, [])

  return (
    <>
        <table style={{ border: "1px solid" }}>
                <th>login</th>
                <th>id</th>
                <th>node_id</th>
                {tabela.map(item => {

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
    </>
  )

}

export default ListaNovosUsuarios;