import { Button } from 'components/Atoms/Button/Button.styles'
import { StyledTitle } from 'components/Atoms/Title/Title.styles'
import { Wrapper, NewsItem } from './NewsSection.styles'

const News = () => {
  return (
    <Wrapper>
      <StyledTitle>University news feed</StyledTitle>
      <NewsItem>
        <h3>News title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt architecto, beatae expedita alias reiciendis
          quaerat reprehenderit maxime id, autem laudantium quidem eligendi voluptates labore suscipit commodi animi
          delectus blanditiis libero quam facere inventore! Reiciendis dolor expedita atque quam doloremque libero.
        </p>
        <Button>Read more</Button>
      </NewsItem>
      <NewsItem>
        <h3>News title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam rem ratione similique. Suscipit est, maiores
          provident placeat id quam inventore?
        </p>
        <Button>Read more</Button>
      </NewsItem>
    </Wrapper>
  )
}

export default News
