import Image from "next/image";
import formatPrice from "@/util/priceFormat";
import AddCart from "./AddCart";
import { SearchParamTypes } from "@/types/SearchParamTypes";

export default async function Product({ searchParams }: SearchParamTypes) {
  return (
    <div className="flex justify-center gap-64 p-12 text-gray-700">
      <Image
        src={searchParams.image}
        alt={Product.name}
        width={400}
        height={400}
      ></Image>

      <div className="font-medium text-gray-700 pt-10">
        <h1 className="text-4xl font-medium py-2">{searchParams.name}</h1>
        <p className="text-2xl py-2">{searchParams.description}</p>
        <p className="text-2xl py-2">{searchParams.features}</p>

        <div className="flex">
          <p className="text-2xl font-bold text-teal-700">
            {searchParams.unit_amount && formatPrice(searchParams.unit_amount)}
          </p>
        </div>
        <AddCart {...searchParams} />
      </div>
    </div>
  );
}
