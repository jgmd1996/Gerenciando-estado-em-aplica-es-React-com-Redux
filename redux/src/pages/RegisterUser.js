
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'


import { actions } from '../actions/todo'
import { selectors } from '../selectors/todo'


const RegisterUser = () => {
  const [user, setUser] = useState({
    login: '',
    id: '',
    node_id: '',
    avatar_url: '',
    gravatar_id: '',
    url: '',
    html_url: '',
    followers_url: '',
    following_url: '',
    gists_url: '',
    starred_url: '',
    subscriptions_url: '',
    organizations_url: '',
    repos_url: '',
    events_url: '',
    received_events_url: '',
    type: '',
    site_admin: '',
  })
  const dispatch = useDispatch()
  const tasks = useSelector(selectors.getTasks)//redux n precisa alterar

  // const handleInputChange = event => {
  //   updateTask(event.target.value)
  // }
  // aqui e para subir para o redux
  const handleFormSubmit = event => {
    //event.preventDefault()
    dispatch(actions.addTask(user))
    setUser('')
  }

  return (
    <>

      <div className="clo-6">

      
    
        <br/>
        <table borde="2" width="30%">
          <th><h6 className="text-center">
          Registrar novo usuario do gitHub
        </h6></th>
        <tr>
          <input
            type="text"
            className="form-control form-control-lg mb-3"
            placeholder="type"
            onChange={(e) => {
              setUser({ ...user, login: e.target.value });
            }}
          />
          </tr>
        


        <tr>
          <input
            type="text"
            className="form-control form-control-lg mb-3"
            placeholder="id"
            onChange={(e) => {
              setUser({ ...user, id: e.target.value });
            }}
          />
        </tr>

        <tr>
          <input
            type="text"
            className="form-control form-control-lg mb-3"
            placeholder="node_id"
            onChange={(e) => {
              setUser({ ...user, node_id: e.target.value });
            }}
          /></tr>
        

        <tr>
          <input
            type="text"
            className="form-control form-control-lg mb-3"
            placeholder="avatar_url"
            onChange={(e) => {
              setUser({ ...user, avatar_url: e.target.value });
            }}
          /></tr>
        

        <tr>
          <input
            type="text"
            className="form-control form-control-lg mb-3"
            placeholder="gravatar_id"
            onChange={(e) => {
              setUser({ ...user, gravatar_id: e.target.value });
            }}
          /></tr>
        

        <tr>
          <input
            type="text"
            className="form-control form-control-lg mb-3"
            placeholder="url"
            onChange={(e) => {
              setUser({ ...user, url: e.target.value });
            }}
          /></tr>
        

        <tr>
          <input
            type="text"
            className="form-control form-control-lg mb-3"
            placeholder="html_url"
            onChange={(e) => {
              setUser({ ...user, html_url: e.target.value });
            }}
          /></tr>
        

        <tr>
          <input
            type="text"
            className="form-control form-control-lg mb-3"
            placeholder="followers_url"
            onChange={(e) => {
              setUser({ ...user, followers_url: e.target.value });
            }}
          /></tr>
        

        <tr>
          <input
            type="text"
            className="form-control form-control-lg mb-3"
            placeholder="following_url"
            onChange={(e) => {
              setUser({ ...user, following_url: e.target.value });
            }}
          /></tr>
        

        <tr>
          <input
            type="text"
            className="form-control form-control-lg mb-3"
            placeholder="gists_url"
            onChange={(e) => {
              setUser({ ...user, gists_url: e.target.value });
            }}
          /></tr>
        

        <tr>
          <input
            type="text"
            className="form-control form-control-lg mb-3"
            placeholder="starred_url"
            onChange={(e) => {
              setUser({ ...user, starred_url: e.target.value });
            }}
          /></tr>
        

        <tr>
          <input
            type="text"
            className="form-control form-control-lg mb-3"
            placeholder="subscriptions_url"
            onChange={(e) => {
              setUser({ ...user, subscriptions_url: e.target.value });
            }}
          /></tr>
        

        <tr>
          <input
            type="text"
            className="form-control form-control-lg mb-3"
            placeholder="organizations_url"
            onChange={(e) => {
              setUser({ ...user, organizations_url: e.target.value });
            }}
          /></tr>
        

        <tr>
          <input
            type="text"
            className="form-control form-control-lg mb-3"
            placeholder="repos_url"
            onChange={(e) => {
              setUser({ ...user, repos_url: e.target.value });
            }}
          /></tr>
        

        <tr>
          <input
            type="text"
            className="form-control form-control-lg mb-3"
            placeholder="events_url"
            onChange={(e) => {
              setUser({ ...user, events_url: e.target.value });
            }}
          /></tr>
        

        <tr>
          <input
            type="text"
            className="form-control form-control-lg mb-3"
            placeholder="received_events_url"
            onChange={(e) => {
              setUser({ ...user, received_events_url: e.target.value });
            }}
          /></tr>
        

        <tr>
          <input
            type="text"
            className="form-control form-control-lg mb-3"
            placeholder="type"
            onChange={(e) => {
              setUser({ ...user, type: e.target.value });
            }}
          /></tr>
        

        <tr>
          <input
            type="text"
            className="form-control form-control-lg mb-3"
            placeholder="site_admin"
            onChange={(e) => {
              setUser({ ...user, site_admin: e.target.value });
            }}
          /></tr>
          </table>

        <button onClick={() => handleFormSubmit()}  className="btn btn-lg btn-block btn-secondary">
        adicionar novo usuario
        </button>


       



      </div>
    </>
  )

}

export default RegisterUser;