import HazzetiEmin from "@/components/HazzetiEmin";
import LanguageSelection from "@/components/LanguageSelection";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({params: {locale}}: {
  params: {locale: string};
}) {
  const t = await getTranslations({locale});
 
  return {
    title: t("Projects.HazzetiEmin.title"),
    description: t("Projects.HazzetiEmin.text"),
    openGraph: {
      images: [
        {
          url:"/images/hazzeti-emin-logo-small.png"
        }
      ]
    }
  };
}

export default function Page() {
    return (  
        <div className="flex flex-col gap-6 items-center font-[family-name:var(--font-geist-sans)]">
        <LanguageSelection className="mt-10" /> 
        <HazzetiEmin />
        </div>
    );
}