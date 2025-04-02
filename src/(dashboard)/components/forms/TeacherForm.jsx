import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../InputFields";
import { teacherSchema } from "../../formValidationSchema";
import { useNavigate } from "react-router-dom";
import { createTeacher, UpdateTeacher } from "../../action";
import { toast } from "react-toastify";

export default function TeacherForm({ type, data, setopen, relatedData }) {
  const [state, setState] = useState({
    success: false,
    error: false,
  });
  const [image, setImage] = useState();
  const [error, setError] = useState({
    imageErr: "",
    phoneErr: "",
    emailErr: "",
  });
  useEffect(() => {
    if (state.success === true) {
      toast.success(
        `teacher has been ${type === "create" ? "created" : "updated"}`,
        {
          autoClose: 3000,
          onClose: () => {
            navigate(0);
          },
        }
      );
      setopen(false);
    }
  }, [state]);
  const { imageErr, phoneErr, emailErr } = error;
  const handleImageUrlChange = (e) => {
    let image = e.target.files[0];
    if (
      image.type === "image/jpeg" ||
      image.type === "image/jpg" ||
      image.type === "image/png"
    ) {
      if (image.size >= 3 * 1024 * 1024) {
        setError((prev) => ({ ...prev, imageErr: "Image size is too large" }));
      } else {
        setImage(image);
        setError((prev) => ({ ...prev, imageErr: "" }));
      }
    } else {
      setError((prev) => ({ ...prev, imageErr: "File tpe not supported" }));
    }
  };
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(teacherSchema),
  });
  const onsubmit = handleSubmit((data) => {
    if (type === "create") {
      createTeacher(data, setState, state, image, setError);
    } else {
      UpdateTeacher(data, setState, setError, setopen);
    }
  });
  return (
    <>
      <form className="flex flex-col gap-5" onSubmit={onsubmit}>
        <h1 className="text-xl font-semibold">
          {type === "create" ? "Create a new teacher" : "Update the teacher"}
        </h1>
        <span className="text-xs text-gray-400 font-medium">
          Personal Information
        </span>
        <div className="flex justify-between flex-wrap gap-3">
          {data && (
            <InputField
              label="id"
              name="id"
              type="number"
              hidden
              defaultValue={data?.id}
              register={register}
            />
          )}
          <InputField
            label="Email"
            name="email"
            defaultValue={data?.email}
            register={register}
            error={errors?.email}
            serverErr={emailErr}
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            defaultValue={data?.password}
            register={register}
            error={errors?.password}
          />

          <InputField
            label="Firstname"
            name="firstname"
            defaultValue={data?.firstname}
            register={register}
            error={errors.firstname}
          />
          <InputField
            label="Lastname"
            name="lastname"
            defaultValue={data?.lastname}
            register={register}
            error={errors.lastname}
          />

          <InputField
            label="Phone"
            name="phone"
            defaultValue={data?.phone}
            serverErr={phoneErr}
            register={register}
            error={errors.phone}
          />
          <InputField
            label="Address"
            name="address"
            defaultValue={data?.address}
            register={register}
            error={errors.address}
          />
          <InputField
            label="Blood Type"
            name="bloodType"
            defaultValue={data?.blood_type}
            register={register}
            error={errors.bloodType}
          />
          <InputField
            label="Birthday"
            name="dob"
            defaultValue={data?.dob}
            register={register}
            error={errors.dob}
            type="date"
          />
          <div className="flex flex-col gap-2 w-full md:w-1/4">
            <label className="text-xs text-gray-500">Sex</label>
            <select
              className="ring-[1.5px] ring-gray-300 p-1 rounded-md text-sm w-full"
              {...register("sex")}
              defaultValue={data?.sex}
            >
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
            </select>
            {errors.sex?.message && (
              <p className="text-xs text-red-400">
                {errors.sex.message.toString()}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2 w-full md:w-1/4">
            <label className="text-xs text-gray-500">Subjects</label>
            <select
              multiple
              className="ring-[1.5px] ring-gray-300 p-1 rounded-md text-sm w-full"
              {...register("subjects")}
              defaultValue={data?.subjects}
            >
              {relatedData.map((subject, i) => (
                <option value={subject.id} key={i}>
                  {subject.name}
                </option>
              ))}
            </select>
            {errors.subjects?.message && (
              <p className="text-xs text-red">
                {errors.subjects.message.toString()}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
            <p className="text-xs text-red">{imageErr}</p>
            <label
              className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
              htmlFor="img"
            >
              <img
                src="https://media.istockphoto.com/id/1222357475/vector/image-preview-icon-picture-placeholder-for-website-or-ui-ux-design-vector-illustration.jpg?s=612x612&w=0&k=20&c=KuCo-dRBYV7nz2gbk4J9w1WtTAgpTdznHu55W9FjimE="
                alt=""
                width={28}
                height={28}
              />
              <span>Upload a photo</span>
            </label>
            <input
              type="file"
              onChange={handleImageUrlChange}
              className="hidden"
            />
          </div>
        </div>
        <button type="submit" className="bg-blue-400 text-white p-2 rounded-md">
          {type === "create" ? "Create" : "Update"}
        </button>
      </form>
    </>
  );
}
