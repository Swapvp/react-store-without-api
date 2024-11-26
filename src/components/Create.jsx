import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { productContext } from "../utils/Context";
import { nanoid } from "nanoid";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

const validationScheme = yup.object({
  image: yup
    .string()
    .url()
    .min(5, "Image URL must be at least 5 characters long")
    .required(),
  title: yup.string().min(4, "must be at least 4 characters long").required(),
  category: yup
    .string()
    .min(4, "must be at least 4 characters long")
    .required(),
  price: yup.number().min(3, "must be at least 3 characters long").required(),
  description: yup
    .string()
    .min(20, "must be at least 4 characters long")
    .required(),
});

const Create = () => {
  const [product, setProduct] = useContext(productContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationScheme),
  });

  const handleSubmitFn = (data) => {
    console.log(data);
    data.id = nanoid();
    setProduct([...product, data]);
    console.log(product);

    reset();
  };

  console.log(product);

  return (
    <>
      <Link
        className="border-2 absolute left-[3%] top-[2%] border-red-300 px-3 py-1 hover:bg-red-300 hover:rounded-lg"
        to={"/"}
      >
        Home
      </Link>
      <form
        onSubmit={handleSubmit(handleSubmitFn)}
        className=" flex flex-col gap-2  p-[10%] items-center w-full h-screen"
      >
        <h1 className="text-4xl font-semibold">Add Product</h1>
        <input type="hidden" {...register("id")} />
        <input
          {...register("image")}
          type="url"
          placeholder="Image url"
          className="bg-zinc-100 py-3 px-4 rounded-lg w-96"
        />
        <p className="text-red-500">{errors.image?.message}</p>
        <input
          {...register("title")}
          type="test"
          placeholder="Title"
          className="bg-zinc-100 py-3 px-4 rounded-lg w-96"
        />
        <p className="text-red-500">{errors.title?.message}</p>

        <input
          {...register("category")}
          type="text"
          placeholder="Category"
          className="bg-zinc-100 py-3 px-4 rounded-lg w-96"
        />
        <p className="text-red-500">{errors.category?.message}</p>

        <input
          {...register("price")}
          type="number"
          placeholder="Price"
          className="bg-zinc-100 py-3 px-4 rounded-lg w-96"
        />
        <p className="text-red-500">{errors.price?.message}</p>

        <textarea
          {...register("description")}
          className="bg-zinc-100 py-3 px-4 rounded-lg w-96"
          cols="50"
          placeholder="Enter description"
        ></textarea>
        <p className="text-red-500">{errors.description?.message}</p>

        <button
          type="submit"
          className="py-2 px-6 border-2 border-green-300 mr-2 mt-4 hover:bg-green-500 font-semibold text-lg rounded-lg hover:text-white"
        >
          add product
        </button>
      </form>
    </>
  );
};

export default Create;
