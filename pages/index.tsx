import { GetStaticProps } from "next";
import Head from "next/head";
import { FunctionComponent } from "react";
import Hero from "../components/hero";
import PostList from "../components/post-list";
import { getPostsData } from "../lib/posts";
import { PostMetadata } from "../types/PostMetadata";
import Layout from "../components/layout";

const posts: PostMetadata[] = [
       
];

const Home: FunctionComponent<HomeProps> = (props) => {
    const { posts } = props

    return (
        <Layout>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <Head>
                    <title>HACKING UMSS</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main>
                    <Hero></Hero>
                    <div className="mt-4">
                      <PostList items={posts}></PostList>
                    </div>
                </main>
            </div>
        </Layout>
    );
};

type HomeProps = {
    posts: PostMetadata[]
}

const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
    const posts = getPostsData();
    return {
        props: { posts },
    };
};

export default Home
export {getStaticProps};
