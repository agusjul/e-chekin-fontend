import React, { Component } from 'react';
import styles from './Homepage.module.css';
import {Card, Button, Table} from 'react-bootstrap';
import img1 from '../../image/qrcode.png'
import Header from '../Header/Header';
import io from 'socket.io-client';
import axios from 'axios';
class Homepage extends React.Component{

    state ={
        statistik : {}
    }

    socket = io("https://e-checkin-server-283807.et.r.appspot.com", {transports: ['polling']})

    componentDidUpdate(){
        const app = this
        this.socket.on(`visitors-updated`, function(v){
          console.log(v)
          app.setState({
            data : v.visitors,
            statistik : v.stats
          })
        })
      }

    async componentDidMount(){
        const stat = await axios({
            method : "get",
            url : "https://e-checkin-server-283807.et.r.appspot.com/api/visitors/stats",
            headers : {
              Authorization : `Bearer ${JSON.parse(localStorage.getItem("token")).token}`
            }
          })

          this.setState({
            statistik : stat.data
          })

          console.log(this.state.statistik)
    }

    render(){
        return(
            <div className={styles.container}>
                <div className={styles.bodyy}>
                    <Card className={styles.qr}>
                        <Card.Body>
                            <div className={styles.scanarea}>
                                <div className={styles.information}>
                                    <h1>Selamat Datang di  STMIK Primakara</h1>
                                    <p style={{fontSize : "24px", marginTop : "20px"}}>Scan barcode untuk melanjutkan, anda akan diminta mengisi data diri untuk bisa masuk ke STMIK Primakara</p>
                                   
                                </div>
                                {/* <div className={styles.qrcode}>
                                    <div className={styles.shade1}>
                                        <div className={styles.shade2}>
                                            <img src={img1} style={{width : "100%"}} alt=""/>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            <div>
                            <hr/>
                                <div className = {styles.data}>
                                        
                                        <h2 style={{color : "161616", justifyContent : "center", display : "flex", marginTop :"20px"}}>Statistik</h2>
                                        <div class="row row-cols-1 row-cols-md-3 g-4">
                                            <div class="col mb-2">
                                                <div class="card h-100"  >
                                                <div class="card-body">
                                                    <p class="card-title">Orang datang</p>
                                                <h2 class="card-text">{this.state.statistik.checkedInCount}</h2>
                                                </div>
                                                </div>
                                            </div>
                                            <div class="col mb-2">
                                                <div class="card h-100" >
                                                <div class="card-body">
                                                    <p class="card-title">Orang di lokasi</p>
                                                    <h2 class="card-text">{(this.state.statistik.checkedInCount)-(this.state.statistik.checkedOutCount)}</h2>
                                                </div>
                                                </div>
                                            </div>
                                            <div class="col mb-2">
                                                <div class="card h-100" >
                                                <div class="card-body">
                                                    <p class="card-title">Orang keluar</p>
                                                <h2 class="card-text">{this.state.statistik.checkedOutCount}</h2>
                                                </div>
                                                </div>
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

export default Homepage;