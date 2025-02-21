import { useTranslations } from "next-intl";

import { SectionItem } from "@/components/layout";
import { SectionWithItems as SectionWithItemsType } from "@/components/types";


export default function SectionWithItems({translationPaths, items = [], minCol, maxCol, id}: SectionWithItemsType) {
    const t = useTranslations();
    return <div id={id} className="page-section [&:not(:last-child)]:mb-12">
        <div className="mb-6 text-center text-3xl font-bold font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
          <h2>{t(translationPaths.title)} {id!="links"?`(${items.length})`:""}</h2>
        </div>
        
        <div className={`grid sm:grid-cols-${maxCol} grid-cols-${minCol} gap-6`}>
            {items.map((item, i) => {
                return <SectionItem key={`sectionItem_${i}`} item={item} />;
            })}
        </div>
    </div>
}