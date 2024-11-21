// import { GetServerSideProps } from 'next';
import { Data } from "../types"

// This function will run on the server-side during each request
// export const getServerSideProps: GetServerSideProps = async () => {
//     // const params = new URLSearchParams({
//     //     userName: 'Dave'
//     // });

//     const testDta = await fetch(`http://localhost:3000/api/test`, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     });

//     const resData = await testDta.json();

//     return {
//         props: {
//             resData,
//         },
//     };
// };
type fetchProps = {
    data: Data
}

const FetchComp: React.FC<fetchProps> = ({ data }) => {

    if (!data || !data.users || data.users.length === 0) {
        return <p>No data available</p>;
    }

    return (
        <div>
            <h3>Fetched Data</h3>
            {data.users.map((user, index) => (
                <div key={index}>
                    {Object.entries(user).map(([name, details]) => (
                        <div key={name}>
                            <h4>{name}</h4>
                            <div>
                                <p>likes: {details.likes}</p>
                                <p>Count of photos: {details.photos}</p>
                                <p>Count of subscribers: {details.subscribers}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>

    )
};

export default FetchComp