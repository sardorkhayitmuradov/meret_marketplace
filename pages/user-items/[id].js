import { exploreCollections } from "@/constants/exploreCollections";

export async function getStaticPaths() {
    const data = exploreCollections;

    const paths = data.map((users) => ({
        params: { id: users.id.toString() },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const data = exploreCollections;

    const user = data.find((users) => users.id.toString() === params.id);

    return { props: { user } };
}


export default function UserItems({user}) {
    return (
        <main className="py-32 h-screen">
            <section className="py-10">
                <div className="max-w-xl mx-auto w-full">

                </div>
            </section>
        </main>
    )
}