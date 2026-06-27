export interface INReview {
  authorAttribution: {
    displayName: string;
    photoUri?: string;
  };
  text: {
    text: string;
  };
  relativePublishTimeDescription: string;
}

export const irReviews: INReview[] = [
  {
    authorAttribution: {
      displayName: "John O.",
      photoUri: "",
    },
    text: {
      text: "Really happy with the work the guys did on our house. We had a garden room built, and the lads were incredibly professional and tidy from start to finish. They completed the project exactly on schedule. Would highly recommend them.",
    },
    relativePublishTimeDescription: "2 weeks ago",
  },
  {
    authorAttribution: {
      displayName: "Sarah M.",
      // Or, if they have a real photo you saved, link it from your public folder:
      // photoUri: "/assets/reviews/sarah.jpg",
    },
    text: {
      text: "We recently had Prime Build out to do a few additions to our house, along with a brand new floor in the garage and a room divider wall. They took over everything, building it exactly as needed, including any additional work like plastering and painting. Very happy.",
    },
    relativePublishTimeDescription: "a month ago",
  },
];
