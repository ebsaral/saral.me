
import { useTranslations } from "next-intl";
import { getTranslations } from 'next-intl/server';

import { HomeInfoSection, InnerLayout, SectionWithItems, InfoLinks} from "@/components";
import { LinksSection, ProjectsSection, SoonSection } from "@/data";
import { InnerLayout as InnerLayoutType, SectionWithItems as SectionWithItemsType } from "@/types";

const Sections: SectionWithItemsType[] = [
  ProjectsSection,
  SoonSection,
  LinksSection
]

export async function generateMetadata({params}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Pages.Home.Metadata'});
  return {
    title: t('title'),
    description: t("description"),
    openGraph: {
      images: [
        {
          url:"/images/emin-bugra-saral-100.jpg"
        }
      ]
    }
  };
}

export default function Home() {
  const t = useTranslations("Pages.Home");
  const params: InnerLayoutType = {
    image: {
      src: "/images/logo.png", 
      alt:"Emin Bugra Saral"
    }, 
    title: t("title"),
    subtitle: t("subtitle")
  }

  return <InnerLayout params={params}>
    <>
      <InfoLinks />
      <hr className="page-break"></hr>
      <HomeInfoSection />
      <hr className="page-break"></hr>
      <div className="page-section">
        {Sections.map((section, i) => <SectionWithItems key={`sectionWithItems_${i}`} translationPaths={section.translationPaths} items={section.items} minCol={section.minCol} maxCol={section.maxCol} id={section.id} />)}      
      </div>
    </>
    </InnerLayout>;
}
