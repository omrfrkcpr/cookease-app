import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  DetailCardContainerS,
  DetailsContainerS,
} from "../components/styles/ContainerS";
import { DetailsCardImg } from "../components/styles/ImageS";
import { GoBackBtn } from "../components/styles/ButtonS";
import styled from "styled-components";
import { Globe, GlobeHemisphereWest } from "@phosphor-icons/react";
import EU from "../assets/europe-flag-icon.png";

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

  const MoreAnchorS = styled.a`
    border: none;
    width: 120px;
    margin: auto;
    padding: 0.3rem 1rem;
    font-size: 1.2rem;
    border-radius: 12px;
    font-weight: bolder;
    background-color: #f7c006;
    color: brown;
    &:hover {
      color: #f7c006;
      background-color: brown;
      transition-duration: 0.5s;
    }
  `;

  const NutritionsUl = styled.ul`
    list-style-type: none;
    text-align: left;
  `;

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
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h3>{label}</h3>

          {countryCode && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItem: "center",
                gap: ".5rem",
              }}
            >
              <span
                style={{
                  fontSize: "1.5rem",
                  marginTop: ".3rem",
                }}
              >
                Couisine :{" "}
                <span style={{ color: "indianred", fontWeight: "bolder" }}>
                  {cuisineType.toString() === "mediterranean" ||
                  cuisineType.toString() === "middle eastern"
                    ? "Turkish"
                    : cuisineType.toString().charAt(0).toUpperCase() +
                      cuisineType.toString().slice(1).toLowerCase()}
                </span>
              </span>
              <div>
                {countryCode === "Globe" ? (
                  <Globe size={45} color="#3f74ca" weight="light" />
                ) : countryCode === "world" ? (
                  <GlobeHemisphereWest size={32} color="#3f74ca" />
                ) : (
                  <img
                    src={
                      countryCode === "EU"
                        ? EU
                        : `https://flagsapi.com/${countryCode}/flat/32.png`
                    }
                    alt="Flag"
                    width="50px"
                  />
                )}
              </div>
            </div>
          )}
          <p style={{ fontSize: "1.5rem" }}>
            Meal Type :{" "}
            <span style={{ color: "indianred", fontWeight: "bolder" }}>
              {formatMealType(mealType)}
            </span>
          </p>
          <DetailsCardImg
            src={image}
            alt={`${label}-img`}
            style={{ margin: "auto" }}
          />
          <div
            style={{
              textAlign: "center",
            }}
          >
            <GoBackBtn onClick={() => navigate(-1)}>Go Back</GoBackBtn>
            <MoreAnchorS
              href={`${url}`}
              target="blank"
              style={{ textDecoration: "none", marginLeft: "1rem" }}
            >
              More...
            </MoreAnchorS>
          </div>
        </div>
        <div>
          <div>
            <h3 style={{ borderBottom: "2px solid black" }}>NUTRIENTS</h3>
            <NutritionsUl>
              <li>
                <span>
                  {calories && `Calories = ${Math.trunc(calories)} cal`}
                </span>
              </li>
              <li>
                <span>{ENERGY_CAL?.label}</span> {ENERGY_CAL ? ":" : ""}{" "}
                <span>
                  {ENERGY_CAL?.quantity}
                  {ENERGY_CAL?.unit}
                </span>
              </li>
              <li>
                <span>{FAT?.label}</span> {FAT ? ":" : ""}{" "}
                <span>
                  {FAT?.quantity}
                  {FAT?.unit}
                </span>
              </li>
              <li>
                <span>{CHOCDF?.label}</span> {CHOCDF ? ":" : ""}{" "}
                <span>
                  {CHOCDF?.quantity}
                  {CHOCDF?.unit}
                </span>
              </li>
              <li>
                <span>{PROCNT?.label}</span> {PROCNT ? ":" : ""}{" "}
                <span>
                  {PROCNT?.quantity}
                  {PROCNT?.unit}
                </span>
              </li>
              <li>
                <span>{CHOLE?.label}</span> {CHOLE ? ":" : ""}{" "}
                <span>
                  {CHOLE?.quantity}
                  {CHOLE?.unit}
                </span>
              </li>
              <li>
                <span>{SUGAR?.label}</span> {SUGAR ? ":" : ""}{" "}
                <span>
                  {SUGAR?.quantity}
                  {SUGAR?.unit}
                </span>
              </li>
            </NutritionsUl>
          </div>
          <div>
            <h3 style={{ borderBottom: "2px solid black" }}>INGREDIENTS</h3>
            <ol style={{ textAlign: "left" }}>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.text}</li>
              ))}
            </ol>
          </div>
        </div>
      </DetailCardContainerS>
    </DetailsContainerS>
  );
};

export default Details;
