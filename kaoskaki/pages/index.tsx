import { useState,useEffect } from "react";
import axios from "axios";
import { stat } from "fs";
import Link from "next/link";


export default function FormKaos_kaki() {
  return (
    <div className="container-home">
      <nav>
        <div className="menu">
          <ul>
            <li><Link href="/input">Input data</Link></li>
            <li><Link href="/list_data">List kaos kaki</Link></li>
          </ul>
        </div>
      </nav>
      <div className="isi">
      </div>
    </div>
 )
}