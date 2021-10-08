import React, { Component } from 'react'
import { Button, Card, CardContent, Typography } from '@material-ui/core'
import GoogleButton from 'react-google-button';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { authcation } from '../firebase'
import { Redirect } from 'react-router-dom'

export default class registration extends Component {
    constructor(props) {
        super(props)

        this.state = {
            redirect: false
        }
    }

    login() {
        const provider = new GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        signInWithRedirect(authcation, provider)
            .then((result) => {
                console.log(result);

            }).catch((error) => {
                console.log(error);
            })
    }
    render() {
        return (
            <div className="Registration" >
                <Card style={{ width: '90%', height: '90%', maxHeight: '200px', maxWidth: "300px", }} elevation={9} >
                    <CardContent>
                        <Typography component='div' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.4rem', fontWeight: 'bold', paddingBottom: '15px' }} >Registration</Typography>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                            <GoogleButton onClick={this.login} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '15px' }} >
                            <Button variant="contained" color="primary" onClick={() => {
                                this.setState({
                                    redirect: true
                                })
                            }} >
                                Login here
                                {
                                    this.state.redirect ? <Redirect to="/login" /> : <></>
                                }
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }
}