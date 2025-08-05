import React from "react";
import TitleSection from "./TitleSection";
import ReviewsCard from "./ReviewsCard";

function Reviews() {
  const reviews = [
    {
      title: "“A real sense of community, nurtured ”",
      comment:
        "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
      user: "Mosa",
      rating: 5,
      destination: "London",
      image: "/review-img (1).png",
    },
    {
      title: "“The facilities are superb. Clean, slick, bright.”",
      comment:
        "“A real sense of community, nurtured”Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.View moreOlgaWeave Studios – Kai TakGoogle",
      user: "Thomas",
      rating: 5,
      destination: "Weave Studios – Olympic",
      image: "/review-img (2).png",
    },
    {
      title: "“A real sense of community, nurtured”",
      comment:
        "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
      user: "Eliot",
      rating: 5,
      destination: "Weave Studios – Kai Tak",
      image: "/review-img (3).png",
    },
  ];
  return (
    <section className="reviews-container flex flex-col items-center">
      <div className="reviews-content w-[90%]">
        <TitleSection
          label="Reviews"
          description="What people says about Golobe facilities"
          buttonTitle="See All"
        />
        <div
          style={{ scrollbarWidth: "none" }}
          className="flex max-w-full overflow-auto gap-10 p-5"
        >
          {reviews.map((review) => (
            <ReviewsCard
              key={review.title}
              title={review.title}
              comment={review.comment}
              user={review.user}
              rating={review.rating}
              destination={review.destination}
              image={review.image}
            />
          ))}

          {reviews.map((review, i) => (
            <ReviewsCard
              key={i}
              title={review.title}
              comment={review.comment}
              user={review.user}
              rating={review.rating}
              destination={review.destination}
              image={review.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
