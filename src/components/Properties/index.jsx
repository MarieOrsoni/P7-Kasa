

function Property() {
   
    const propertyData = {
        title: 'Propriete 1',
        description: 'Description de la propriete 1',
        price: 20000,
    };
    return (
        <div>
            <h1>application de location immobiliere</h1>
            <Property
            title={propertyData.title}
            description={propertyData.description}
            price={propertyData.price}
        />
        </div>
    );
}
export default Property;