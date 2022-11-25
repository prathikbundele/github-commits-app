export const CommitContainer = ({commit}) => {
    return(
        <>
        <div style={styles.contsiner}>
            <p style={{margin : '12px'}}>{commit.commit.message}</p>
            <p style={{margin : '12px'}}>{commit.commit.committer.date} by {commit.commit.committer.name} </p>
        </div>
        </>
    )
}

const styles = {
    contsiner : {margin:'10px', padding : '10px', backgroundColor : '#F0F8FF'}
}