import User from "../ClassComponents/UserClass";


const About = () =>{
    return (
        <>
            <div>
                This is About us page.
                <User name={"SJ"} about={"This is about us page."}/>
            </div>
        </>
    );
}

export default About;