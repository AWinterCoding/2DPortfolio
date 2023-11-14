const Technology = () =>{

    const Technologies = [
        {name: "Javascript", img: "imgLink", link:"https://developer.mozilla.org/en-US/docs/Web/javascript"},
        {name: "HTML", img: "imgLink", link:"https://developer.mozilla.org/en-US/docs/Web/HTML"},
        {name: "CSS", img: "imgLink", link:"https://developer.mozilla.org/en-US/docs/Web/CSS"},
        {name: "Tailwind", img: "imgLink", link:"https://tailwindcss.com/docs/installation"},
        {name: "Express.js", img: "imgLink", link:"https://expressjs.com/en/guide/routing.html"},
        {name: "Node.js", img: "imgLink", link:"https://nodejs.org/en/docs"},
        {name: "MongoDB", img: "imgLink", link:"https://www.mongodb.com/docs/"},
        {name: "mySQL", img: "imgLink", link:"https://dev.mysql.com/doc/"},
        {name: "Handlebars", img: "imgLink", link:"https://handlebarsjs.com/guide/"},
        {name: "GraphQL", img: "imgLink", link:"https://graphql.org/learn/"},
        {name: "Jest", img: "imgLink", link:"https://jestjs.io/docs/getting-started"},
    ];

    return(
        <div>
            <h4>Technology I work with:</h4>
            <ul>
                    {Technologies.map((technology) => (
                        <li>
                            <h5>{technology.name}</h5>
                            <img src={technology.img}/>
                            <a href={technology.link}><p>Documentation</p></a>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default Technology;