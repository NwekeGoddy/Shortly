
import { ThreeDots } from  'react-loader-spinner'


const Spinner = () => {
    return ( 
        <ThreeDots 
height="80" 
width="80" 
radius="9"
color="#3a3053" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 />
     );
}
 
export default Spinner;