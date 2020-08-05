import React, { Component } from 'react';
import styles from './ScanQR.module.css';
import {Card, Button, Table} from 'react-bootstrap';
import img1 from '../../image/qrcode.png'
import Header from '../Header/Header';
import io from 'socket.io-client';
import axios from 'axios';
class ScanQR extends React.Component{

    // state ={
    //     statistik : {}
    // }

    // socket = io("https://e-checkin-server-283807.et.r.appspot.com", {transports: ['polling']})

    // componentDidUpdate(){
    //     const app = this
    //     this.socket.on(`visitors-updated`, function(v){
    //       console.log(v)
    //       app.setState({
    //         data : v.visitors,
    //         statistik : v.stats
    //       })
    //     })
    //   }

    // async componentDidMount(){
    //     const stat = await axios({
    //         method : "get",
    //         url : "https://e-checkin-server-283807.et.r.appspot.com/api/visitors/stats",
    //         headers : {
    //           Authorization : `Bearer ${JSON.parse(localStorage.getItem("token")).token}`
    //         }
    //       })

    //       this.setState({
    //         statistik : stat.data
    //       })

    //       console.log(this.state.statistik)
    // }

    render(){
        return(
            <div className={styles.container}>
                <div className={styles.bodyy}>
                    <Card className={styles.qr}>
                        <Card.Body>
                            <div className={styles.scanarea}>
                                <div className={styles.information}>
                                <div className = {styles.data}>
                                        
                                        <h2 style={{color : "161616", justifyContent : "left", display : "flex", marginBottom :"40px"}}>Your Condition :</h2>
                                        <div class="row row-cols-1 row-cols-md-3 g-4">
                                            <div class="col mb-2">
                                                <div class="card h-100"  >
                                                <div class="card-body">
                                                    <p class="card-title">Suhu Tubuh</p>
                                                <h2 class="card-text text-danger">37,5&deg;</h2>
                                                </div>
                                                </div>
                                            </div>
                                            <div class="col mb-2">
                                                <div class="card h-100" >
                                                <div class="card-body">
                                                    <p class="card-title">Deteksi Masker</p>
                                                    <h2 class="card-text text-success">Yes</h2>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                </div>
                                <div className={styles.qrcode}>
                                    <div className={styles.shade1}>
                                        <div className={styles.shade2}>
                                            <img src={img1} style={{width : "100%"}} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    </div>
            </div>
        )
    }
}

export default ScanQR;