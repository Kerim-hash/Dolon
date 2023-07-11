import { review1, review2, review3 } from "@/assets";
import ReviewCard from "@/components/reviewCard";
import React from "react";

const Reviews = ({t}) => {
  return (
    <div id={"Reviews"} className="container pt-[180px]">
      <h1 className="text-black font-bold text-[32px] text-center mb-[40px]">
        {t("reviews:title")}
      </h1>
      <div className="flex items-center justify-between  max-[600px]:flex-col max-[1200px]:overflow-x-scroll max-[1450px]:gap-[30px]">
        <ReviewCard
          img={review1}
          companyName={t("reviews:card1-companyName")}
          name={t("reviews:card1-name")}
          position={t("reviews:card1-position")}
          review={t("reviews:card1-review")}
          t={t}
        />
        <ReviewCard
          img={review2}
          companyName={t("reviews:card2-companyName")}
          name={t("reviews:card2-name")}
          position={t("reviews:card2-position")}
          review={t("reviews:card2-review")}
          t={t}
        />
        <ReviewCard
          img={review3}
          companyName={t("reviews:card3-companyName")}
          name={t("reviews:card3-name")}
          position={t("reviews:card3-position")}
          review={t("reviews:card3-review")}
          t={t}
        />
      </div>
    </div>
  );
};

export default Reviews;
