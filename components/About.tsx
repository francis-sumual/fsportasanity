"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
// import * as motion from "motion/react-client";
import { useState, useEffect } from "react";
import { client } from "@/lib/sanity";
import { PortableText } from "next-sanity";
import { motion } from "framer-motion";
import { urlForImage } from "@/lib/sanity-image";

export function AboutSection() {
  const [journeys, setJourneys] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchJourneys = async () => {
    // setIsLoading(true);

    const query = `*[_type == "journey"] | order(publishedAt asc) {
        title,
        slug,
        visitedAt,
        content,
        mainImage,
       categories[]->{title},
       
      }`;

    try {
      const result = await client.fetch(query);
      setJourneys(result);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setJourneys([]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJourneys();
  }); // Added currentPage and selectedCategory to dependencies

  if (isLoading) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Loading Curchs...</h2>
        </div>
      </section>
    );
  }
  return (
    <section className="py-16 dark:bg-black ">
      <motion.div initial={{ opacity: 0, x: -300 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 3 }}>
        <div className="flex justify-self-center">
          <Image src="/luce_friends.png" alt="Luce" width={480} height={480} className="p-4" />
        </div>
      </motion.div>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-20 text-center">About Our Pilgrimage Journey</h2>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <Card className="border-transparent">
            <CardHeader>
              <CardTitle className="py-1 rounded text-2xl font-bold ">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <motion.p whileHover={{ fontWeight: "bold", color: "#EABDE6" }}>
                Mendapatkan Indulgensi Penuh pada tahun rahmat yubelium, untuk kami berdua, orang tua serta saudara kami
                yang telah meninggal dunia.
              </motion.p>
            </CardContent>
          </Card>
          <Card className="border-transparent">
            <CardHeader>
              <CardTitle className="py-1 rounded text-2xl font-bold ">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <motion.p whileHover={{ fontWeight: "bold", color: "#EABDE6" }}>
                Mengunjungi sebanyak mungkin Porta Sancta di Sembilan Dekenat KAJ, mendoakan penuh Dua Belas intensi doa
                Bapa Suci, Sakramen tobat, perbuatan Amal Kasih kepada sesama yang membutuhkan.
              </motion.p>
            </CardContent>
          </Card>
          <Card className="border-transparent">
            <CardHeader>
              <CardTitle className="py-1 rounded text-2xl font-bold ">Our Targets</CardTitle>
            </CardHeader>
            <CardContent>
              <motion.p whileHover={{ fontWeight: "bold", color: "#EABDE6" }}>
                Berkunjung setidaknya Dua Gereja dalam sebulan dari Januari sampai Desember 2025, berkunjung ke
                gereja-gereja di Sembilan Dekenat Keuskupan Agung Jakarta.
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <div className="container mx-auto">
        <div className="mt-8">
          {journeys.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {journeys.map((journey) => (
                <Card key={journey.slug.current} className="border-transparent">
                  <CardHeader>
                    <CardTitle className="py-1 rounded text-2xl font-bold ">{journey.title}</CardTitle>
                    <CardTitle>
                      {journey.categories &&
                        journey.categories.map((category) => (
                          <span key={category.title} className="py-1 rounded text-xl font-bold text-blue-500">
                            {category.title}
                          </span>
                        ))}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <motion.div
                      initial={{ opacity: 0.5, y: 0, scale: 1 }}
                      whileHover={{ opacity: 1, y: -20, scale: 1.1 }}
                      transition={{ duration: 1 }}
                      className="mb-8 mt-8"
                    >
                      <div>
                        <Image
                          src={urlForImage(journey.mainImage).url() || "/placeholder.svg"}
                          alt={journey.title}
                          width={400}
                          height={400}
                          className="w-full h-96 object-cover"
                        />
                      </div>
                    </motion.div>
                    <motion.p whileHover={{ fontWeight: "bold", color: "#EABDE6" }}>
                      <PortableText value={journey.content} />
                    </motion.p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-center">No posts found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
