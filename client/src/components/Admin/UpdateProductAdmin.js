import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProductAdmin = () => {
  const [data, setData] = useState();
  const [label, setLabel] = useState();
  const [dataCate, setDataCate] = useState();
  const { sanphamid } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`/api/products/${sanphamid}`).then((res) => {
      setData(res.data);
      setLabel(res.data.maLoaiSanPham);
    });
    axios.get("/api/producers").then((res) => {
      setDataCate(res.data);
    });
  }, [sanphamid]);

  const [file, setFile] = useState();
  const { register, handleSubmit } = useForm();

  const handleOnSubmit = (data) => {
    const formData = new FormData();
    if (!file) {
      formData.append("tenSanPham", data.tenSanPham);
      formData.append("maLoaiSanPham", label);
      formData.append("soLuong", data.soLuong);
      formData.append("donGiaSP", data.donGiaSP);
      formData.append("donGiaCuSP", data.donGiaCuSP);
      formData.append("cpu", data.cpu);
      formData.append("oCUng", data.oCUng);
      formData.append("cardDoHoa", data.cardDoHoa);
      formData.append("manHinh", data.manHinh);
      formData.append("audio", data.audio);
      formData.append("wedCam", data.wedCam);
      formData.append("pin", data.pin);
      formData.append("kichThuoc", data.kichThuoc);
      formData.append("nhuCau", data.nhuCau);
    } else {
      formData.append("tenSanPham", data.tenSanPham);
      formData.append("maLoaiSanPham", label);
      formData.append("soLuong", data.soLuong);
      formData.append("donGiaCuSP", data.donGiaCuSP);
      formData.append("cpu", data.cpu);
      formData.append("oCUng", data.oCUng);
      formData.append("cardDoHoa", data.cardDoHoa);
      formData.append("manHinh", data.manHinh);
      formData.append("audio", data.audio);
      formData.append("wedCam", data.wedCam);
      formData.append("pin", data.pin);
      formData.append("kichThuoc", data.kichThuoc);
      formData.append("nhuCau", data.nhuCau);
      formData.append("hinhanh", file);
    }

    console.log(data);
    axios.put(`/api/products/${sanphamid}`, formData).then((response) => {
      console.log(response);
      // setReload(!reload);
    });
  };
  const handleSetFile = (e) => {
    setFile(e.target.files[0]);
  };
  const handleChangeCate = (e) => {
    setLabel(e.target.value);
  };
  console.log(data);
  return (
    <>
      {data && (
        <div className="page-container my-9 text-center ">
          <form
            onSubmit={handleSubmit(handleOnSubmit)}
            encType="multipart/form-data"
          >
            <div className=" text-center text-[17px] mb-10 font-bold text-red-400 ">
              <select className="" name="nhuCau" {...register("nhuCau")}>
                <option value={data.nhuCau}>{data.nhuCau}</option>
                <option value={"LapTop V??n Ph??ng"}>LapTop V??n Ph??ng</option>
                <option value={"LapTop Gaming"}>LapTop Gaming</option>
                <option value={"LapTop ????? Ho???"}>LapTop ????? Ho???</option>
                <option value={"LapTop M???ng Nh???"}>LapTop M???ng Nh???</option>
              </select>
            </div>

            <div className="text-left flex gap-x-64 mx-24">
              <div>
                <div className="flex ">
                  <p className="w-36 my-5 ">T??n S???n Ph???m :</p>
                  <input
                    type="text"
                    id="tenSanPham"
                    defaultValue={data.tenSanPham}
                    {...register("tenSanPham")}
                    placeholder="T??n s???n ph???m"
                    className="py-3 px-12 border boder-gray-300 rounded-lg mx-2 my-2"
                  />
                </div>
                {/* <div className="flex">
                  <p className="w-36 my-5">Th????ng Hi???u :</p>
                  <input
                    type="text"
                    name="maLoaiSanPham"
                    placeholder="Nh???p H??ng S???n Ph???m"
                    defaultValue={data.maLoaiSanPham}
                    {...register("maLoaiSanPham")}
                    className="py-3 px-12 border boder-gray-300 rounded-lg mx-2 my-2"
                  />
                </div> */}
                <div className="flex">
                  <p className="w-36 my-5">Th????ng Hi???u :</p>
                  <select
                    // {...register("maLoaiSanPham")}
                    value={label}
                    onChange={handleChangeCate}
                  >
                    {dataCate &&
                      dataCate.length > 0 &&
                      dataCate.map((item) => {
                        return (
                          <option value={item.tenNSX} key={item._id}>
                            {item.tenNSX}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="flex">
                  <p className="w-36 my-5">Nh???p S??? L?????ng :</p>
                  <input
                    type="text"
                    name="soLuong"
                    placeholder="Nh???p S??? L?????ng S???n Ph???m"
                    defaultValue={data.soLuong}
                    {...register("soLuong")}
                    className="py-3 px-12 border boder-gray-300 rounded-lg mx-2 my-2"
                  />
                </div>
                <div className="flex">
                  <p className="w-36 my-5">????n Gi?? S???n Ph???m :</p>
                  <input
                    type="text"
                    name="donGiaSP"
                    placeholder="Nh???p ????n Gi?? S???n Ph???m"
                    defaultValue={data.donGiaSP}
                    {...register("donGiaSP")}
                    className="py-3 px-12 border boder-gray-300 rounded-lg mx-2 my-2"
                  />
                  <br />
                </div>
                <div className="flex">
                  <p className="w-36 my-5">????n Gi?? S???n Ph???m :</p>
                  <input
                    type="text"
                    name="donGiaCuSP"
                    placeholder="Nh???p Gi?? C?? S???n Ph???m"
                    defaultValue={data.donGiaCuSP}
                    {...register("donGiaCuSP")}
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
                    defaultValue={data.cpu}
                    className="py-3  border boder-gray-300 rounded-lg px-12 mx-2    my-2"
                    {...register("cpu")}
                  />
                </div>
                <div className="flex">
                  <p className="w-36 my-5">??? C???ng :</p>
                  <input
                    type="text"
                    name="oCUng"
                    placeholder="Nh???p Th??ng S??? ??? C???ng"
                    defaultValue={data.oCUng}
                    className="py-3   border boder-gray-300 rounded-lg px-12  mx-2  my-2"
                    {...register("oCUng")}
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
                    defaultValue={data.cardDoHoa}
                    className="py-3  border boder-gray-300 rounded-lg px-12 mx-2   my-2"
                    {...register("cardDoHoa")}
                  />
                </div>
                <div className="flex">
                  <p className="w-36 my-5">M??n H??nh :</p>
                  <input
                    type="text"
                    name="manHinh"
                    placeholder="Nh???p Th??ng S??? M??n H??nh"
                    defaultValue={data.manHinh}
                    className="py-3  border boder-gray-300 rounded-lg px-12 mx-2   my-2"
                    {...register("manHinh")}
                  />
                </div>
                <div className="flex">
                  <p className="w-36 my-5">Th??ng S??? Audio :</p>
                  <input
                    type="text"
                    name="audio"
                    placeholder="Nh???p Th??ng S??? Audio"
                    defaultValue={data.audio}
                    className="py-3  border boder-gray-300 rounded-lg  px-12  mx-2  my-2"
                    {...register("audio")}
                  />
                </div>
                <div className="flex">
                  <p className="w-36 my-5">K??ch Th?????c :</p>
                  <input
                    type="text"
                    name="kichThuoc"
                    placeholder="Nh???p Th??ng S??? K??ch Th?????c"
                    defaultValue={data.kichThuoc}
                    className="py-3  border boder-gray-300 rounded-lg px-12 mx-2   my-2"
                    {...register("kichThuoc")}
                  />
                </div>
                <div className="flex">
                  <p className="w-36 my-5">Th??ng S??? Pin :</p>
                  <input
                    type="text"
                    name="pin"
                    placeholder="Nh???p Th??ng S??? Pin"
                    defaultValue={data.pin}
                    className="py-3  border boder-gray-300 rounded-lg px-12 mx-2   my-2"
                    {...register("pin")}
                  />
                </div>
                <div className="flex">
                  <p className="w-36 my-5">Th??ng S??? WedCam :</p>
                  <input
                    type="text"
                    name="wedCam"
                    placeholder="Nh???p Th??ng S??? WedCam"
                    defaultValue={data.wedCam}
                    className="py-3  border boder-gray-300 rounded-lg px-12 mx-2   my-2"
                    {...register("wedCam")}
                  />
                </div>
              </div>
            </div>
            <div>
              <img
                src={`/images/${data.hinhanh}`}
                alt=""
                className="w-[150px] h-[150px]"
              />
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
            </div>
            <button
              type="submit"
              className="h-10 px-6 font-semibold rounded-md bg-cyan-600 text-white  hover:bg-cyan-900"
            >
              Th??m S???n Ph???m
            </button>
          </form>
          <br />
        </div>
      )}
    </>
  );
};

export default UpdateProductAdmin;
