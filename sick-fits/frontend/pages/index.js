import Items from "../components/Items";

//nextjs imports react for us.;
//import Link from 'next/link';

const Home = props => (
  <div>
    <Items page={parseFloat(props.query.page) || 1} />
  </div>
);
export default Home;
