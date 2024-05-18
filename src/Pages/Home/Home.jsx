import { useGetAllBrandQuery } from "../../redux/api/brand/brandApi";


const Home = () => {
    const {data}= useGetAllBrandQuery()
    console.log(data, "from home")
    return (
        <div>
            home
        </div>
    );
};

export default Home;