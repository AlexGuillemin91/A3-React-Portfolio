import alex from '../img/alex.PNG'

const Presentation = () => {
    return ( 
        <div className="presentation">
            <div className='image'>
                <img src={alex}></img>
            </div>
            <div className='informations'>
                <h2>Alex Guillemin</h2>
                <p>12 rue de la mort</p>
                <p>06 06 06 06 06</p>
                <p>valentine.detaregion@gmail.com</p>
            </div>
        </div>
     );
}
 
export default Presentation;