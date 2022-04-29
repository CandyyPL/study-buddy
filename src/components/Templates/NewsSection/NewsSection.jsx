import { StyledTitle } from 'components/Atoms/Title/Title.styles'
import { Wrapper, NewsItem, ArticleTitle, ArticleBody, StyledButton } from './NewsSection.styles'

const News = () => {
  return (
    <Wrapper>
      <StyledTitle>University news feed</StyledTitle>
      <NewsItem>
        <ArticleTitle>
          <h3>New computers for all lecturers</h3>
          <p>Staff news</p>
        </ArticleTitle>
        <ArticleBody>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquam a quod sit. Sunt reprehenderit
            voluptatem quam iure, deleniti alias!
          </p>
        </ArticleBody>
        <StyledButton>Read more</StyledButton>
      </NewsItem>
      <NewsItem>
        <ArticleTitle>
          <h3>Business course for best students</h3>
          <p>Students</p>
        </ArticleTitle>
        <ArticleBody>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquam a quod sit. Sunt reprehenderit
            voluptatem quam iure, deleniti alias!
          </p>
          <img src='https://source.unsplash.com/random/180x120' alt='' style={{ borderRadius: 5 }} />
        </ArticleBody>
        <StyledButton>Read more</StyledButton>
      </NewsItem>
      <NewsItem>
        <ArticleTitle>
          <h3>All exams postponed</h3>
          <p>Staff news</p>
        </ArticleTitle>
        <ArticleBody>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquam a quod sit. Sunt reprehenderit
            voluptatem quam iure, deleniti alias!
          </p>
        </ArticleBody>
        <StyledButton>Read more</StyledButton>
      </NewsItem>
    </Wrapper>
  )
}

export default News
