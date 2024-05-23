import Image from "next/image";
import Link from 'next/link';
import JellyfinSVG from '../public/jellyfin-svgrepo-com.svg';
import JellfinVueSVG from '../public/vue-svgrepo-com.svg';
import PlexSVG from '../public/plex-svgrepo-com.svg';
import DiscordSVG from '../public/discord-v2-svgrepo-com.svg';
import { getData } from '../lib/getdata';

export default async function Home() {
    const posts = await getData()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-tr from-slate-900 to-purple-900">

      <div>
          {posts.map((post) => {
            return (
              <div key={post.id}>
              <p>{post.title}</p>
              {/* {JSON.stringify(post)} */}
              </div>

            )
          })}
          </div>        
          <div className="items-center space-x-4 m-auto px-5 py-5 bg-slate-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-slate-500 border-opacity-70">
          <h1 className="text-4xl font-bold text-center">Welcome to Cinewave.</h1>
          <p className="text-center text-lg mt-4"> Dont Let The Ocean Take You</p>
        </div>
        <div className="items-center space-x-4 m-auto px-5 py-5 bg-slate-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-slate-500 border-opacity-70">

          <Link target="_blank" href="https://jellyfin.cinewave.lol">
            <button className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-slate-600 text-white hover:bg-slate-700 disabled:opacity-50 disabled:pointer-events-none">
            <Image src={JellyfinSVG} height="20" width="20"></Image>
              Jellyfin 
            </button>
          </Link>

          <Link target="_blank" href="https://jellyfinvue.cinewave.lol">
            <button className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-slate-600 text-white hover:bg-slate-700 disabled:opacity-50 disabled:pointer-events-none">
            <Image src={JellfinVueSVG} height="20" width="20"></Image> 
              Jellyfin Vue.js 
            </button>
          </Link>

          <Link target="_blank" href="https://plex.cinewave.lol">
          <button className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-slate-600 text-white hover:bg-slate-700 disabled:opacity-50 disabled:pointer-events-none"> 
          <Image src={PlexSVG} height="20" width="20"></Image>
            Plex 
          </button>
          </Link>

          <Link target="_blank" href="https://discord.gg/8NPNRQD5p5">
          <button className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-slate-600 text-white hover:bg-slate-700 disabled:opacity-50 disabled:pointer-events-none"> 
          <Image src={DiscordSVG} height="20" width="20"></Image>
            Discord 
          </button>
          </Link> 

        </div>
    </main>
  );
}