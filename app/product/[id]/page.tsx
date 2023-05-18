import Image from "next/image";
import formatPrice from "@/util/priceFormat";
import AddCart from "./AddCart";
import { SearchParamTypes } from "@/types/SearchParamTypes";

export default async function Product({ searchParams }: SearchParamTypes) {
  return (
    <div className="flex flex-col 2xl:flex-row items-center gap-9 2xl:gap-36 2xl:pb-16 text-gray-700">
      <Image
      className="w-3/4 h-70 object-cover"
        src={searchParams.image}
        alt={Product.name}
        width={400}
        height={400}
      ></Image>

      <div className="text-gray-700 px-4 md:flex md:flex-col lg:flex-auto md:items-center">
        <h1 className="text-2xl py-2 md:pb-4 md:text-3xl lg:text-4xl font-medium">{searchParams.name}</h1>
        <p className="lg:text-lg py-2 md:w-1/2 2xl:pl-4 ">{searchParams.description}</p>

        <div className="flex flex-row items-start gap-6 pt-6 pb-10 2xl:pl-4">
          <p className="text-2xl font-bold text-teal-700">
            {searchParams.unit_amount && formatPrice(searchParams.unit_amount)}
          </p>
          <AddCart {...searchParams} />
        </div>
      </div>
    </div>
  );
}
