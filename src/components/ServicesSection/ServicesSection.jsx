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
} from "./ServicesSectionElements.js";
import img1 from "./images/undraw_investor_update_re_qnuu.svg";
// import img2 from "./images/undraw_map_dark_re_36sy.svg";
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
                <strong>Кредиты</strong>
              </span>
              <br />
              Кредиты от ЗАО МДО "Хумо" повыгодным условиям.
            </h1>
          </ServicesObjectOne>
          <ServicesObjectTwo>
            <h1>
              <span>
                <strong>Хумо Онлайн</strong>
              </span>
              <br />
              Удобный способ совершать банковские операции через мобильный
              телефон.
            </h1>
            <ServicesBigImg src={img6} />
          </ServicesObjectTwo>
          <ServicesObjectThree>
            <ServicesBigImg src={img3} />
            <h1>
              <span>
                <strong>Депозиты</strong>
              </span>
              <br />
              Для тех, кто хочет приумножить свой капитал.
            </h1>
          </ServicesObjectThree>
          <ServicesObjectFour>
            <ServicesBigImg src={img4} />

            <h1>
              <span>
                <strong>Денежные переводы</strong>
              </span>
              <br />
              Быстрый и надежный способ отправки и получения денежных средств.
            </h1>
          </ServicesObjectFour>
          <ServicesObjectFive>
            <h1>
              <span>
                <strong>Расчетно кассовое обслуживание</strong>
              </span>
              <br />
              Открытие счетов для физических и юридических лиц.
            </h1>
            <ServicesBigImg src={img5} />
          </ServicesObjectFive>
        </ServicesGrid>
      </ServicesContent>
    </ServicesContainer>
  );
};

export default ServicesSection;
