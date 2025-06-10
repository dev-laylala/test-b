import React from 'react';
import './ReviewCard.scss';

interface IReviewCardProps {
  data: {
    name: string;
    location: string;
    status: string;
    review: string;
  }
}

const ReviewCard = ( { data }:IReviewCardProps) => {

  return (
    <div className='review-card'>

      <div className="left-area" />

      <div className="right-area">
        <div className="right-upper">
          <div className="review-value">
            <div/>
            <p>5</p>
          </div>
          { data.status === 'none' ? null : <div className="review-status">{data.status}</div> }
        </div>
        <div className="right-mid">
          {data.name} <br/>
          {data.location}
        </div>
        <div className="right-lower">
          {data.review}
        </div>  
      </div>
    </div>

  )
}

export default ReviewCard