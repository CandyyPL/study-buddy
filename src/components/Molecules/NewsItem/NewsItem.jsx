import { NewsItemWrapper, ArticleTitle, ArticleBody, StyledButton } from './NewsItem.styles'

const NewsItem = ({ title, category, body }) => {
  return (
    <NewsItemWrapper>
      <ArticleTitle>
        <h3>{title}</h3>
        <p>{category}</p>
      </ArticleTitle>
      <ArticleBody>
        <p>{body}</p>
      </ArticleBody>
      <StyledButton>Read more</StyledButton>
    </NewsItemWrapper>
  )
}

export default NewsItem
