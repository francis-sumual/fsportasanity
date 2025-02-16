"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const prayers = [
  {
    header: "Untuk Hak atas pendidikan",
    content:
      "Marilah kita berdoa bagi para migran, pengungsi, dan mereka yang mengalami dampak perang, semoga hak mereka atas pendidikan, yang diperlukan untuk membangun dunia yang lebih baik, senantiasa dihormati.",
    bulan: "Januari 2025",
  },
  {
    header: "Untuk Panggilan Imamat dan Hidup Religius.",
    content:
      "Marilah kita berdoa semoga Gereja dapat menyambut kerinduan dan keraguan kaum muda yang merasa terpanggil untuk melayani tugas perutusan Kristus melalui jalan imamat dan hidup religius.",
    bulan: "Pebuari 2025",
  },
  {
    header: "Untuk Keluarga-keluarga dalam Krisis",
    content:
      "Marilah kita berdoa semoga keluarga-keluarga yang retak dapat menemukan penyembuhan luka-luka mereka melalui pengampunan, serta menemukan kembali karunia satu sama lain, bahkan dalam perbedaan mereka.",
    bulan: "Maret 2025",
  },
  {
    header: "Untuk Penggunaan Teknologi Baru.",
    content:
      "Marilah kita berdoa semoga penggunaan teknologi baru tidak menggantikan hubungan antar-manusia, melainkan tetap menghormati martabat manusia, dan menjadi sarana bagi kita untuk menghadapi krisis zaman ini.",
    bulan: "April 2025",
  },
  {
    header: "Untuk Lingkungan Pekerjaan.",
    content:
      "Marilah kita berdoa semoga melalui pekerjaan, setiap orang dapat mencapai kepenuhan diri, keluarga-keluarga dapat terus hidup bermartabat, dan masyarakat semakin manusiawi.",
    bulan: "Mei 2025",
  },
  {
    header: "Untuk Dunia agar Bertumbuh dalam Belarasa.",
    content:
      "Mari kita berdoa semoga setiap dari kitadapat menemukan penghiburan dalam hubungan pribadi dengan Yesus, dan dari hati-Nya, kita belajar berbela rasa kepada sesama di dunia ini.",
    bulan: "Juni 2025",
  },
  {
    header: "Untuk Formasi dalam Berdiskresi.",
    content:
      "Mari kita berdoa semoga kita dapat kembali belajar bagaimana berdiskresi (membedakan Roh), mengetahui bagaimana cara memilih jalan hidup dan menolak segala sesuatu yang menjauhkan kita dari Kristus dan Injil.",
    bulan: "Juli 2025",
  },
  {
    header: "Untuk Hidup Saling Berdampingan.",
    content:
      "Mari kita berdoa semoga di tengah masyarakat yang tampaknya sulit untuk hidup berdampingan, kita tidak menyerah pada godaan untuk bertengkar karena alasan etnis, politik, agama, maupun ideologis.",
    bulan: "Agustus 2025",
  },
  {
    header: "Untuk Hubungan Kita dengan Seluruh Ciptaan.",
    content:
      "Terinspirasi oleh Santo Fransiskus, mari kita berdoa agar kita mampu mengalami ketergantungan kita dengan semua makhluk yang dicintai oleh Tuhan dan sudah selayaknya dicintai serta dihormati.",
    bulan: "September 2025",
  },
  {
    header: "Untuk Kerjasama antar Tradisi Agama.",
    content:
      "Mari kita berdoa semoga para penganut berbagai tradisi agama mampu bekerjasama demi membela dan mempromosikan perdamaian, keadilan, serta persaudaraan insani.",
    bulan: "Oktober 2025",
  },
  {
    header: "Untuk Upaya Pencegahan Bunuh Diri.",
    content:
      "Marilah kita berdoa semoga mereka yang mengalami godaan untuk bunuh diri dapatmenemukan dukungan, perhatian, dan kasih sayang yang mereka butuhkan dalam komunitas mereka, serta membuka diri terhadap indahnya kehidupan.",
    bulan: "Nopember 2025",
  },
  {
    header: "Untuk Umat Kristiani di Daerah Konflik.",
    content:
      "Marilah kita berdoa agar umat Kristiani yang tinggal di daerah perang atau konflik, terutama di Timur Tengah dapat menjadi benih perdamaian, rekonsiliasi, dan harapan.",
    bulan: "Desember 2025",
  },
];
export function PrayerSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start({ x: "-100%" });
    }
  }, [controls, inView]);

  return (
    <section ref={ref} className="py-16 dark:bg-black text-white-foreground overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-20 text-center">Doa Tahun Yubelium</h2>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            scale: { type: "spring", visualDuration: 1.5, bounce: 0.5 },
          }}
        >
          <div className="container mx-auto w-full lg:w-2/3">
            <Card className="flex-shrink-0  mx-4 bg-primary-foreground text-primary border-transparent">
              <CardContent className="p-4 ml-2 h-full">
                <p className="text-lg text-center font-medium dark:text-blue-200">
                  Bapa yang ada di Surga, semoga iman yang telah Engkau anugerahkan kepada kami dalam Putra-Mu, Yesus
                  Kristus, saudara kami, dan nyala api cinta kasih yang dicurahkan ke dalam hati kami oleh Roh Kudus,
                  membangkitkan pengharapan yang mulia akan kedatangan Kerajaan-Mu di dalam diri kami.
                </p>
                <p className="text-lg text-center font-medium dark:text-blue-200">
                  Semoga rahmat-Mu mengubah kamimenjadi penabur-penabur yang gigihakan benih- benih Injil yang
                  menghidupkan umat manusia dan seluruh alam semesta dalam penantian yang penuh iman akan Surga dan Bumi
                  baru, ketika mengalahkan kekuatan jahat, kemuliaan-Mu akan dinyatakan untuk selama-lamanya.
                </p>
                <p className="text-lg text-center font-medium dark:text-blue-200">
                  Semoga rahmat Tahun Yubileum ini menghidupkan kembali dalam diri kami, para peziarah pengharapan,
                  kerinduan akan harta surgawi, dan curahkanlah bagi seluruh dunia, sukacita dan damai dari Sang Penebus
                  kami. Bagi-Mu, ya Allah yang Mahakuasa, pujian dan kemuliaan sepanjang segala masa.
                </p>
                <p className="text-lg  text-center font-medium dark:text-blue-200">Amin.</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
        <h2 className="text-3xl font-bold mt-20 text-center">Intensi Doa Bapa Suci</h2>
        <div className="flex justify-center justify-items-center align-middle pt-20">
          <Carousel
            opts={{
              align: "start",
            }}
            orientation="vertical"
            className="w-full max-w-lg"
          >
            <CarouselContent className="-mt-1 w-80 max-h-96 mx-auto">
              {[...prayers, ...prayers].map((prayer, index) => (
                <CarouselItem className="md:basis-1/1 lg:basis-1/1" key={index}>
                  <Card className="flex-shrink-0  h-full mx-4 bg-primary-foreground text-primary mt-10 border-transparent">
                    <CardTitle className="p-4 ml-2 dark:text-blue-300">
                      <p className="text-2xl font-bold text-center">{prayer.bulan}</p>
                    </CardTitle>
                    <CardHeader className="text-lg font-bold text-center">{prayer.header}</CardHeader>
                    <CardContent>
                      <p className="text-sm text-center font-medium dark:text-blue-200">{prayer.content}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
