import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  DetailCardContainerS,
  DetailsContainerS,
  DetailsGeneral,
  DetailsGeneralSpanContainer,
} from "../components/styles/ContainerS";
import { DetailsCardImg, FlagImg } from "../components/styles/ImageS";
import { GoBackBtn } from "../components/styles/ButtonS";
import { Globe, GlobeHemisphereWest } from "@phosphor-icons/react";
import EU from "../assets/europe-flag-icon.png";
import { IngredientsOl, NutritionsUl } from "../components/styles/ListS";
import { MoreHyperLinkS } from "../components/styles/HyperLinkS";
import {
  CousineSpan,
  CousineSpanValue,
  NutrientsLabelSpan,
} from "../components/styles/SpanS";
import {
  DetailsCardLabel,
  DetailsInfoTitleH3,
  MealTypeP,
} from "../components/styles/HeaderS";
import imgNotFound from "../assets/img-not-found.jpg";

const Details = () => {
  const {
    state: { recipe },
  } = useLocation();
  const navigate = useNavigate();

  const [countryCode, setCountryCode] = useState(null);

  const {
    label,
    calories,
    image,
    ingredients,
    totalNutrients,
    mealType,
    cuisineType,
    url,
  } = recipe;

  const { ENERGY_CAL, FAT, CHOCDF, PROCNT, CHOLE, SUGAR } = totalNutrients;

  const formatMealType = (mealType) => {
    if (!Array.isArray(mealType)) {
      return mealType.charAt(0).toUpperCase() + mealType.slice(1);
    }

    return mealType
      .map((type) => type.charAt(0).toUpperCase() + type.slice(1))
      .join(", ");
  };

  const getCountryCode = (cuisineType) => {
    const cuisineMap = {
      turkish: "TR",
      kosher: "IL",
      british: "GB",
      american: "US",
      french: "FR",
      italian: "IT",
      chinese: "CN",
      greek: "GR",
      indian: "IN",
      japanese: "JP",
      korean: "KR",
      mexican: "MX",
      nordic: "NO",
      mediterranean: "TR",
      "middle eastern": "TR",
      europe: "EU",
      world: "Globe",
    };

    return cuisineMap[cuisineType.toLowerCase()] || "world";
  };

  useEffect(() => {
    const fetchCountryCode = async () => {
      const code = getCountryCode(cuisineType[0]);
      setCountryCode(code);
    };
    fetchCountryCode();
  }, [cuisineType]);

  return (
    <DetailsContainerS>
      <DetailCardContainerS>
        <DetailsGeneral>
          <DetailsCardLabel>{label}</DetailsCardLabel>

          {countryCode && (
            <DetailsGeneralSpanContainer>
              <CousineSpan>
                Couisine :{" "}
                <CousineSpanValue>
                  {cuisineType.toString() === "mediterranean" ||
                  cuisineType.toString() === "middle eastern"
                    ? "Turkish"
                    : cuisineType.toString().charAt(0).toUpperCase() +
                      cuisineType.toString().slice(1).toLowerCase()}
                </CousineSpanValue>
              </CousineSpan>
              <div>
                {countryCode === "Globe" ? (
                  <Globe size={45} color="#3f74ca" weight="light" />
                ) : countryCode === "world" ? (
                  <GlobeHemisphereWest size={32} color="#3f74ca" />
                ) : (
                  <FlagImg
                    src={
                      countryCode === "EU"
                        ? EU
                        : `https://flagsapi.com/${countryCode}/flat/32.png`
                    }
                    alt="Flag"
                  />
                )}
              </div>
            </DetailsGeneralSpanContainer>
          )}
          <MealTypeP>
            Meal Type :{" "}
            <CousineSpanValue>{formatMealType(mealType)}</CousineSpanValue>
          </MealTypeP>
          <DetailsCardImg src={image || imgNotFound} alt={`${label}-img`} />
          <div>
            <GoBackBtn onClick={() => navigate(-1)}>Go Back</GoBackBtn>
            <MoreHyperLinkS href={`${url}`} target="blank">
              More...
            </MoreHyperLinkS>
          </div>
        </DetailsGeneral>
        <div>
          <div>
            <DetailsInfoTitleH3>NUTRIENTS</DetailsInfoTitleH3>
            <NutritionsUl>
              <li>
                <NutrientsLabelSpan>
                  {calories && `Calories : `}
                </NutrientsLabelSpan>
                <span>{calories && `${Math.trunc(calories)}cal`}</span>
              </li>
              <li>
                <NutrientsLabelSpan>{FAT?.label}</NutrientsLabelSpan>{" "}
                {FAT ? ":" : ""}{" "}
                <span>
                  {Math.trunc(FAT?.quantity)}
                  {FAT?.unit}
                </span>
              </li>
              <li>
                <NutrientsLabelSpan>{CHOCDF?.label}</NutrientsLabelSpan>{" "}
                {CHOCDF ? ":" : ""}{" "}
                <span>
                  {Math.trunc(CHOCDF?.quantity)}
                  {CHOCDF?.unit}
                </span>
              </li>
              <li>
                <NutrientsLabelSpan>{PROCNT?.label}</NutrientsLabelSpan>{" "}
                {PROCNT ? ":" : ""}{" "}
                <span>
                  {Math.trunc(PROCNT?.quantity)}
                  {PROCNT?.unit}
                </span>
              </li>
              <li>
                <NutrientsLabelSpan>{CHOLE?.label}</NutrientsLabelSpan>{" "}
                {CHOLE ? ":" : ""}{" "}
                <span>
                  {Math.trunc(CHOLE?.quantity)}
                  {CHOLE?.unit}
                </span>
              </li>
              <li>
                <NutrientsLabelSpan>{SUGAR?.label}</NutrientsLabelSpan>{" "}
                {SUGAR ? ":" : ""}{" "}
                <span>
                  {Math.trunc(SUGAR?.quantity)}
                  {SUGAR?.unit}
                </span>
              </li>
            </NutritionsUl>
          </div>
          <div>
            <DetailsInfoTitleH3>INGREDIENTS</DetailsInfoTitleH3>
            <IngredientsOl>
              {ingredients.map((ingredient, index) => (
                <li style={{ marginLeft: "1rem" }} key={index}>
                  {ingredient.text}
                </li>
              ))}
            </IngredientsOl>
          </div>
        </div>
      </DetailCardContainerS>
    </DetailsContainerS>
  );
};

export default Details;
