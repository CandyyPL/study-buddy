import { StyledTitle } from 'components/Atoms/Title/Title.styles'
import { Wrapper } from './NewsSection.styles'
import NewsItem from 'components/Molecules/NewsItem/NewsItem'

const data = [
  {
    title: 'New computers for all lecturers',
    category: 'Staff news',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nisi nihil iusto incidunt repellendus eius est error facere aliquid fuga autem, hic voluptatum. Fugit voluptatibus rem dolor accusantium pariatur incidunt recusandae doloremque esse quas omnis?',
  },
  {
    title: 'School library redesign',
    category: 'About school',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat commodi magni delectus a natus nobis eum quos, dicta odio. Dolores!',
  },
]

const News = () => {
  return (
    <Wrapper>
      <StyledTitle>University news feed</StyledTitle>
      {data.length &&
        data.map(({ title, category, body }) => {
          return <NewsItem key={title} title={title} category={category} body={body} />
        })}
    </Wrapper>
  )
}

export default News
