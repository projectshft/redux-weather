import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchResult } from "../actions";
import _ from 'lodash';

const Results = () => {
  const allResults = useSelector((state) => state.results);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchResult());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchResult])

  // const renderResults = () => {
  //   if (!_.isEmpty(allResults)) {
  //     return allResults.map(() => (
  //       <li className="list-group-item" key={postID}>
  //         <Link to={`/posts/${postID}`}>{posts.entries[postID].title}</Link>
  //       </li>
  //     ));
  //   }
  //   return <div>No posts to show</div>;
  // }

  // return (
    
  // )

}
