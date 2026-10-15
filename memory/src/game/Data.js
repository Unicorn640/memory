const cardTypes = [
    {
        name: "react",
        img: "https://media.geeksforgeeks.org/wp-content/uploads/20230927165802/atom-4.png",
    },
    {
        name: "java",
        img: "https://media.geeksforgeeks.org/wp-content/uploads/20230927165803/java.png",
    },
    {
        name: "css",
        img: "https://media.geeksforgeeks.org/wp-content/uploads/20230927165803/css-3-1.png",
    },
    {
        name: "node",
        img: "https://media.geeksforgeeks.org/wp-content/uploads/20230927165805/nodejs-1.png",
    },
    {
        name: "html",
        img: "https://media.geeksforgeeks.org/wp-content/uploads/20230927165806/html-5-1.png",
    },
    {
        name: "js",
        img: "https://media.geeksforgeeks.org/wp-content/uploads/20230927165804/js-3.png",
    },
];

const Data = [...cardTypes, ...cardTypes].map((card, index) => ({
    ...card,
    id: index + 1,
    matched: false,
}));

export default Data;
