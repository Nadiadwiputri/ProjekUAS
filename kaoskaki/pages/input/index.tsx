import { useState,useEffect } from "react";
import axios from "axios";
import { stat } from "fs";

 
 const koneksiKaos_kaki = axios.create({
  
  baseURL: "http://127.0.0.1:5000/api/kaos_kaki" 
});

export default function FormKaos_kaki() {
  const [statekode_barang, setKode_barang] = useState("");
  const [statenama_barang, setNama_barang] = useState("");
  const [statesize, setSize] = useState("");
  const [statefoto, setFoto] = useState("");
  const [kaos_kaki, setKaos_kaki] = useState(null);

  const handleSubmitAdd = (event) => {
    
    event.preventDefault();
    const formData = new FormData(event.target);
    koneksiKaos_kaki
      .post("/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
     
 }

 const handleSubmitEdit =  (event) => {
    
  event.preventDefault();
  const address = "/"+event.target.kode_barang.value;
  const formData = {
    kode_barang: event.target.kode_barang.value,
    nama_barang: event.target.nama_barang.value,
    size: event.target.size.value
}
  koneksiKaos_kaki
    .put( address,formData)
    .then((res) => {
      console.log(res);
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
    });
   
}

 const handleEdit = (event) => {
  event.preventDefault();
  var kode_barang = event.target.value;
  
     const mhsEdit = kaos_kaki.filter((kaos_kaki) => {
           return kaos_kaki.kode_barang == kode_barang;
        });
        if(mhsEdit!=null){

          setNama_barang(mhsEdit[0].nama_barang);
          setKode_barang(mhsEdit[0].kode_barang);
          setSize(mhsEdit[0].size);
          setFoto(mhsEdit[0].foto);
        }
}

 const handleDelete = (event) => {
  event.preventDefault();
  var kode_barang = event.target.value;
  koneksiKaos_kaki.delete(`/${kode_barang}`)
    .then(response => {
      console.log('Data berhasil dihapus:', response.data);
      setKaos_kaki(
        kaos_kaki.filter((kaos_kaki) => {
           return kaos_kaki.kode_barang !== kode_barang;
        }))
   
      // Lakukan langkah-langkah lain setelah penghapusan data
    })
    .catch(error => {
      console.error('Gagal menghapus data:', error);
    })
}

  
  useEffect(() => {
      async function getKaos_kaki() {
        const response = await koneksiKaos_kaki.get("/").then(function (axiosResponse) {
            setKaos_kaki(axiosResponse.data.data); 
     
         })
         .catch(function (error) {   
          alert('error from kaos_kaki in api kaos_kaki: '+error);
         });;
          }
      getKaos_kaki();
    }, []);
  
   
if(kaos_kaki==null){
return(
  <div>
    waiting...
  </div>
)
}else{

  return (
   <center><div>
    <div className="bg">
    <br></br><h1 style={{color:"blue"}}>DATA KAOS KAKI</h1><br></br>
       <form id="formadd" onSubmit={handleSubmitAdd} >
       <h3>TAMBAH DATA </h3><br/>
        <table border={0}>
            <tbody>
            <tr>
            <td> <label> Kode_barang:</label></td>
            <td><input type="text" id="kode_barang" name="kode_barang"/>
              
              </td>
        </tr>
        <tr>
            <td>  <label> Nama_barang:</label></td>
            <td><input type="text" id="nama_barang"   name="nama_barang" 
               /></td>
        </tr>
        <tr>
            <td>  <label> Foto:</label></td>
            <td>   <input
                    type="file" name="image"/>  </td>
        </tr>
        <tr>
            <td> <label> Size:</label></td>
            <td><input type="text" id="size" name="size"/>
              
              </td>
        </tr>
            </tbody>
          </table>
          <input type="submit" value="kirim" /><br />
          <br />
          </form>

        <form id="formedit" onSubmit={handleSubmitEdit} style={{marginBottom: "2%"}}><h3>EDIT DATA</h3><br/>
          <table border={0}>
            <tbody>
            <tr>
            <td> <label> Kode Barang:</label></td>
            <td><input type="text" id="kode_barang"  value={statekode_barang} name="kode_barang"/>
              </td>
        </tr>
        <tr>
            <td>  <label> Nama Barang:</label></td>
            <td><input type="text" id="nama_barang"  value={statenama_barang} name="nama_barang"
               onChange={(e) => setNama_barang(e.target.value)}
               /></td>
        </tr>
        <tr>
            <td>  <label> Foto:</label></td>
            <td>  <img src={statefoto} width="80"/> </td>
        </tr>
        <tr>
            <td>  <label> Alamat:</label></td>
            <td><input type="text" id="size" style={{resize: "none"}} value={statesize} name="size"  onChange={(e) => setSize(e.target.value)} /></td>
        </tr>
            </tbody>
          </table><input type="submit" value="kirim" /><br/><br/>
          </form>
          <br />

          <br /> <br /><br /> 
          <div className="contoh" style={{paddingTop: "100px"}}>
        <table border={5}>
            <thead>
                <tr style={{textAlign:"center"}}>
                <td>kode_barang</td> 
                <td>Nama_barang</td>
                <td>Foto</td>
                <td>Size</td>
                <td colSpan={2}><center>Action</center></td>
                </tr>
            </thead>
            <tbody>
            {kaos_kaki.map((kk) => 
                <tr style={{textAlign:"center"}}>
                    <td>{kk.kode_barang}</td>
                    <td>{kk.nama_barang}</td>
                    <td><img src={kk.foto} width="80"/></td>
                    <td>{kk.size}</td>
                    <td><button className="ngedit" onClick={handleEdit} value={kk.kode_barang}>Edit</button></td>
                    <td><button className="ngehapus" onClick={handleDelete} value={kk.kode_barang}>Delete</button></td>
                </tr>
           )}     
                   </tbody>
          </table>
          </div>  
          </div>
          </div></center>
        )
}
  
  }