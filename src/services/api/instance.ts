import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://fakestoreapi.com/',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})
