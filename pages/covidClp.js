import Link from 'next/link';
import Head from 'next/head';
import {NextSeo} from 'next-seo';

export const getServerSideProps = async () => {
    const res = await fetch('http://egaprsty.vercel.app/api/covidCilacap')
    const data = await res.json();

    return{
        props: { ninjas:data }
    }
}

const Ninjas = ({ ninjas }) => {
    return(
        <div className="bg-gray-200">
            <Head>
                <title>Realtime Data COVID</title>
            </Head>
            <NextSeo 
                title="Realtime Data COVID"
                description="This is realtime data COVID Application, i get the data from API Kawal Corona Indonesia, so thx."
            />
            <br/>

            <Link href="/">
                <button className="ml-5 pr-2 pl-2 bg-purple-300 hover:bg-blue-200 rounded-lg fixed">
                    Go Back
                </button>
            </Link>
            <hr/>
            <br/>
            <h1 className="text-center font-bold mt-2">REALTIME DATA COVID19</h1>
            <br/>
            <div className="flex ml-5 divide-x divide-green-500">
                <div className="bg-red-200 pr-1 pl-1 rounded-lg mr-2">
                    Positif
                </div>
                <div className="bg-yellow-200 pr-1 pl-1 rounded-lg">
                    Suspek
                </div>
            </div>
            <br/>

            {ninjas.map(ninja => (
                <div key={ninja}>
                    <div>
                    <div className="shadow ml-5 text-center rounded-full mr-3 pr-5 pl-5 bg-blue-200 mt-5">
                        <h3>{ ninja.name }</h3>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse justify-center">
                    <h3 className="ml-4 shadow text-center rounded-full mr-3 pr-5 pl-5 bg-yellow-200 mt-5">{ ninja.kontak}</h3>
                    <h3 className="ml-4 shadow text-center rounded-full mr-3 pr-5 pl-5 bg-red-200 mt-5">{ ninja.positif }</h3>
                    </div>
                </div>
            ))}
            <br/>
                <h1 className="text-center font-gray-100">Made with Love @egaprsty</h1>
        </div>
    )
}

export default Ninjas;
