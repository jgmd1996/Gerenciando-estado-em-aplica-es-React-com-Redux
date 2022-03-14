// import React, { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'

// import { actions } from './actions/todo'
// import { selectors } from './selectors/todo'

// const App = () => {
//   const [task, updateTask] = useState('')
//   const dispatch = useDispatch()
//   const tasks = useSelector(selectors.getTasks)

//   const handleInputChange = event => {
//     updateTask(event.target.value)
//   }

//   const handleFormSubmit = event => {
//     event.preventDefault()
//     dispatch(actions.addTask(task))
//     updateTask('')
//   }

//   return (
//     <>
//       <form onSubmit={handleFormSubmit}>
//         <input onChange={handleInputChange} value={task} />
        
        
//         <button>Add</button>
//       </form>
//       <ul>
//         {tasks.map((t, i) => (
//           <li key={i}>{t}</li>
//         ))}
//       </ul>
//     </>
//   )
// }

// export default App

// import React, { useState, useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'

// import { actions } from './actions/todo'
// import { selectors } from './selectors/todo'
// import ApiGitHub from './pages/ApiGitHub'

// const App = () => {
//   const [user, setUser] = useState({
//     login: '',
//     id: '',
//     node_id: '',
//     avatar_url: '',
//     gravatar_id: '',
//     url: '',
//     html_url: '',
//     followers_url: '',
//     following_url: '',
//     gists_url: '',
//     starred_url: '',
//     subscriptions_url: '',
//     organizations_url: '',
//     repos_url: '',
//     events_url: '',
//     received_events_url: '',
//     type: '',
//     site_admin: '',
//   })
//   const dispatch = useDispatch()
//   const tasks = useSelector(selectors.getTasks)//redux n precisa alterar

//   // const handleInputChange = event => {
//   //   updateTask(event.target.value)
//   // }
//   // aqui e para subir para o redux
//   const handleFormSubmit = event => {
//     //event.preventDefault()
//     dispatch(actions.addTask(user))
//     setUser('')
//   }

//   const [tabela, setTabela] = useState([])
//   useEffect(() => {
    
//     setTabela(tasks)

    
//   }, [tasks])

//   return (
//     <>
//         <table style={{ border: "1px solid" }}>
//                 <th>login</th>
//                 <th>id</th>
//                 <th>node_id</th>
//                 {tabela.map(item => {

//                     return <tr style={{ border: "1px solid" }}>
//                         <td style={{ border: "1px solid" }}>{item.login}</td>
//                         <td style={{ border: "1px solid" }}>{item.id}</td>
//                         <td style={{ border: "1px solid" }}>{item.node_id}</td>
//                         <td><img width={"100"} height={"100"} src={item.avatar_url} /></td>
//                         <td style={{ border: "1px solid" }}>{item.gravatar_id}</td>
//                         <td style={{ border: "1px solid" }}>{item.url}</td>
//                         <td style={{ border: "1px solid" }}>{item.html_url}</td>
//                         <td style={{ border: "1px solid" }}>{item.followers_url}</td>
//                         <td style={{ border: "1px solid" }}>{item.following_url}</td>
//                         <td style={{ border: "1px solid" }}>{item.gists_url}</td>
//                         <td style={{ border: "1px solid" }}>{item.starred_url}</td>
//                         <td style={{ border: "1px solid" }}>{item.subscriptions_url}</td>
//                         <td style={{ border: "1px solid" }}>{item.organizations_url}</td>
//                         <td style={{ border: "1px solid" }}>{item.repos_url}</td>
//                         <td style={{ border: "1px solid" }}>{item.events_url}</td>
//                         <td style={{ border: "1px solid" }}>{item.received_events_url}</td>
//                         <td style={{ border: "1px solid" }}>{item.type}</td>
//                         <td style={{ border: "1px solid" }}>{item.site_admin}</td>
//                     </tr>

//                 })}
//             </table>

//       <div className="clo-6">

      
    
//         <br/>
//         <table borde="2" width="30%">
//           <th><h6 className="text-center">
//           Registrar novo usuario do gitHub
//         </h6></th>
//         <tr>
//           <input
//             type="text"
//             className="form-control form-control-lg mb-3"
//             placeholder="type"
//             onChange={(e) => {
//               setUser({ ...user, login: e.target.value });
//             }}
//           />
//           </tr>
        


