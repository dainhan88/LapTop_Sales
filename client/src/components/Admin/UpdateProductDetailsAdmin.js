import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const UpdateProductDetailsAdmin = () => {
  const [dataSubmit, setDataSubmit] = useState();
  const [data, setData] = useState([]);
  const [label, setLabel] = useState();
  const [dataCate, setDataCate] = useState();
  const navigate = useNavigate();
  const { sanphamid } = useParams();
  useEffect(() => {
    axios.get("/api/products").then((res) => {
      // console.log(res.data);
      setDataCate(res.data);
    });
  }, []);
  useEffect(() => {
    axios.get(`/api/productDetails/getDetail/${sanphamid}`).then((res) => {
      setData(res.data);
      setLabel(res.data.idSanPham);
      setDataSubmit(res.data);
    });
  }, [sanphamid]);
  const [file, setFile] = useState();
  const { handleSubmit, register } = useForm();
  const handleChangeCate = (e) => {
    setLabel(e.target.value);
  };
  const handleOnSubmit = (data) => {
    console.log(dataSubmit);
    // const formData = new FormData();
    // if (!file) {
    //   formData.append("idSanPham", label);
    //   formData.append("mauSac", data.idSanPham);
    //   formData.append("ram", data.ram);
    //   formData.append("donGia", data.donGia);
    //   formData.append("giaCu", data.giaCu);
    //   formData.append("soLuong", data.soLuong);
    // } else {
    //   formData.append("idSanPham", label);
    //   formData.append("mauSac", data.idSanPham);
    //   formData.append("ram", data.ram);
    //   formData.append("donGia", data.donGia);
    //   formData.append("giaCu", data.giaCu);
    //   formData.append("soLuong", data.soLuong);
    // }
    axios
      .put(`/api/productDetails/updateDetail/${sanphamid}`, dataSubmit)
      .then((res) => {
        console.log(res.data);
      });
  };
  const handleChangeData = (e) => {
    setDataSubmit((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <h1>Ch???nh S???a Chi Ti???t S???n Ph???m</h1>{" "}
      {data && (
        <div className=" flex justify-center page-container my-9">
          <form
            encType="multipart/form-data"
            onSubmit={handleSubmit(handleOnSubmit)}
          >
            <div className="text-center bg-slate-400 text-[17px] mb-10 font-bold text-red-400 ">
              <select
                // {...register("tenSanPham")}
                value={label}
                onChange={handleChangeCate}
              >
                {dataCate &&
                  dataCate.length > 0 &&
                  dataCate.map((item) => {
                    return (
                      <option value={item.tenSanPham} key={item._id}>
                        {item.tenSanPham}
                        {item.maLoaiSanPham}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className="flex  gap-x-44 ">
              <div>
                <div className="flex">
                  <p className="w-36 my-5">Nh???p M??u S???c :</p>
                  <input
                    type="text"
                    name="mauSac"
                    placeholder="Nh???p M??u S???c S???n Ph???m"
                    defaultValue={data.mauSac}
                    {...register("mauSac")}
                    onChange={handleChangeData}
                    className="py-3 px-12 border boder-gray-300 rounded-lg mx-2 my-2"
                  />
                </div>

                <div className="flex">
                  <p className="w-36 my-5">Nh???p Ram :</p>
                  <input
                    type="text"
                    name="ram"
                    placeholder="Nh???p Ram S???n Ph???m"
                    defaultValue={data.ram}
                    {...register("ram")}
                    onChange={handleChangeData}
                    className="py-3 px-12 border boder-gray-300 rounded-lg mx-2 my-2"
                  />
                </div>

                <div className="flex">
                  <p className="w-36 my-5">S??? L?????ng :</p>
                  <input
                    type="text"
                    name="soLuong"
                    placeholder="Nh???p S??? L?????ng S???n Ph???m"
                    defaultValue={data.ram}
                    onChange={handleChangeData}
                    className="py-3  border boder-gray-300 rounded-lg px-12   my-2"
                    {...register("soLuong")}
                  />
                </div>
                <div>
                  <div className="flex">
                    <p className="w-36 my-5">????n Gi?? :</p>
                    <input
                      type="text"
                      name="donGia"
                      placeholder="Nh???p ????n Gi?? S???n Ph???m"
                      className="py-3  border boder-gray-300 rounded-lg px-12   my-2"
                      defaultValue={data.donGia}
                      {...register("donGia")}
                      onChange={handleChangeData}
                      required
                    />
                  </div>
                  <div className="flex">
                    <p className="w-36 my-5"> Gi?? c??:</p>
                    <input
                      type="text"
                      name="giaCu"
                      placeholder="Gi?? c??"
                      defaultValue={data.giaCu}
                      onChange={handleChangeData}
                      className="py-3  border boder-gray-300 rounded-lg px-12   my-2"
                      {...register("giaCu")}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="h-10 mt-10 px-6 font-semibold rounded-md bg-cyan-600 text-white  hover:bg-cyan-900"
            >
              Th??m Chi Ti???t S???n Ph???m
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default UpdateProductDetailsAdmin;
