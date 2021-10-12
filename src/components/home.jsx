import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchPhotos} from "../Redux/actions/photos";
import "../css/home-css.css"
import Block1 from "./Block-1";
import Block2 from "./Block-2";
import Block3 from "./Block-3";
// import Header from "./header";
// import Block6 from "./Block-6";
// import PopUp from "./popUp";
import Footer from "./Footer";
import Block4 from "./Block-4";

function Home({state, setState}) {
    // let array = [1, 2, 3, 4, 5];

    const dispatch = useDispatch();
    const sortBy = useSelector(({ filters }) => filters.sortBy);
    const photos = useSelector(({ photos }) => photos.items);

    React.useEffect(() => {
        dispatch(fetchPhotos(sortBy));
    }, [sortBy]);

    return (
      <div className='Home-container'>
          {/*<Header></Header>*/}
          <Block1></Block1>
          <Block2></Block2>
          <Block4 setState={setState} state={state}></Block4>
          <Block3 photos={photos}></Block3>
          <Footer></Footer>
          {/*<Block6></Block6>*/}
      </div>
    );
}

export default Home;