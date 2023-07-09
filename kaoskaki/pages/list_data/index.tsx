import { useState,useEffect } from "react";
import axios from "axios";
import { stat } from "fs";
import Image from "next/image";
import Bg1 from '../gambar/list1.jpg';
import Bg2 from '../gambar/list2.jpg';
import Bg3 from '../gambar/list3.jpg';
import Bg4 from '../gambar/list4.jpg';
import Bg5 from '../gambar/list5.jpeg';
import Bg6 from '../gambar/list6.jpg';
import Bg7 from '../gambar/list7.jpg';
import Bg8 from '../gambar/list8.jpg';
import Bg9 from '../gambar/list9.jpeg';

export default function FormKaos_kaki() {
  return (
    <div className="bg">
        <div className="atas-list">
            <div className="card1" style={{float: "left", marginLeft: "6%", marginTop: "2%"}}>
                <Image src={Bg1} width={100} />
                <p>Nama Barang : Kaos Kaki 1</p>
                <p>Kode Barang : 123</p>
                <p>Size : M</p>
            </div>
            <div className="card2" style={{float: "left", marginLeft: "6%", marginTop: "2%"}}>
                <Image src={Bg2} width={100} />
                <br />
                <p>Nama Barang : Kaos Kaki 2</p>
                <p>Kode Barang : 123</p>
                <p>Size : M</p>
            </div>
            <div className="card3" style={{float: "left", marginLeft: "7%", marginTop: "2%"}}>
                <Image src={Bg3} width={100} />
                <br />
                <p>Nama Barang : Kaos Kaki 3</p>
                <p>Kode Barang : 123</p>
                <p>Size : L</p>
            </div>
            <div className="card4" style={{float: "left", marginLeft: "7%", marginTop: "2%"}}>
                <Image src={Bg4} width={100} />
                <br />
                <p>Nama Barang : Kaos Kaki 4</p>
                <p>Kode Barang : 123</p>
                <p>Size : L</p>
            </div>
            <div className="card5" style={{float: "left",marginLeft: "6%", marginTop: "5%"}}>
                <Image src={Bg5} width={100} />
                <p>Nama Barang : Kaos Kaki 5</p>
                <p>Kode Barang : 123</p>
                <p>Size : S</p>
            </div>
            <div className="card6" style={{float: "left",marginLeft: "6%", marginTop: "5%"}}>
                <Image src={Bg6} width={100} />
                <p>Nama Barang : Kaos Kaki 6</p>
                <p>Kode Barang : 123</p>
                <p>Size : M</p>
            </div>
            <div className="card7" style={{float: "left",marginLeft: "6%", marginTop: "5%"}}>
                <Image src={Bg7} width={100} />
                <p>Nama Barang : Kaos Kaki 7</p>
                <p>Kode Barang : 123</p>
                <p>Size : S</p>
            </div>
            <div className="card8" style={{float: "left",marginLeft: "7%", marginTop: "5%"}}>
                <Image src={Bg8} width={100} />
                <p>Nama Barang : Kaos Kaki 8</p>
                <p>Kode Barang : 123</p>
                <p>Size : M</p>
            </div>
            <div className="card9" style={{float: "left",marginLeft: "4%", marginTop: "5%"}}>
                <Image src={Bg9} width={100} />
                <p>Nama Barang : Kaos Kaki 9</p>
                <p>Kode Barang : 123</p>
                <p>Size : S</p>
            </div>
        </div>
        <div className="bawah-list"></div>
    </div>
 )
}