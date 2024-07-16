import { CircleFadeLoader } from 'react-loaders-kit';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import './Loading.css';

const Loading = () => {


    const loaderProps = {
        loading: true,
        size: 100,
        duration: 1,
    };

    return (
        <div className="loading-container">
            <CircleFadeLoader />
            <AiOutlineLoading3Quarters  {...loaderProps}/>
            <h2>Cargando...</h2>
        </div>
    );
};

export default Loading;
