import { products } from "@/data/products";
import { productIcons } from "@/components/layout/MegaMenu";
import { ExpandingCards } from "@/components/ui/expanding-cards";
import { SceneStage } from "./Scenes";
export function ProductExplorer() {
 return <ExpandingCards aria-label="Explore Melorite products" items={products.map((product,i)=>{const Icon=productIcons[product.icon];return {id:product.slug,title:product.short,description:product.summary,icon:<Icon size={23}/>,linkHref:`/products/${product.slug}`,imgSrc:`/resources/cover-${i}.svg`,visual:<SceneStage slug={product.slug} variant="b"/>};})} />;
}
