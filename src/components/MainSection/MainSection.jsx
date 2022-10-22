import React from "react";
import NewsSection from "../NewsSection/NewsSection";
import ServicesSection from "../ServicesSection/ServicesSection.jsx";
import {
  MainSectionContainer,
  MainSectionContent,
} from "./MainSectionElements";

const MainSection = () => {
  return (
    <MainSectionContainer>
      <MainSectionContent>
        <ServicesSection />
      </MainSectionContent>
      <MainSectionContent>
        <NewsSection />
      </MainSectionContent>
    </MainSectionContainer>
  );
};

export default MainSection;
