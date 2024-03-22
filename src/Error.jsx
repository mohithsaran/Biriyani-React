const Error = ({ingredients}) => {
    return ( 
        <>
        {
            ingredients.length==0? <label>No Ingredients. Just Order</label>:null
        }
        </>
     );
}
 
export default Error;