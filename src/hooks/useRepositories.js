import { useEffect, useState } from "react"
// import { useQuery } from "@apollo/client"
// import { GET_REPOSITORIES } from "../graphql/queries"

const useRepositories = () => {
  // const {data = {}, loading, refetch} = useQuery(GET_REPOSITORIES)
  // const { repositories = null } = data
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
    // return { loading, repositories: repositoriesNodes, refetch }
  
  }

  export default useRepositories