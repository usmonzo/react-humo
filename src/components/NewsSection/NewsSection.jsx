import React from "react";
import {
  NewsBlock,
  NewsBlockButton,
  NewsBlockDate,
  NewsBlockH2,
  NewsBlockImage,
  NewsButtonBox,
  NewsSectionBlocks,
  NewsSectionContainer,
  NewsSectionContent,
  NewsSectionHeadline,
} from "./NewsSectionElements";
import news1 from "./news1.jpg";

export default function NewsSection() {
  return (
    <NewsSectionContainer>
      <NewsSectionHeadline>Новости</NewsSectionHeadline>
      <NewsSectionContent>
        <NewsSectionBlocks>
          <NewsBlock>
            <NewsBlockImage src={news1} />
            <NewsBlockH2>
              Визит Чрезвычайного и Полномочного посла Японии в ЗАО МДО «Хумо»
            </NewsBlockH2>
            <NewsBlockDate>22.09.2022</NewsBlockDate>
          </NewsBlock>
          <NewsBlock>
            <NewsBlockImage src={news1} />
            <NewsBlockH2>
              Визит Чрезвычайного и Полномочного посла Японии в ЗАО МДО «Хумо»
            </NewsBlockH2>
            <NewsBlockDate>22.09.2022</NewsBlockDate>
          </NewsBlock>
          <NewsBlock>
            <NewsBlockImage src={news1} />
            <NewsBlockH2>
              Визит Чрезвычайного и Полномочного посла Японии в ЗАО МДО «Хумо»
            </NewsBlockH2>
            <NewsBlockDate>22.09.2022</NewsBlockDate>
          </NewsBlock>
        </NewsSectionBlocks>
        <NewsButtonBox>
          <NewsBlockButton>Все новости</NewsBlockButton>
        </NewsButtonBox>
      </NewsSectionContent>
    </NewsSectionContainer>
  );
}
