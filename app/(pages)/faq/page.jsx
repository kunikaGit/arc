import Footer1 from "@/components/footer/Footer1";
import Header3 from "@/components/headers/Arc-header";
import Faq from "@/components/pages/arc-faq/faq";

export const metadata = {
  title: "Item Details || Xhibiter | NFT Marketplace Nextjs Template",
};

export default function ItemDetailsPage({ params }) {
  return (
    <>
      <Header3/>
      <main className="mt-24">
        <Faq/>
      </main>
      <Footer1 />
    </>
  );
}
