import Header from "./Header"

const MainContainer = ( {children, title} ) => {
    return (
        <>
            <Header title={title}/>
            <div className="container" style={{flexDirection: 'column'}}>
                {children}
            </div>

        </>
    )
}

export default MainContainer