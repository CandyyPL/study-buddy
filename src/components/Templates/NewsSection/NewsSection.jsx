import { StyledTitle } from 'components/Atoms/Title/Title.styles'
import { Wrapper } from './NewsSection.styles'
import NewsItem from 'components/Molecules/NewsItem/NewsItem'
import axios from 'axios'
import { useEffect, useState } from 'react'

const API_KEY = process.env.REACT_APP_DATOCMS_TOKEN

const NewsSection = () => {
  const [articles, setArticles] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query: `
          {
            allArticles {
              id
              title
              category
              content
            }
          }`,
        },
        {
          headers: {
            authorization: `Bearer ${API_KEY}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles)
      })
      .catch(() => {
        setError(`Sorry, we couldn't load news for you`)
      })
  }, [])

  return (
    <Wrapper>
      <StyledTitle>University news feed</StyledTitle>
      {articles.length ? (
        articles.map(({ id, title, category, content }) => {
          return <NewsItem key={id} title={title} category={category} content={content} />
        })
      ) : (
        <StyledTitle>{error ? error : 'Loading...'}</StyledTitle>
      )}
    </Wrapper>
  )
}

export default NewsSection
