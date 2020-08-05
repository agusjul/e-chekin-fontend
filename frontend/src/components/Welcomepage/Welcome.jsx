import React from 'react';
import styles from './Welcome.module.css';
import {Card} from 'react-bootstrap';
class Welcomepage extends React.Component{
    render(){
        return(
            <div className={styles.container}>
                <div className={styles.bodyy}>
                    <div>
                        <Card>
                            <Card.Body>
                                <div>
                                    <div>
                                        <h4>Selamat Datang di <br/> STMIK Primakara</h4>
                                        <p style={{fontSize : "18px", marginTop : "20px"}}>Data berhasil dikirim, sekarang anda dapat memasuki area</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
} 

export default Welcomepage