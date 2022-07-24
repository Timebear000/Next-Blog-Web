import React from "react";
import Image from "next/image";
const CustomError = () => {
  return (
    <div className="text-center py-10">
      <h1 className="text-3xl font-bold text-orange-600 py-10">Someting Went Wrong</h1>
      <Image src={"/images/not_found.png"} width={400} height={400} alt="에러 이미지"></Image>
    </div>
  );
};

export default CustomError;
