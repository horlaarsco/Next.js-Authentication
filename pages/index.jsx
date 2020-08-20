import { server } from '../src/server';
import customAxios from '../src/customAxios'

export default function Home({ stories }) {
  return (
    <div className='container'>
      <h3>Stories</h3>
      { JSON.stringify(stories, null, 3)}
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  try {
    const data = await customAxios(`${server}/api/stories`, ctx, `${server}/login`);

    if (data) {
      return {
        props: {
          stories: data.data
        }
      };
    }
  } catch (err) {
    console.error(err);
    return {
      props: {}
    }
  }
}