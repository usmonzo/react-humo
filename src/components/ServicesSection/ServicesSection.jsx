import React from "react";
import {
  ServicesBigImg,
  ServicesContainer,
  ServicesContent,
  ServicesGrid,
  ServicesHeadline,
  ServicesObjectFive,
  ServicesObjectFour,
  ServicesObjectOne,
  ServicesObjectThree,
  ServicesObjectTwo,
} from "./ServicesSection";
import img1 from "./images/undraw_investor_update_re_qnuu.svg";
import img2 from "./images/undraw_map_dark_re_36sy.svg";
import img3 from "./images/undraw_mobile_pay_re_sjb8.svg";
import img4 from "./images/undraw_online_posts_re_7ucl.svg";
import img5 from "./images/undraw_online_transactions_-02-ka.svg";
import img6 from "./images/undraw_vault_re_s4my.svg";

const ServicesSection = () => {
  return (
    <ServicesContainer>
      <ServicesContent>
        <ServicesHeadline>Популярные продукты</ServicesHeadline>
      </ServicesContent>
      <ServicesContent>
        <ServicesGrid>
          <ServicesObjectOne>
            <ServicesBigImg src={img1} />
            <h1>
              <span>
                <strong>Lorem ipsum dolor sit</strong>
              </span>
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse id
              aspernatur est corporis totam soluta cumque .
            </h1>
          </ServicesObjectOne>
          <ServicesObjectTwo>
            <h1>
              <span>
                <strong>Lorem ipsum dolor sit</strong>
              </span>
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse id
              aspernatur est corporis.
            </h1>
            <ServicesBigImg src={img2} />
          </ServicesObjectTwo>
          <ServicesObjectThree>
            <ServicesBigImg src={img3} />
            <h1>
              <span>
                <strong>Lorem ipsum dolor sit</strong>
              </span>
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse id
              aspernatur est corporis totam soluta cumque .
            </h1>
          </ServicesObjectThree>
          <ServicesObjectFour>
            <ServicesBigImg src={img4} />

            <h1>
              <span>
                <strong>Lorem ipsum dolor sit</strong>
              </span>
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h1>
          </ServicesObjectFour>
          <ServicesObjectFive>
            <h1>
              <span>
                <strong>Lorem ipsum dolor sit</strong>
              </span>
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse id
              aspernatur est corporis totam soluta cumque saepe nobis quas
              delectus.
            </h1>
            <ServicesBigImg src={img5} />
          </ServicesObjectFive>
        </ServicesGrid>
      </ServicesContent>
    </ServicesContainer>
  );
};

export default ServicesSection;
