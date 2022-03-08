import React from 'react';
import { useDispatch } from 'react-redux';
import { setSortBy } from "../Redux/actions/filters";
import '../css/block-3-css.css';

function Block3({photos = []}){
    const tags = ["All", "Projects", "Style", "Sport", "Friends"];
    const dispatch = useDispatch();
    const [activeUnite, setActiveUnite] = React.useState('All');

    function selectType(type) {
        dispatch(setSortBy(type));
        setActiveUnite(type);
    }

    return (
        <div className="block3-container" id={'Projects'}>
            <div className="block3-adaptive">
                <div className="tags-container">
                    {tags.map((item, index) => {
                        return (
                            <div className={activeUnite === item ? "tag_unit activeTagUit" : "tag_unit"}
                                 key={index}
                                 onClick={() => {selectType(item)}}>
                                {item}
                            </div>
                        )
                    })}
                </div>
                <div className="photos-container">
                    <div className="photoRow">
                        {photos.map((item,Index) => {
                            if (Index % 3 === 0){
                                return (
                                    <div className="photo">
                                        <a href={item.href ? item.href : "#"}><img alt="oops"  src={item.imgUrl}/></a>
                                    </div>
                                );
                            }
                        })}
                    </div>
                    <div className="photoRow">
                        {photos.map((item, Index) => {
                            if (Index % 3 === 1){
                                return (
                                    <div className="photo">
                                        <a href={item.href ? item.href : "#"}><img alt="oops"  src={item.imgUrl}/></a>
                                    </div>
                                );
                            }
                        })}
                    </div>
                    <div className="photoRow">
                        {photos.map((item, Index) => {
                            if (Index % 3 === 2){
                                return (
                                    <div className="photo">
                                        <a href={item.href ? item.href : "#"}><img alt="oops" src={item.imgUrl}/></a>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Block3;