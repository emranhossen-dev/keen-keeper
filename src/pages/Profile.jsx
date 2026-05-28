import { useLoaderData, useParams } from "react-router";


const Profile = () => {
    const data = useLoaderData();
    console.log(data);
    const {id} = useParams();
    console.log(id);
    

    return (
        <div>
            Profile page
        </div>
    );
};

export default Profile;