import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useGetProductDetailsBySlugQuery } from "../hooks/productHooks";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { getError } from "../utils";
import { ApiError } from "../types/ApiError";

export default function ProductPage () {
    const params = useParams()
    const { slug } = params
    const {
        data: product,
        isLoading,
        error,
    } = useGetProductDetailsBySlugQuery(slug!)
    return (
        isLoading ? (
            <LoadingBox />
        )
        :
        error ? (
            <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
        )
        : !product ? (
            <MessageBox variant="danger">Product Not Found</MessageBox>
        )
        :
        <div>
            <Helmet>
                <title>product</title>
            </Helmet>
            ProductPage
        </div>
    )
}

