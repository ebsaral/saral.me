import { useTranslations } from "next-intl";
import Image from "next/image"
import LastUpdate from "@/components/LastUpdate";
import HomePageLink from "./HomePageLink";


export default function HazzetiEmin() {
    const t = useTranslations();
    const lastUpdateDate = new Date("2024-12-12T06:37");
    
    return <div className="w-auto mr-3 ml-3">
    <div className="flex-col flex gap-6 mt-2 flex-wrap items-center justify-center text-center w-auto m-auto mb-10">
      <HomePageLink />  
      <Image
        className="rounded-3xl"
        src="/images/hazzeti-emin-logo.jpeg"
        alt="Hazzeti Emin (HAV)"
        width={450}
        height={450}
        priority
      />
      
      <div className="flex flex-col gap-10 items-center justify-center">
          <h1 className="text-2xl mt-2 font-bold">{t("Soon.title")}</h1>
          <p className="text-center text-lg font-bold">{t("Projects.HazzetiEmin.title")}</p>
          <p>{t("Soon.HazzetiEmin")}</p>
      </div>
    </div>
    

    <div className="text-center mt-10 mb-5 text-sm"><LastUpdate date={lastUpdateDate} /></div>
  </div>  
}