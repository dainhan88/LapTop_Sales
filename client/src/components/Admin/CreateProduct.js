import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { converCurences } from "../../config";

const CreateProduct = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  // useEffect(() => {
  //   axios.get("/api/products").then((res) => {
  //     setData(res.data);
  //   });
  // }, []);

  const [tenSanPham, settenSanPham] = useState();
  const [maLoaiSanPham, setmaLoaiSanPham] = useState();
  const [soLuong, setsoLuong] = useState();
  const [donGiaSP, setdonGiaSP] = useState();
  const [cpu, setcpu] = useState();
  const [oCUng, setoCUng] = useState();
  const [cardDoHoa, setcardDoHoa] = useState();
  const [donGiaCuSP, setdonGiaCuSP] = useState();
  const [manHinh, setmanHinh] = useState();
  const [audio, setaudio] = useState();
  const [wedCam, setwedCam] = useState();
  const [pin, setpin] = useState();
  const [kichThuoc, setkichThuoc] = useState();
  const [nhuCau, setnhuCau] = useState();
  const [file, setFile] = useState();
  const [reload, setReload] = useState(false);
  const { register } = useForm();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("tenSanPham", tenSanPham);
    formData.append("maLoaiSanPham", maLoaiSanPham);
    formData.append("soLuong", soLuong);
    formData.append("donGiaSP", donGiaSP);
    formData.append("donGiaCuSP", donGiaCuSP);
    formData.append("cpu", cpu);
    formData.append("oCUng", oCUng);
    formData.append("cardDoHoa", cardDoHoa);
    formData.append("manHinh", manHinh);
    formData.append("audio", audio);
    formData.append("wedCam", wedCam);
    formData.append("pin", pin);
    formData.append("kichThuoc", kichThuoc);
    formData.append("nhuCau", nhuCau);
    formData.append("hinhanh", file);
    console.log(donGiaSP);
    axios.post("/api/products", formData).then((response) => {
      console.log(response);
      setReload(!reload);
    });
  };
  useEffect(() => {
    axios.get("/api/producers").then((res) => {
      // console.log(res.data);
      setData(res.data);
    });
  }, []);

  const handleSetFile = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <div className="page-container my-9 text-center ">
      <form onSubmit={handleFormSubmit} encType="multipart/form-data">
        <div className=" text-center text-[17px] mb-10 font-bold text-red-400 ">
          <select
            className=""
            name="nhuCau"
            onChange={(e) => {
              setnhuCau(e.target.value);
            }}
          >
            <option value="">Ch???n ?????i T?????ng Ng?????i Mua </option>
            <option>LapTop V??n Ph??ng</option>
            <option>LapTop Gaming</option>
            <option>LapTop ????? Ho???</option>
            <option>LapTop M???ng Nh???</option>
          </select>
        </div>
        <div className=" text-center text-[17px] mb-10 font-bold text-red-400 ">
          <select
            className=""
            name="maLoaiSanPham"
            onChange={(e) => {
              setmaLoaiSanPham(e.target.value);
            }}
          >
            <option value="">Ch???n H??ng S???n Xu???t</option>
            {data &&
              data.length > 0 &&
              data.map((item) => {
                return (
                  <option value={item.tenNSX} key={item._id}>
                    {item.tenNSX}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="text-left flex gap-x-64 mx-24">
          <div>
            <div className="flex ">
              <p className="w-36 my-5 ">T??n S???n Ph???m :</p>
              <input
                type="text"
                name="tenSanPham"
                placeholder="Nh???p T??n S???n Ph???m"
                onChange={(e) => {
                  settenSanPham(e.target.value);
                }}
                className="py-3 px-12 border boder-gray-300 rounded-lg mx-2 my-2"
              />
            </div>

            <div className="flex">
              <p className="w-36 my-5">Nh???p S??? L?????ng :</p>
              <input
                type="text"
                name="soLuong"
                placeholder="Nh???p S??? L?????ng S???n Ph???m"
                onChange={(e) => {
                  setsoLuong(e.target.value);
                }}
                className="py-3 px-12 border boder-gray-300 rounded-lg mx-2 my-2"
              />
            </div>
            <div className="flex">
              <p className="w-36 my-5">????n Gi?? S???n Ph???m :</p>
              <input
                type="text"
                name="donGiaSP"
                placeholder="Nh???p ????n Gi?? S???n Ph???m"
                onChange={(e) => {
                  setdonGiaSP(e.target.value);
                }}
                className="py-3 px-12 border boder-gray-300 rounded-lg mx-2 my-2"
              />
              <br />
            </div>
            <div className="flex">
              <p className="w-36 my-5">Gi?? C?? :</p>
              <input
                type="text"
                name="donGiaCuSP"
                placeholder="Nh???p Gi?? C?? S???n Ph???m"
                onChange={(e) => {
                  setdonGiaCuSP(e.target.value);
                }}
                className="py-3 px-12 border boder-gray-300 rounded-lg mx-2 my-2"
              />
              <br />
            </div>

            <div className="flex">
              <p className="w-36 my-5">Th??ng s??? CPU :</p>
              <input
                type="text"
                name="cpu"
                placeholder="Nh???p Th??ng S??? CPU"
                className="py-3  border boder-gray-300 rounded-lg px-12 mx-2    my-2"
                onChange={(e) => {
                  setcpu(e.target.value);
                }}
              />
            </div>
            <div className="flex">
              <p className="w-36 my-5">??? C???ng :</p>
              <input
                type="text"
                name="oCUng"
                placeholder="Nh???p Th??ng S??? ??? C???ng"
                className="py-3   border boder-gray-300 rounded-lg px-12  mx-2  my-2"
                onChange={(e) => {
                  setoCUng(e.target.value);
                }}
              />
            </div>
          </div>
          <div>
            <div className="flex">
              <p className="w-36 my-5">Card ????? Ho???i :</p>
              <input
                type="text"
                name="cardDoHoa"
                placeholder="Nh???p Th??ng S??? Card ????? H???a"
                className="py-3  border boder-gray-300 rounded-lg px-12 mx-2   my-2"
                onChange={(e) => {
                  setcardDoHoa(e.target.value);
                }}
              />
            </div>
            <div className="flex">
              <p className="w-36 my-5">M??n H??nh :</p>
              <input
                type="text"
                name="manHinh"
                placeholder="Nh???p Th??ng S??? M??n H??nh"
                className="py-3  border boder-gray-300 rounded-lg px-12 mx-2   my-2"
                onChange={(e) => {
                  setmanHinh(e.target.value);
                }}
              />
            </div>
            <div className="flex">
              <p className="w-36 my-5">Th??ng S??? Audio :</p>
              <input
                type="text"
                name="audio"
                placeholder="Nh???p Th??ng S??? Audio"
                className="py-3  border boder-gray-300 rounded-lg  px-12  mx-2  my-2"
                onChange={(e) => {
                  setaudio(e.target.value);
                }}
              />
            </div>
            <div className="flex">
              <p className="w-36 my-5">K??ch Th?????c :</p>
              <input
                type="text"
                name="kichThuoc"
                placeholder="Nh???p Th??ng S??? K??ch Th?????c"
                className="py-3  border boder-gray-300 rounded-lg px-12 mx-2   my-2"
                onChange={(e) => {
                  setkichThuoc(e.target.value);
                }}
              />
            </div>
            <div className="flex">
              <p className="w-36 my-5">Th??ng S??? Pin :</p>
              <input
                type="text"
                name="pin"
                placeholder="Nh???p Th??ng S??? Pin"
                className="py-3  border boder-gray-300 rounded-lg px-12 mx-2   my-2"
                onChange={(e) => {
                  setpin(e.target.value);
                }}
              />
            </div>
            <div className="flex">
              <p className="w-36 my-5">Th??ng S??? WedCam :</p>
              <input
                type="text"
                name="wedCam"
                placeholder="Nh???p Th??ng S??? WedCam"
                className="py-3  border boder-gray-300 rounded-lg px-12 mx-2   my-2"
                onChange={(e) => {
                  setwedCam(e.target.value);
                }}
              />
            </div>
          </div>
        </div>

        {/* <div className="flex justify-center">
          <p className="w-36 my-5">?????i T?????ng :</p>
          <input
            type="text"
            name="nhuCau"
            placeholder="Nh???p Th??ng Tin Nhu C???u H?????ng ?????n"
            className="py-3  border boder-gray-300 rounded-lg px-12 mx-2   my-2"
            onChange={(e) => {
              setnhuCau(e.target.value);
            }}
          />
        </div> */}
        <div className="">
          <input type="file" name="hinhanh" onChange={handleSetFile} />
          <button
            type="submit"
            className="h-10 px-6 font-semibold rounded-md bg-cyan-600 text-white  hover:bg-cyan-900"
          >
            Th??m S???n Ph???m
          </button>
        </div>
      </form>
      <br />
    </div>
  );
};

export default CreateProduct;
