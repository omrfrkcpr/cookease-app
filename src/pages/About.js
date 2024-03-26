import React from "react";
import {
  AboutContainerS,
  PageContainerS,
} from "../components/styles/ContainerS";
import { Heart } from "@phosphor-icons/react";
import { AboutH1, AboutH3and4 } from "../components/styles/HeaderS";

const About = () => {
  return (
    <PageContainerS about>
      <AboutContainerS>
        <div style={{ marginBottom: "3rem" }}>
          <AboutH1>Welcome!</AboutH1>
          <h6 style={{ textAlign: "center" }}>
            CookEase is a delightful way to discover and try out delicious
            recipes. Our mission is to provide inspiring and accessible recipes
            for chefs of all levels in the kitchen.
          </h6>
        </div>
        <div style={{ padding: "0 3rem" }}>
          <AboutH3and4>Our Mission</AboutH3and4>
          <p>
            Our mission is to empower everyone to cook delicious meals with
            ease. We not only offer recipes but also provide suggestions, tips,
            and tricks to make cooking a breeze.
          </p>
          <AboutH3and4>Our Services</AboutH3and4>
          <p>
            CookEase boasts a wide and diverse collection of recipes. Whether
            you're looking for quick and easy recipes for everyday meals or
            planning a special menu for a memorable occasion, you'll find
            recipes to suit every taste. Additionally, you can save your
            favorite recipes, create shopping lists, and receive personalized
            recommendations to further enhance your cooking experience.
          </p>
          <AboutH3and4>Contact Us</AboutH3and4>
          <p>
            Feel free to reach out to us to learn more about CookEase, provide
            feedback, or explore collaboration opportunities. You can contact us
            via email or through our social media channels. Additionally, you
            can visit our FAQ section to find answers to commonly asked
            questions.
          </p>
        </div>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <AboutH3and4 style={{ fontSize: "1.3rem" }}>
            Thank you for choosing CookEase! We hope you have wonderful culinary
            experiences in the kitchen.{" "}
            {<Heart size={32} color="#6b675f" weight="fill" />}
          </AboutH3and4>
        </div>
      </AboutContainerS>
    </PageContainerS>
  );
};

export default About;
