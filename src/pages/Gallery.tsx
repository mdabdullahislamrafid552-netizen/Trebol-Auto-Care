import { motion } from 'motion/react';

const images = [
  "https://instagram.fdac2-2.fna.fbcdn.net/v/t51.82787-15/642128092_17953467561094378_8953744963752975565_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=103&ig_cache_key=Mzg0MTg4MjIyMTAyNDc1MzU4NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=qt3OHS_3mJ4Q7kNvwGzUsI6&_nc_oc=AdrxDQBK9MLAk2qAQDkONaVv9buHUgI7ofqeHNp3pLQ1K3mfElJOqumwbDhT8-IYLAc&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=zir7Zbnt39WuTut17J6AiQ&_nc_ss=7a32e&oh=00_Af3L9IMcEvBU0BqN3Yy4PqBunr0az3SyB_9WVKZa7JTq2Q&oe=69DD70D8",
  "https://instagram.fdac2-2.fna.fbcdn.net/v/t51.82787-15/565186187_17938262589094378_1019340574365549753_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=105&ig_cache_key=Mzc0NTk0MTc2ODg0MDgyMTA0Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=FH03w_kImXEQ7kNvwEbw6Qo&_nc_oc=AdrhbKuFLDklMyRJJW34_vXNyQ0aUv_76zNkrDmSs715Pn1KjyBwjB0gE3EK3uiHBjA&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=zir7Zbnt39WuTut17J6AiQ&_nc_ss=7a32e&oh=00_Af3cIJBcXZD1rVFAy-R2k4Yw_6NwIckD96RSJfWwoRx_zA&oe=69DD85FB",
  "https://instagram.fdac2-1.fna.fbcdn.net/v/t51.82787-15/604994231_17945999889094378_5184825959287059233_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=109&ig_cache_key=Mzc9NDU1OTc2MTQyMjUwMzk2MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkxOS5oZHIuQzMifQ%3D%3D&_nc_ohc=Y2ckfsn0qIwQ7kNvwGRE9eT&_nc_oc=AdrXlvTgH4uhDwLHrmXEJ_PxJzLUxQX0vJ8ut_EDDcW6fbPlsAu2ssY0MPbFriamx3s&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=zir7Zbnt39WuTut17J6AiQ&_nc_ss=7a32e&oh=00_Af1UJkXrCqC7uZc_08tX0h_WJB3I9sZltFOQfgGTefWBiQ&oe=69DD584F",
  "https://instagram.fdac2-2.fna.fbcdn.net/v/t51.82787-15/537304743_17931696588094378_4058223597809677431_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=105&ig_cache_key=MzcwMzg5Mjk0NjUwMDQzODY2OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=gxNdVhexHOIQ7kNvwG0Pui2&_nc_oc=AdrN-zyJ723fXiww1tZiFlEKbi7UF4OSYNRJk915p6-Q39zpJ9gnslipqfqGZchQ8fI&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=zir7Zbnt39WuTut17J6AiQ&_nc_ss=7a32e&oh=00_Af2P6iQP5FehbotP-iCRHLQgzC5akXXpHeZnuqf1Mpze1Q&oe=69DD7B0E",
  "https://instagram.fdac2-2.fna.fbcdn.net/v/t51.82787-15/503489934_17926441083094378_7840328267892595682_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=101&ig_cache_key=MzY3MDY3MjcxODM2Mjc5OTA0Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=trfqDf0RttEQ7kNvwFBslQW&_nc_oc=Adrzy_BO0FI5pT1FzokQI8PWpigRJXXZnNqnmBsEbatD9qXeo2jszG5IGN0n6hKmeWM&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=i5TuBOpCiNsqV9zzNav3lw&_nc_ss=7a32e&oh=00_Af1dHB66UEXGXfExi0rKaC3VAmLL8fvF0iG7-y1_uRCwjg&oe=69DD5E2C",
  "https://instagram.fdac2-2.fna.fbcdn.net/v/t51.75761-15/491441605_17916792642094378_7148306818117393252_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=107&ig_cache_key=MzYxMDM4NjQzMDMzMDI3MzczNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5oZHIuQzMifQ%3D%3D&_nc_ohc=jwvFnqMrAmMQ7kNvwH2rkVz&_nc_oc=Ado8mbUuUh48cNjyl_bH2tH6_TBwxu281ledOBCkRPbBsu7j-eS6p4Fx6hu3Lnzrgd4&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=i5TuBOpCiNsqV9zzNav3lw&_nc_ss=7a32e&oh=00_Af0YTdIWmuffpuo7bLglSEQd2_-T3ge52vE4k71cIW3Mqg&oe=69DD8638"
];

export default function Gallery() {
  return (
    <main className="pt-32 pb-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-24 text-center">
          <span className="small-caps mb-4 block">The Portfolio</span>
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-8 leading-tight">
            Glossy <br />
            <span className="italic">Finishes</span>
          </h1>
          <p className="max-w-xl mx-auto text-white/50 font-light text-lg">
            A collection of our recent transformations. Every vehicle treated with the Trebol standard of excellence.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
            >
              <img 
                src={src} 
                alt={`Portfolio Image ${i + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="small-caps border border-white/40 px-6 py-2 rounded-full bg-black/20 backdrop-blur-sm">
                  View Detail
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <section className="mt-32 py-24 border-t border-white/5 text-center">
          <h2 className="text-3xl font-light mb-8">Follow our process on Instagram</h2>
          <a 
            href="#" 
            className="inline-block px-12 py-4 border border-white/20 rounded-full small-caps hover:bg-white hover:text-black transition-all"
          >
            @trebolautocare
          </a>
        </section>
      </div>
    </main>
  );
}
