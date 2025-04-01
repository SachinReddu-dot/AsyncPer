const data = [
  {
    id: 1,
    title: "Music Concert",
    description: "A live performance by a popular rock band.",
    date: "2025-05-01",
    time: "19:00",
    category: "Music",
    imageUrl: "https://cdn.pixabay.com/photo/2016/11/22/19/15/hand-1850120_1280.jpg"
  },
  {
    id: 2,
    title: "Art Exhibition",
    description: "A showcase of contemporary artists in the city.",
    date: "2025-05-03",
    time: "10:00",
    category: "Art",
    imageUrl: "https://cdn.pixabay.com/photo/2023/12/05/15/26/exhibition-8431916_1280.jpg"
  },
  {
    id: 3,
    title: "Tech Conference",
    description: "An event to discuss the latest trends in technology and innovation.",
    date: "2025-05-05",
    time: "09:00",
    category: "Technology",
    imageUrl: "https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_1280.jpg"
  },
  {
    id: 4,
    title: "Food Festival",
    description: "A celebration of global cuisines with various food stalls.",
    date: "2025-05-07",
    time: "12:00",
    category: "Food",
    imageUrl: "https://cdn.pixabay.com/photo/2021/09/24/16/35/mooncake-6653030_1280.jpg"
  },
  {
    id: 5,
    title: "Yoga Retreat",
    description: "A weekend retreat focused on wellness, meditation, and yoga.",
    date: "2025-05-09",
    time: "08:00",
    category: "Wellness",
    imageUrl: "https://cdn.pixabay.com/photo/2023/07/13/16/32/woman-8125244_1280.jpg"
  },
  {
    id: 6,
    title: "Charity Run",
    description: "A 5k run to raise funds for local charities.",
    date: "2025-05-11",
    time: "07:00",
    category: "Charity",
    imageUrl: "https://cdn.pixabay.com/photo/2023/10/04/14/15/man-8293794_1280.jpg"
  },
  {
    id: 7,
    title: "Theater Play",
    description: "A dramatic play by a renowned theater group.",
    date: "2025-05-13",
    time: "20:00",
    category: "Theater",
    imageUrl: "https://cdn.pixabay.com/photo/2015/08/18/23/06/ballet-don-quijote-895062_1280.jpg"
  }
];



export const setEvents = () => {
    localStorage.setItem("event", JSON.stringify(data))
}

export const getEvents = () => {
    const events = JSON.parse(localStorage.getItem("event"))
    return events;
}