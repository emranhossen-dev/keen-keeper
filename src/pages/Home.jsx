
import { use } from 'react';
import { toast } from 'react-toastify';


const dataPromise = fetch("/data.json").then((res)=>res.json())


const Home = () => {
    const data = use(dataPromise);
    console.log(data);
    

    const notify = () => toast("Wow so easy!");
    return (
        <div>
           <h1> Hello World,,, this is homepage</h1>
           <button className='btn btn-primary' onClick={notify}>Notify!</button>
        </div>
    );
};

export default Home;