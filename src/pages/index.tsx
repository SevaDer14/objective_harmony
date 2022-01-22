import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import BasicSection from 'src/components/Sections/BasicSection'

const HomePage = ({ sections }) => {
  return (
    <>
      {sections.map(({ title, body, name }) => (
        <BasicSection title={title} body={body?.html} key={name}/>
      ))}
    </>
  )
}

export default HomePage

export const getStaticProps = async () => {
  const client = new ApolloClient({
    uri: process.env.API_URL,
    cache: new InMemoryCache(),
  })

  const { data } = await client.query({
    query: gql`
      {
        view(where: { name: "home" }) {
          name
          sections {
            ... on Section {
              name
              body {
                html
              }
              title
            }
          }
        }
      }
    `,
  })

  return {
    props: {
      sections: data?.view?.sections,
    },
  }
}
