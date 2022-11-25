import {useState, useEffect} from 'react'
import axios from 'axios'
import {CommitContainer} from './CommitContainer'

export const Commits = () => {
    const [commits, setCommits] =  useState([])
    const [fetching, setFetching] = useState(false)
    useEffect(() => {
     getCommits();
    }, [])

    useEffect(() => {
        console.log(commits)
    },[commits])

    const getCommits = async () => {
        setFetching(true)
        await axios.get('https://api.github.com/repos/prathikbundele/github-commits-app/commits')
    .then(res => {
        console.log(res.data)
        setCommits(res.data)
        setFetching(false)
    })
    }

    const handleRefreshClick = () => {
        getCommits()
    }

    return(
        <>
        <div style={styles.listBlock}>
            {commits.length > 0 ? (commits.map((c, index) => (
                <div key={index}>
                    <CommitContainer commit={c} />
                </div>
            ))) : null}
        </div>
        <div style={styles.bottomBlock}>
            {fetching && <p>fetching</p>}
            <button onClick={handleRefreshClick}>Refresh</button>
         </div>
        
        </>
    )
}

const styles = {
    listBlock : {margin : '10px'},
    bottomBlock : {textAlign : 'center'}
}

