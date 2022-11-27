import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';



export const AuthenticationDialog = ({open,submitToken}) => {

const [token, setToken] = useState(null)

const handleChange = (e) => {
    setToken(e.target.value)
}

const handleSubmit = () => {
    submitToken(token)
}

    return(
        <>
            <div style={{}}>
                <Dialog open={open} fullWidth>
                    <DialogTitle>User Verification</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        Enter Github Access Token
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Personal Access Token"
                        type="text"
                        fullWidth      
                        variant="filled"
                        onChange={handleChange}
                    />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleSubmit}>submit</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    )
}
