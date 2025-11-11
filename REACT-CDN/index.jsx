// function Book(props){
    // const image = React.createElement("img",{
    //     // src:"https://m.media-amazon.com/images/I/31WIiECCtxL._UF1000,1000_QL80_.jpg",
    //     scr:props.image,
    //     width:250,
    //     height:250,
    //     alt: "Book Image"
    // },null)
    // const h3 = React.createElement("h3",{},props.title)
    // const h4 = React.createElement("h4",{},props.price)
    // const btn = React.createElement("button",{},"Add to Cart")
    // const child = React.createElement("div",{className: "card"},image,h3,h4,btn)
    // return child;
    // }
    
    function Book(props){
        return(
            <div>
                <img src={props.image} 
                 width={200}
                 height={200}
                />
                <h3>Title: {props.title} </h3>
                <h4>Price: {props.price}</h4>
                <button> Add to Cart</button>
            </div>
        )
    }
    
    
    const books=[{image:"https://m.media-amazon.com/images/I/31WIiECCtxL._UF1000,1000_QL80_.jpg",title:"Physics",price:349},
        {image:"https://m.media-amazon.com/images/I/71EbahdYuWL.jpg",title:"Chemistry",price:349},
        {image:"https://m.media-amazon.com/images/I/91oCkbtq1CL.jpg",title:"Math",price:349}
    ];
    // const bookele = books.map(b=>(
    //     React.createElement(Book,{
    //         image: b.image,
    //         title: b.title,
    //         price: b.price
    //     },null)
    // ))
    
    function App(){
        return (
            <div>
               { books.map((b,i)=>(
                    <Book key={i} props={b}/>
                ))}
            </div>
        )
    }
    
    // const booklist= React.createElement("div",{className:"book-list"},bookele);
    
    
    const parent = document.getElementById("root")
    // Use React 18+ root API to mount the app
    const root = ReactDOM.createRoot(parent)
    root.render(<App/>);