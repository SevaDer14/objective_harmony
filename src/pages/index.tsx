// REFACTOR
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import BasicSection from 'src/components/Sections/BasicSection'

const HomePage = ({ title, body }) => {
  return (
    <>
      <BasicSection title={title} body={body} />
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
        section(where: { id: "ckxoq2p142wqk0b13lidbsevp" }) {
        title
        body
      }
    }      
    `,
  })

  return {
    props: {
      title: data?.section?.title,
      body: data?.section?.body,
    },
  }
}
