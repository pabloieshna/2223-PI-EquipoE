import { getBaseUrl } from '../utils/utils'
const apiURL = `${getBaseUrl}/api/users`

export default function getUsers() {
    fetch(apiURL)
    .then(response => {  
      const {data = []} = response
      if (Array.isArray(data)){
        const users = data.map(user => user.name)
        return users
    }      
    })
}