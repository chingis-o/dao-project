const voting = {
  proposals: [
    {
      daoName: "Demo DAO",
      status: "Active",
      title: "Which NFT artwork from our collection do you like most?",
      description: "Choose one of the artwork",
      deadline: "Ends in 1 day",
    },
  ],
  filteringTags: [
    { name: "All", isActive: true },
    { name: "Active", isActive: false },
    { name: "Upcoming", isActive: false },
    { name: "Closed", isActive: false },
  ],
};

export default voting;
