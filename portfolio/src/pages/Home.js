import { useEffect } from "react";
import Header from "../components/Header";

const Home = () => {

    useEffect(() => {
        Tournesol();
    }, []);

    function Tournesol() {
        const text = document.querySelector('.text p');
        text.innerHTML = text.innerHTML.split("").map(
            (char, i) =>
                `<span style="transform:rotate(${i * 10.2}deg)">${char}</span>`
        ).join("")
    }

    return (
        <div id="home">
            <Header />
            <section>
                <div className="circle">
                    <div className="logo"></div>
                    <div className="text">
                        <p>Alex Guillemin - Développeur web -</p>
                    </div>
                </div>
                <div className="promotion">
                    <p>IIM Léonard de Vinci</p>
                </div>
            </section>
        </div>
    );
}

export default Home;