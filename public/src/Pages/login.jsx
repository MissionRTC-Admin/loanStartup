import React, { Component } from 'react'
import { Button, Card, CardContent, TextField, Typography } from '@material-ui/core'
import GoogleButton from 'react-google-button';

export default class login extends Component {
    constructor(props) {
        super(props)
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="Login" >
                <Card style={{ width:'90%', height:'90%', maxHeight:'350px', maxWidth:"300px", }} elevation={9} >
                    <CardContent>
                        <Typography component='div' >
                        <div className="LoginHader">
                            Login
                        </div>
                        </Typography>
                        <div style={{ display:"flex", justifyContent:'center', alignItems:'center', padding:'10px' }}>
                            <TextField id="phoneNo" label="Mobile no" variant="outlined" style={{ width:'240px' }} />
                        </div>
                        <div style={{ display:"flex", justifyContent:'center', alignItems:'center', padding:'10px'}}>
                            <TextField id="phoneNo" label="Password" variant="outlined" style={{ width:'240px' }} />
                        </div>
                        <div style={{ display:"flex", justifyContent:'center', alignItems:'center', padding:'10px'}}>
                            <Button variant="contained" color="primary" style={{ width:'240px' }} onClick={()=>{
                                console.log('Clicked By Mobile No.');
                            }} >Login</Button  >
                        </div>
                        <div style={{ display:"flex", justifyContent:'center', alignItems:'center', padding:'10px'}}>
                            <GoogleButton
                                onClick={()=>{
                                    console.log(`Clicked By Gmail Account`);
                                }}
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }
}