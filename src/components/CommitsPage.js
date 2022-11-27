import {useState, useEffect} from 'react'
import axios from 'axios'
import {CommitContainer} from './CommitContainer'
import { octokit } from '../Octokit'
import Button from '@mui/material/Button';
import {AuthenticationDialog} from './AuthenticationDialog'


export const Commits = () => {
    const [commits, setCommits] =  useState([])
    const [fetching, setFetching] = useState(false)
    const [dialogOpen, setDialogOpen] = useState(true)

    useEffect(() => {
     if(localStorage.getItem('github-token')){
         setDialogOpen(false)
         getCommits()
     }
    }, [])

    useEffect(() => {
        getCommits()
    },[localStorage.getItem('github-token')])


    const getCommits = async () => {
        if(localStorage.getItem('github-token')){
            setFetching(true)
            setCommits([])
            try{
                const res = await octokit(localStorage.getItem('github-token')).request('GET /repos/{owner}/{repo}/commits', {
                    owner: 'prathikbundele',
                    repo: 'github-commits-app',
                  })
                    setCommits(res.data)
                    setFetching(false)
            }catch{
                console.log('exception')
                setFetching(false)
            }
        }
        
    }


    const handleRefreshClick = () => {
        getCommits()
    }

    const submitToken = (token) => {
        localStorage.setItem('github-token', token)
        setDialogOpen(false)
        getCommits()
    }

    const removeToken = () => {
        localStorage.removeItem('github-token')
        setCommits([])
        setDialogOpen(true)
    }

    return(
        <>
        <div style={styles.pageBody}>
        <div style={styles.topBlock}>
            <div style={styles.header}>Github Commits App</div>
            <div>      
                <Button variant="" onClick={removeToken}>Signout</Button>
            </div>
        </div>
        <div style={styles.listBlock}>
            <p>
                Github Repository : <a href="https://github.com/prathikbundele/github-commits-app" target="_blank">prathikbundele/github-commits-app</a>
            </p>
            {commits.length > 0 ? (commits.map((c, index) => (
                <div key={index}>
                    <CommitContainer commit={c} />
                </div>
            ))) : null}
        {commits.length > 0 && <div style={styles.bottomBlock}>
            {fetching && <p>fetching</p>}
            <Button variant="contained" onClick={handleRefreshClick}>Refresh</Button>
         </div>}
        </div>
        </div>
        <AuthenticationDialog open={dialogOpen} submitToken={submitToken} />
        </>
    )
}

const styles = {
    pageBody : {margin : '15px'},
    listBlock : {margin : '10px'},
    topBlock : {margin : '10px', display : 'flex', justifyContent : 'space-between', alignItems : 'center'},
    header : {fontSize : '24px', fontWeight : '700'},
    bottomBlock : {textAlign : 'center'}
}