//         <tr>
//           <input
//             type="text"
//             className="form-control form-control-lg mb-3"
//             placeholder="id"
//             onChange={(e) => {
//               setUser({ ...user, id: e.target.value });
//             }}
//           />
//         </tr>

//         <tr>
//           <input
//             type="text"
//             className="form-control form-control-lg mb-3"
//             placeholder="node_id"
//             onChange={(e) => {
//               setUser({ ...user, node_id: e.target.value });
//             }}
//           /></tr>
        

//         <tr>
//           <input
//             type="text"
//             className="form-control form-control-lg mb-3"
//             placeholder="avatar_url"
//             onChange={(e) => {
//               setUser({ ...user, avatar_url: e.target.value });
//             }}
//           /></tr>
        

//         <tr>
//           <input
//             type="text"
//             className="form-control form-control-lg mb-3"
//             placeholder="gravatar_id"
//             onChange={(e) => {
//               setUser({ ...user, gravatar_id: e.target.value });
//             }}
//           /></tr>
        

//         <tr>
//           <input
//             type="text"
//             className="form-control form-control-lg mb-3"
//             placeholder="url"
//             onChange={(e) => {
//               setUser({ ...user, url: e.target.value });
//             }}
//           /></tr>
        

//         <tr>
//           <input
//             type="text"
//             className="form-control form-control-lg mb-3"
//             placeholder="html_url"
//             onChange={(e) => {
//               setUser({ ...user, html_url: e.target.value });
//             }}
//           /></tr>
        

//         <tr>
//           <input
//             type="text"
//             className="form-control form-control-lg mb-3"
//             placeholder="followers_url"
//             onChange={(e) => {
//               setUser({ ...user, followers_url: e.target.value });
//             }}
//           /></tr>
        

//         <tr>
//           <input
//             type="text"
//             className="form-control form-control-lg mb-3"
//             placeholder="following_url"
//             onChange={(e) => {
//               setUser({ ...user, following_url: e.target.value });
//             }}
//           /></tr>
        

//         <tr>
//           <input
//             type="text"
//             className="form-control form-control-lg mb-3"
//             placeholder="gists_url"
//             onChange={(e) => {
//               setUser({ ...user, gists_url: e.target.value });
//             }}
//           /></tr>
        

//         <tr>
//           <input
//             type="text"
//             className="form-control form-control-lg mb-3"
//             placeholder="starred_url"
//             onChange={(e) => {
//               setUser({ ...user, starred_url: e.target.value });
//             }}
//           /></tr>
        

//         <tr>
//           <input
//             type="text"
//             className="form-control form-control-lg mb-3"
//             placeholder="subscriptions_url"
//             onChange={(e) => {
//               setUser({ ...user, subscriptions_url: e.target.value });
//             }}
//           /></tr>
        

//         <tr>
//           <input
//             type="text"
//             className="form-control form-control-lg mb-3"
//             placeholder="organizations_url"
//             onChange={(e) => {
//               setUser({ ...user, organizations_url: e.target.value });
//             }}
//           /></tr>
        

//         <tr>
//           <input
//             type="text"
//             className="form-control form-control-lg mb-3"
//             placeholder="repos_url"
//             onChange={(e) => {
//               setUser({ ...user, repos_url: e.target.value });
//             }}
//           /></tr>
        

//         <tr>
//           <input
//             type="text"
//             className="form-control form-control-lg mb-3"
//             placeholder="events_url"
//             onChange={(e) => {
//               setUser({ ...user, events_url: e.target.value });
//             }}
//           /></tr>
        

//         <tr>
//           <input
//             type="text"
//             className="form-control form-control-lg mb-3"
//             placeholder="received_events_url"
//             onChange={(e) => {
//               setUser({ ...user, received_events_url: e.target.value });
//             }}
//           /></tr>
        

//         <tr>
//           <input
//             type="text"
//             className="form-control form-control-lg mb-3"
//             placeholder="type"
//             onChange={(e) => {
//               setUser({ ...user, type: e.target.value });
//             }}
//           /></tr>
        

//         <tr>
//           <input
//             type="text"
//             className="form-control form-control-lg mb-3"
//             placeholder="site_admin"
//             onChange={(e) => {
//               setUser({ ...user, site_admin: e.target.value });
//             }}
//           /></tr>
//           </table>

//         <button onClick={() => handleFormSubmit()} className="btn btn-lg btn-block btn-secondary">
//           finalizar pedido
//         </button>


//         <ApiGitHub></ApiGitHub>



//       </div>
//     </>
//   )

// }

// export default App