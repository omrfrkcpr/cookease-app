import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  DetailCardContainerS,
  DetailsContainerS,
} from "../components/styles/ContainerS";
import { DetailsCardImg } from "../components/styles/ImageS";
import { GoBackBtn } from "../components/styles/ButtonS";
import styled from "styled-components";
import axios from "axios";
import { Globe } from "@phosphor-icons/react";
import EU from "../assets/europe-flag-icon.png";

const Details = () => {
  const {
    state: { recipe },
  } = useLocation();
  const navigate = useNavigate();

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
    padding: 0.2rem 1rem;
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

  const getCountryCode = async (cuisineType) => {
    try {
      if (cuisineType === "turkish") {
        return "TR";
      }
      if (cuisineType === "american") {
        return "US";
      }
      if (cuisineType === "german") {
        return "DE";
      }
      if (cuisineType === "french") {
        return "FR";
      }
      if (cuisineType === "world") {
        // Render Globe icon for world cuisine type
        return "Globe";
      }
      if (cuisineType === "mediterranean" || cuisineType === "middle eastern") {
        // Render HemisphereWest icon for Mediterranean cuisine type
        return "TR";
      }

      if (cuisineType.includes("europe")) {
        return "EU";
      }

      // Tüm ülkelerin verilerini al
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const countries = response.data;

      // En yüksek eşleşme sayısı ve eşleşen ülke
      let maxMatchCount = 0;
      let matchedCountry = null;

      // Her bir ülke için işlem yap
      countries.forEach((country) => {
        const countryName = country.name.common.toLowerCase();
        const matchCount = countMatchingChars(
          cuisineType.toLowerCase(),
          countryName
        );

        // Eşleşme sayısı en yüksek olan ülkeyi bul
        if (matchCount > maxMatchCount) {
          maxMatchCount = matchCount;
          matchedCountry = country;
        }
      });

      // Eşleşen ülke bulunduysa ülke kodunu döndür
      if (matchedCountry) {
        return matchedCountry.cca2;
      } else {
        console.log(`Country not found for cuisine type: ${cuisineType}`);
        return null;
      }
    } catch (error) {
      console.error("Error fetching countries:", error);
      return null;
    }
  };

  // İki metin arasındaki en fazla eşleşen harf sayısını döndürür
  const countMatchingChars = (str1, str2) => {
    let count = 0;
    for (let i = 0; i < Math.min(str1.length, str2.length); i++) {
      if (str1[i] === str2[i]) {
        count++;
      } else {
        break;
      }
    }
    return count;
  };

  useEffect(() => {
    const fetchCountryCode = async () => {
      const code = await getCountryCode(cuisineType[0]);
      setCountryCode(code);
    };
    fetchCountryCode();
  }, [cuisineType]);

  const [countryCode, setCountryCode] = useState(null);

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
              {mealType}
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
