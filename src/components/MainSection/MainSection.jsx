import React from "react";
import NewsSection from "../NewsSection/NewsSection";
import ServicesSection from "../ServicesSection/ServicesSection.jsx";
import Block from "../Block/Block";
import FooterNavbar from "../Footer/FooterNavbar";
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
      <MainSectionContent>
        <Block />
      </MainSectionContent>
      <FooterNavbar />
    </MainSectionContainer>
  );
};

export default MainSection;
