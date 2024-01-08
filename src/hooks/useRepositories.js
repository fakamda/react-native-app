import { useEffect, useState } from "react"

const useRepositories = () => {
    const [repositories, setRepositories] = useState(null)
  
    const fetchRepositories = async () => {
      try {
        const response = await globalThis.fetch('http://localhost:5000/api/repositories') //globalThis.fetch para pasarle el objeto global
    
        const json = await response.json()
        console.log('Response JSON:', json);
  
        setRepositories(json);
    
      } catch (error) {
        console.error('Error fetching repositories:', error.message);
      }
    }
    
  
    useEffect(() => {
      console.log(repositories)
      fetchRepositories()
    }, [])
  
    const repositoriesNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : []
  
    return { repositories: repositoriesNodes }
  
  }

  export default useRepositories