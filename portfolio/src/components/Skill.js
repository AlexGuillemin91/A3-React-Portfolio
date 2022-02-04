const Skill = ({name, img}) => {
    return ( 
        <div className="skill">
            <img src={img} alt={name}></img>
            <h4>{name}</h4>
        </div>
     );
}
 
export default Skill;