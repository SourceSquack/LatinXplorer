import Container from "@/components/ui/container";
import Billboard from "@/components/ui/billboard";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const HomePage = async () => {
    const products = await getProducts({ isFeatured: true });
    const billboard = await getBillboard('ace01960-17e3-4ebf-9d8f-f13382012c68');
    return( 
    <Container>
        <div className="space-y-10 pb-10">
            <Billboard data={billboard} />
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title='Productos destacados' items={products}  />
        </div>
    </Container>
    )
};

export default HomePage;