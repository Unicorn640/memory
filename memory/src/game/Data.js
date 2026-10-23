const cardTypes = [
    {
        name: "p",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLRk9IgCRtQk65Jrzmf-T0T1u4I7hIF_bGUboRupWsPQ&s=10",
    },
    {
        name: "f",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9NLDbl2Ha09_XMGJLvKfkBkoZm5EVWhNnAPuVbb5OBA&s=10",
    },
    {
        name: "v",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf1U5zfLTWLuYKktCB9D3ecpnqKkiz-VvJC-dOIdB1eQ&s=10",
    },
    {
        name: "r",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMJIO2qh-i9cMQrSGNwt24TorMTr_v5XoMWNWtHZUtWQ&s=10",
    },
    {
        name: "a",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuw25NbPJoA6vsdgozMvN7EJpg8J5M-RihohQRs99jXw&s=10",
    },
    {
        name: "t",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZUfbZLk_J96gJT7knYt3G1kiMLSLHFApz7un9wvJN5w&s=10",
    },
];

const Data = [...cardTypes, ...cardTypes].map((card, index) => ({
    ...card,
    id: index + 1,
    matched: false,
}));

export default Data;
