const personAbout = ({params,searchParams}) => {

    // console.log(params.id)
    return (
        <div>
            <h1>Person About</h1>
            <h2>id:{params.id}</h2>
            <h2>category:{searchParams.category}</h2>
            <h2>Age:{searchParams.age}</h2>
        </div>
    );
};

export default personAbout;