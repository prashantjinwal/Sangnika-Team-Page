import { post } from "hooks";




const  teachers = [
    {
        name : "Dr. Anuja Soni",
        post : "Teacher in charge",
        src :   "/images/photo (1).png",

    },

    {
        name : "Dr. Rajni Bala",
        post : "Teacher in charge",
        src :  "/images/photo (2).png",

    },

    {
        name : "Sanjeet Kumar",
        post : "Website Coordinator",
        src :  "/images/photo (3).png",

    }
    // process.env.PUBLIC_URL +
];

// council members

const president = [
    {
        name : 'Amarjeet jena',
        post : 'President',
        src : '/images/photo (4).png',
        linkdin : 'https://www.linkedin.com/in/amarjeet-jena-8277b5223/',
        ph : '+91 9182508492',
        id : 1

    },

    {
        name : 'Girish Goyal',
        post : 'Vice President',
        src : '/images/photo (5).png',
        linkdin : 'https://www.linkedin.com/in/girish-goyal-653b21226/',
        ph : '+91 8950992298',
        id : 2

    },

    {
        name : 'Pallavi Raghuvanshi',
        post : 'Vice.President',
        src : '/images/photo (6).png',
        linkdin : 'https://www.linkedin.com/in/pallavi-raghuvanshi/',
        ph : '+91 6362374373',
        id : 3

    },
];

//     //   Secretory and treasurer

const  sec = [
    {
        name : 'Kunal Sharma',
        post : 'General Secretory',
        src : '/images/photo (7).png',
        linkdin : 'https://www.linkedin.com/in/kunal-sharma-046631259/',
        ph : '+91 7011743227',
        id : 1

    },

    {
        name : 'Rachna Lamba',
        post : 'Joint Secretory',
        src : '/images/photo (8).png',
        linkdin : 'https://www.linkedin.com/in/rachna-lamba/',
        ph : '+91 9350277190',
        id : 2

    },

    {
        name : 'Sumit Gupta',
        post : 'Treasurer',
        src : '/images/photo (9).png',
        linkdin : 'https://www.linkedin.com/in/sumit-gupta-a16a40258/',
        ph : '+91 9182508492',
        id : 3

    },
];

//         // Executives


const excu = [
    {
        name : 'Manjeet Singh',
        post : 'Executive',
        src : '/images/ex1.png',
        linkdin : '#',
        ph : '+91 8826924711',
        id : 1

    },

    {
        name : 'Ajit Singh',
        post : 'Executive',
        src : '/images/ex2.png',
        linkdin : 'https://www.linkedin.com/in/iamtheajitsingh/',
        ph : '+91 9354767673',
        id : 2

    },

    {
        name : 'Lalit Sain',
        post : 'Executive',
        src : '/images/ex8.png',
        linkdin : 'https://www.linkedin.com/in/lalit-sain-3873591b7/',
        ph : '+91 8860793434',
        id : 8

    },

    

    {
        name : 'Chanchal',
        post : 'Executive',
        src : '/images/ex4.png',
        linkdin : '#',
        ph : '+91 0000000000',
        id : 4

    },

    {
        name : 'Adarsh Singh',
        post : 'Executive',
        src : '/images/ex5.png',
        linkdin : '#',
        ph : '+91 9079876846',
        id : 5

    },

    {
        name : 'Gaurav Yadav',
        post : 'Executive',
        src : '/images/ex6.png',
        linkdin : 'https://www.linkedin.com/in/gaurav-yadav-530295258/',
        ph : '+91 9625294618',
        id : 6

    },

    {
        name : 'Mukul Dhasmana',
        post : 'Executive',
        src : '/images/ex7.png',
        linkdin : '#',
        ph : '+91 9711086558',
        id : 7

    },

   

    

    {
        name : 'Alok Raj',
        post : 'Executive',
        src : '/images/ex9.png',
        linkdin : '#',
        ph : '+91 9528117791',
        id : 9

    },

   {
        name : 'Yatharth Choudhary',
        post : 'Executive',
        src : '/images/ex3.png',
        linkdin : 'https://www.linkedin.com/in/yatharth-chaudhary-b1702b264/',
        ph : '+91 9458078972',
        id : 3

    },
    
];

//         // Public Relation Heads

const pr = [
    {
        name : 'Vishal Prasad',
        post : 'PR - Head',
        src : '/images/ex10.png',
        linkdin : 'https://www.linkedin.com/in/vishal-prasad19/',
        ph : '+91 9315629821',
        id : 1

    },
    {
        name : 'Garima Srivastava',
        post : 'PR - Head',
        src : '/images/ex11.png',
        linkdin : 'https://www.linkedin.com/in/garima-srivastava-54313125a/',
        ph : '+91 8303579298',
        id : 2

    },

]

//         // Graphics and Content Head

const graphic = [
    {
        name : 'Somya Srivastava',
        post : 'Content - Head',
        src : '/images/ex12.png',
        linkdin : 'https://www.linkedin.com/in/somya-srivastava-7386b5225/',
        ph : '+91 8887728062',
        id : 1

    },
    {
        name : 'Anirban Bhattacharje',
        post : 'Graphics - Head',
        src : '/images/ex13.png',
        linkdin : 'https://www.linkedin.com/in/anirban-bhattacharjee-155920218/',
        ph : '+91 9625739718',
        id : 2

    },
]

const webH = [
    {
        name: 'Himank Singh',
        post: 'Web Head',
        src: '/images/WebH.jpg',
        linkdin : 'https://www.linkedin.com/in/himank-singh-65b411249/',
        ph : '+91 83688175007',
        id : 1
    }
]



export default teachers;
export {president};
export {sec};
export {excu};
export {pr};
export {graphic};
export {webH};
