import Image from "next/image";
import formatPrice from "@/util/priceFormat";
import AddCart from "./AddCart";
import { SearchParamTypes } from "@/types/SearchParamTypes";

export default async function Product({ searchParams }: SearchParamTypes) {
  return (
    <div className="flex flex-col items-center gap-8 p-8 md:flex-row md:justify-between md:gap-32 md:p-12 lg:gap-60 text-gray-700">
      <Image
      className="w-3/4 h-70 object-cover"
        src={searchParams.image}
        alt={Product.name}
        width={400}
        height={400}
      ></Image>

      <div className="font-medium text-gray-700">
        <h1 className="text-2xl g md:text-3xl lg:text-4xl font-medium py-2">{searchParams.name}</h1>
        <p className="md:text-2xl py-2">{searchParams.description}</p>

        <div className="flex flex-row justify-between pt-4 md:flex-col">
          <p className="text-2xl font-bold text-teal-700">
            {searchParams.unit_amount && formatPrice(searchParams.unit_amount)}
          </p>
          <AddCart {...searchParams} />
        </div>
      </div>
    </div>
  );
}
