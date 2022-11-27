export const CommitContainer = ({commit}) => {
    return(
        <>
        <div style={styles.contsiner}>
            <p style={{margin : '12px', fontSize : '16px'}}>{commit.commit.message}</p>
            <p style={{margin : '12px', fontSize : '14px', fontWeight : '300'}}>{commit.commit.committer.date} by <span style={{fontWeight : '400'}}>{commit.commit.committer.name}</span> </p>
        </div>
        </>
    )
}

const styles = {
    contsiner : {margin:'10px 0px', padding : '10px', backgroundColor : '#F0F8FF', boxShadow : '1px 2px #e6f3ff'}
}